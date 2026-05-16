import { useMemo, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { Minus, Plus, Loader2, Flame } from "lucide-react";
import { placeOrder } from "@/lib/order.functions";

const AREAS = [
  "Kitengela Town",
  "EPZ",
  "Milimani",
  "Acacia",
  "Yukos",
  "Kware",
  "KAG / Noonkopir",
  "New Valley",
];

const UNIT_PRICE = 20;
const DELIVERY_FEE = 50;

export function OrderForm() {
  const submit = useServerFn(placeOrder);
  const [qty, setQty] = useState(10);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState<{ id: string; total: number } | null>(null);

  const subtotal = qty * UNIT_PRICE;
  const total = subtotal + DELIVERY_FEE;

  const presets = useMemo(() => [5, 10, 20, 50, 100], []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setSubmitting(true);
    try {
      const res = await submit({
        data: {
          name: String(fd.get("name") || ""),
          phone: String(fd.get("phone") || ""),
          area: String(fd.get("area") || ""),
          address: String(fd.get("address") || ""),
          quantity: qty,
          notes: String(fd.get("notes") || ""),
          payment: (String(fd.get("payment") || "MPESA")) as "MPESA" | "CASH",
        },
      });
      if (res.ok) {
        toast.success("Order received! We're firing up the jiko 🔥");
        setDone({ id: res.orderId, total: res.total });
        (e.target as HTMLFormElement).reset();
        setQty(10);
      } else {
        toast.error(res.error || "Could not place order");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Try WhatsApp 0718357737.");
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div className="rounded-2xl glass p-6 text-center">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-sunset neon-glow">
          <Flame className="h-7 w-7 text-primary-foreground" />
        </div>
        <h3 className="mt-4 text-xl font-extrabold">Order confirmed</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Reference <span className="font-mono text-primary">{done.id}</span> · Total{" "}
          <span className="font-semibold text-foreground">KES {done.total}</span>
        </p>
        <p className="mt-4 text-sm">
          Our team has been notified. We'll WhatsApp you shortly to confirm delivery.
        </p>
        <button
          onClick={() => setDone(null)}
          className="mt-5 rounded-full bg-sunset px-5 py-2 text-sm font-semibold text-primary-foreground neon-glow"
        >
          Place another order
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl glass p-5 sm:p-6">
      <div className="mb-4">
        <div className="text-xs uppercase tracking-widest text-primary">Step 1</div>
        <h3 className="text-lg font-bold">How many chapatis?</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {presets.map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => setQty(p)}
            className={`rounded-full border px-3 py-1.5 text-sm transition ${
              qty === p
                ? "bg-sunset text-primary-foreground border-transparent neon-glow"
                : "border-border bg-card hover:border-primary"
            }`}
          >
            {p} pcs
          </button>
        ))}
      </div>

      <div className="mt-3 flex items-center gap-3">
        <button
          type="button"
          aria-label="Decrease"
          onClick={() => setQty((q) => Math.max(5, q - 1))}
          className="grid h-10 w-10 place-items-center rounded-full bg-card border border-border"
        >
          <Minus className="h-4 w-4" />
        </button>
        <input
          type="number"
          min={5}
          max={500}
          value={qty}
          onChange={(e) => setQty(Math.max(5, Math.min(500, Number(e.target.value) || 5)))}
          className="w-24 rounded-md border border-input bg-background px-3 py-2 text-center text-lg font-bold"
        />
        <button
          type="button"
          aria-label="Increase"
          onClick={() => setQty((q) => Math.min(500, q + 1))}
          className="grid h-10 w-10 place-items-center rounded-full bg-card border border-border"
        >
          <Plus className="h-4 w-4" />
        </button>
        <div className="ml-auto text-right">
          <div className="text-xs text-muted-foreground">@ KES {UNIT_PRICE} each</div>
          <div className="text-lg font-extrabold text-gradient">KES {subtotal}</div>
        </div>
      </div>

      <div className="my-6 h-px bg-border" />

      <div className="mb-2 text-xs uppercase tracking-widest text-primary">Step 2 — Your details</div>

      <div className="grid gap-3 sm:grid-cols-2">
        <Input name="name" label="Full name" placeholder="Jane Wanjiku" required />
        <Input name="phone" label="Phone (M-PESA)" placeholder="0712 345 678" required type="tel" />
        <div className="sm:col-span-2">
          <label className="mb-1 block text-xs font-medium text-muted-foreground">Delivery area</label>
          <select
            name="area"
            required
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            defaultValue=""
          >
            <option value="" disabled>Select your area in Kitengela</option>
            {AREAS.map((a) => <option key={a} value={a}>{a}</option>)}
          </select>
        </div>
        <div className="sm:col-span-2">
          <Input name="address" label="Building / Estate / Landmark" placeholder="e.g. Tuskys, Apt 4B" required />
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1 block text-xs font-medium text-muted-foreground">Notes (optional)</label>
          <textarea
            name="notes"
            rows={2}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            placeholder="Gate code, extra hot, etc."
          />
        </div>
      </div>

      <div className="my-6 h-px bg-border" />

      <div className="mb-2 text-xs uppercase tracking-widest text-primary">Step 3 — Payment</div>
      <div className="grid grid-cols-2 gap-2">
        <PaymentRadio name="payment" value="MPESA" label="M-PESA" defaultChecked />
        <PaymentRadio name="payment" value="CASH" label="Cash on delivery" />
      </div>

      <div className="mt-6 flex items-center justify-between rounded-xl bg-card/60 p-4">
        <div>
          <div className="text-xs text-muted-foreground">Total (incl. KES {DELIVERY_FEE} delivery)</div>
          <div className="text-2xl font-black text-gradient">KES {total}</div>
        </div>
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center gap-2 rounded-full bg-sunset px-6 py-3 text-sm font-bold text-primary-foreground neon-glow disabled:opacity-60"
        >
          {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Flame className="h-4 w-4" />}
          {submitting ? "Sending…" : "Place Order"}
        </button>
      </div>
      <p className="mt-3 text-center text-[11px] text-muted-foreground">
        We deliver 7PM – 10PM daily. Trouble ordering? WhatsApp 0718357737.
      </p>
    </form>
  );
}

function Input({
  name, label, placeholder, required, type = "text",
}: { name: string; label: string; placeholder?: string; required?: boolean; type?: string }) {
  return (
    <div>
      <label className="mb-1 block text-xs font-medium text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
      />
    </div>
  );
}

function PaymentRadio({
  name, value, label, defaultChecked,
}: { name: string; value: string; label: string; defaultChecked?: boolean }) {
  return (
    <label className="flex cursor-pointer items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-sm has-[:checked]:border-primary has-[:checked]:ring-neon">
      <input type="radio" name={name} value={value} defaultChecked={defaultChecked} className="accent-primary" />
      {label}
    </label>
  );
}
