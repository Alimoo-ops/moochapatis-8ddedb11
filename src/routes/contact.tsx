import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, FloatingWhatsApp } from "@/components/site-chrome";
import { Phone, MessageCircle, Clock, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Moo Chapatis Kitengela" },
      { name: "description", content: "Call or WhatsApp Moo Chapatis on 0718357737. Daily 7PM–10PM delivery across Kitengela." },
      { property: "og:title", content: "Contact Moo Chapatis" },
      { property: "og:description", content: "Call or WhatsApp 0718357737. Delivery 7PM–10PM daily in Kitengela." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function ContactPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-4xl font-black sm:text-5xl">Get in <span className="text-gradient">Touch</span></h1>
        <p className="mt-2 text-muted-foreground">We're here daily — WhatsApp is the fastest way.</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <a href="https://wa.me/254718357737" target="_blank" rel="noopener noreferrer"
             className="rounded-2xl glass p-5 hover:border-primary">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-sunset text-primary-foreground neon-glow">
              <MessageCircle className="h-5 w-5" />
            </div>
            <div className="mt-3 font-bold">WhatsApp</div>
            <div className="text-sm text-muted-foreground">0718 357 737 — chat now</div>
          </a>
          <a href="tel:+254718357737" className="rounded-2xl glass p-5 hover:border-primary">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-sunset text-primary-foreground neon-glow">
              <Phone className="h-5 w-5" />
            </div>
            <div className="mt-3 font-bold">Call</div>
            <div className="text-sm text-muted-foreground">0718 357 737</div>
          </a>
          <div className="rounded-2xl glass p-5">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-sunset text-primary-foreground neon-glow">
              <Clock className="h-5 w-5" />
            </div>
            <div className="mt-3 font-bold">Delivery hours</div>
            <div className="text-sm text-muted-foreground">7PM – 10PM, every day</div>
          </div>
          <div className="rounded-2xl glass p-5">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-sunset text-primary-foreground neon-glow">
              <MapPin className="h-5 w-5" />
            </div>
            <div className="mt-3 font-bold">Service area</div>
            <div className="text-sm text-muted-foreground">Kitengela — Town, EPZ, Milimani, Acacia, Yukos, Kware, KAG, New Valley</div>
          </div>
        </div>
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}
