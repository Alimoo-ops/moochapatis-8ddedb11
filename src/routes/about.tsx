import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, FloatingWhatsApp } from "@/components/site-chrome";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Moo Chapatis Kitengela" },
      { name: "description", content: "Moo Chapatis is a Kitengela-born chapati delivery brand obsessed with fresh, soft, hot chapatis delivered fast." },
      { property: "og:title", content: "About — Moo Chapatis" },
      { property: "og:description", content: "Kitengela-born chapati delivery, focused on freshness and speed." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function AboutPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-4xl font-black sm:text-5xl">About <span className="text-gradient">Moo Chapatis</span></h1>
        <div className="mt-6 space-y-4 text-muted-foreground">
          <p>
            Moo Chapatis was born in Kitengela with one simple mission: deliver the softest,
            freshest, hottest chapatis right to your doorstep — fast.
          </p>
          <p>
            We don't do shortcuts. Every chapati is made the moment you order, layered the
            traditional way, and rushed to you while it's still steaming.
          </p>
          <p>
            Our slogan says it all — <span className="text-primary font-semibold">Order, We Deliver</span>.
            Daily, 7PM to 10PM, across Kitengela.
          </p>
        </div>
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}
