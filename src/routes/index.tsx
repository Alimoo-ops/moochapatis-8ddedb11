import { createFileRoute, Link } from "@tanstack/react-router";
import { Flame, Clock, Truck, ShieldCheck, MapPin, Star } from "lucide-react";
import { SiteHeader, SiteFooter, FloatingWhatsApp } from "@/components/site-chrome";
import { OrderForm } from "@/components/order-form";
import hero from "@/assets/hero-chapati.jpg";
import product from "@/assets/chapati-product.jpg";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Moo Chapatis — Fresh Hot Chapatis Delivered Fast in Kitengela" },
      { name: "description", content: "Order soft, fresh, hot chapatis delivered to your door in Kitengela. KES 20 each. Daily 7PM–10PM. M-PESA or cash. Order now." },
      { property: "og:title", content: "Moo Chapatis — Fresh Hot Chapatis Delivered Fast" },
      { property: "og:description", content: "Hot chapatis delivered across Kitengela. KES 20 each. 7PM–10PM daily." },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "/og-cover.jpg" },
      { name: "twitter:image", content: "/og-cover.jpg" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Fresh Hot Chapati",
          image: ["/og-cover.jpg"],
          description: "Soft, fluffy Kenyan chapati. Made fresh and delivered hot in Kitengela.",
          brand: { "@type": "Brand", name: "Moo Chapatis" },
          offers: {
            "@type": "Offer",
            priceCurrency: "KES",
            price: "20",
            availability: "https://schema.org/InStock",
            areaServed: "Kitengela",
          },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "184" },
        }),
      },
    ],
  }),
});

function Home() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10" style={{ background: "var(--gradient-glow)" }} />
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 md:grid-cols-2 md:py-20">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-card/60 px-3 py-1 text-[11px] uppercase tracking-widest text-primary">
              <Flame className="h-3 w-3" /> Now delivering in Kitengela
            </span>
            <h1 className="mt-4 text-4xl font-black leading-[1.05] sm:text-5xl md:text-6xl">
              <span className="neon-text text-gradient">Order.</span> We Deliver.
            </h1>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Fresh hot chapatis — soft, layered, and golden — delivered to your doorstep across Kitengela. Daily 7PM – 10PM.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#order"
                className="inline-flex items-center gap-2 rounded-full bg-sunset px-6 py-3 text-sm font-bold text-primary-foreground neon-glow"
              >
                <Flame className="h-4 w-4" /> Order Now — KES 20 each
              </a>
              <a
                href="https://wa.me/254718357737"
                target="_blank" rel="noopener noreferrer"
                className="rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold hover:border-primary"
              >
                WhatsApp 0718357737
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 text-center">
              {[
                { k: "4.9★", v: "184+ reviews" },
                { k: "30 min", v: "avg delivery" },
                { k: "100%", v: "fresh today" },
              ].map((s) => (
                <div key={s.k} className="rounded-xl glass p-3">
                  <div className="text-xl font-extrabold text-gradient">{s.k}</div>
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] opacity-70 blur-3xl"
                 style={{ background: "var(--gradient-sunset)" }} />
            <img
              src={hero}
              alt="Stack of fresh hot golden Moo Chapatis"
              width={1280}
              height={1280}
              fetchPriority="high"
              className="aspect-square w-full rounded-[2rem] object-cover ring-neon animate-float"
            />
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { i: Flame, t: "Fresh & hot", d: "Cooked the moment you order." },
            { i: Truck, t: "Fast delivery", d: "Across Kitengela in 30 min." },
            { i: Clock, t: "7PM – 10PM", d: "Open every day of the week." },
            { i: ShieldCheck, t: "Hygienic kitchen", d: "Clean, careful, food-safe." },
          ].map(({ i: Icon, t, d }) => (
            <div key={t} className="rounded-2xl glass p-5">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-sunset text-primary-foreground neon-glow">
                <Icon className="h-5 w-5" />
              </div>
              <div className="mt-3 font-bold">{t}</div>
              <div className="text-sm text-muted-foreground">{d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Menu preview + order */}
      <section id="order" className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-black sm:text-4xl">Today's <span className="text-gradient">Menu</span></h2>
            <p className="mt-2 text-muted-foreground">
              One thing, done perfectly. Soft, layered, golden chapatis — straight off the jiko.
            </p>
            <div className="mt-6 rounded-2xl glass p-5">
              <div className="flex items-center gap-4">
                <img
                  src={product}
                  alt="Single fresh chapati with ghee"
                  width={120}
                  height={120}
                  loading="lazy"
                  className="h-24 w-24 rounded-2xl object-cover ring-neon"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-extrabold">Fresh Hot Chapati</h3>
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">Bestseller</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Soft, layered, golden. Made to order.</p>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="text-2xl font-black text-gradient">KES 20</div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Star className="h-3 w-3 fill-primary text-primary" /> 4.9 (184)
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
                <Bundle qty={5} />
                <Bundle qty={10} />
                <Bundle qty={20} />
              </div>
            </div>

            <div className="mt-6 rounded-2xl glass p-5">
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold">
                <MapPin className="h-4 w-4 text-primary" /> Delivery areas (Kitengela)
              </div>
              <div className="flex flex-wrap gap-2">
                {["Kitengela Town","EPZ","Milimani","Acacia","Yukos","Kware","KAG / Noonkopir","New Valley"].map((a) => (
                  <span key={a} className="rounded-full border border-border bg-card px-3 py-1 text-xs">
                    {a}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-[11px] text-muted-foreground">
                Flat KES 50 delivery within Kitengela. Outside the listed zones? <Link to="/contact" className="text-primary">Contact us.</Link>
              </p>
            </div>
          </div>

          <div>
            <OrderForm />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-center text-3xl font-black">What Kitengela is saying</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            { n: "Mercy K.", t: "Hot, soft and arrived in 25 minutes. My family is hooked!" },
            { n: "Brian O.", t: "Best chapatis in Kitengela. Worth every shilling." },
            { n: "Aisha M.", t: "Ordered for a small event — perfect, fresh, and on time." },
          ].map((r) => (
            <div key={r.n} className="rounded-2xl glass p-5">
              <div className="flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-primary" />)}
              </div>
              <p className="mt-2 text-sm">"{r.t}"</p>
              <div className="mt-3 text-xs font-semibold text-muted-foreground">— {r.n}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="rounded-3xl bg-sunset p-8 text-center text-primary-foreground neon-glow sm:p-12">
          <h2 className="text-3xl font-black sm:text-4xl">Hungry? We're firing up the jiko 🔥</h2>
          <p className="mx-auto mt-2 max-w-xl opacity-90">
            Order in seconds — pay on delivery or via M-PESA. Open 7PM – 10PM daily.
          </p>
          <a
            href="#order"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-bold text-foreground"
          >
            <Flame className="h-4 w-4 text-primary" /> Order Now
          </a>
        </div>
      </section>

      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}

function Bundle({ qty }: { qty: number }) {
  return (
    <a href="#order" className="rounded-xl border border-border bg-card p-2 hover:border-primary">
      <div className="text-xs text-muted-foreground">{qty} pcs</div>
      <div className="text-base font-extrabold">KES {qty * 20}</div>
    </a>
  );
}
