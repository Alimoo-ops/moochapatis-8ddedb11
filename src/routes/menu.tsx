import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, FloatingWhatsApp } from "@/components/site-chrome";
import product from "@/assets/chapati-product.jpg";
import { Flame } from "lucide-react";

export const Route = createFileRoute("/menu")({
  component: MenuPage,
  head: () => ({
    meta: [
      { title: "Menu & Pricing — Moo Chapatis Kitengela" },
      { name: "description", content: "Our menu: Fresh hot chapatis at KES 20 each. Bundles available. Delivery 7PM–10PM across Kitengela." },
      { property: "og:title", content: "Menu & Pricing — Moo Chapatis" },
      { property: "og:description", content: "Fresh hot chapatis at KES 20 each. Bundles, delivery, M-PESA." },
      { property: "og:url", content: "/menu" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
});

const BUNDLES = [
  { qty: 5, label: "Solo" },
  { qty: 10, label: "Couple" },
  { qty: 20, label: "Family" },
  { qty: 50, label: "Group" },
  { qty: 100, label: "Event" },
];

function MenuPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-4 py-10">
        <h1 className="text-4xl font-black sm:text-5xl">Our <span className="text-gradient">Menu</span></h1>
        <p className="mt-2 max-w-xl text-muted-foreground">
          One thing, done perfectly. Fresh, hot, layered chapatis from KES 20 each.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {BUNDLES.map((b) => (
            <div key={b.qty} className="rounded-2xl glass p-5">
              <div className="flex items-center gap-4">
                <img src={product} alt="Chapati" width={96} height={96} loading="lazy"
                     className="h-20 w-20 rounded-xl object-cover ring-neon" />
                <div className="flex-1">
                  <div className="text-xs uppercase tracking-widest text-primary">{b.label}</div>
                  <div className="text-lg font-extrabold">{b.qty} Chapatis</div>
                  <div className="text-2xl font-black text-gradient">KES {b.qty * 20}</div>
                </div>
                <Link to="/" hash="order" className="rounded-full bg-sunset px-4 py-2 text-xs font-bold text-primary-foreground neon-glow">
                  Order
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl glass p-6">
          <div className="flex items-center gap-2 text-sm font-semibold"><Flame className="h-4 w-4 text-primary" /> How it works</div>
          <ol className="mt-3 grid gap-3 text-sm text-muted-foreground sm:grid-cols-3">
            <li><b className="text-foreground">1.</b> Pick your bundle and area.</li>
            <li><b className="text-foreground">2.</b> Pay via M-PESA or on delivery.</li>
            <li><b className="text-foreground">3.</b> Hot chapatis at your door in ~30 min.</li>
          </ol>
        </div>
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}
