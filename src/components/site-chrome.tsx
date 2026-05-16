import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle } from "lucide-react";

const WHATSAPP = "254718357737";
const PHONE = "0718357737";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 glass">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-full bg-sunset text-primary-foreground font-black neon-glow">
            M
          </div>
          <div className="leading-tight">
            <div className="text-base font-extrabold tracking-tight">Moo Chapatis</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
              Order, We Deliver
            </div>
          </div>
        </Link>
        <nav className="hidden gap-6 md:flex">
          <Link to="/" className="text-sm hover:text-primary">Home</Link>
          <Link to="/menu" className="text-sm hover:text-primary">Menu</Link>
          <Link to="/about" className="text-sm hover:text-primary">About</Link>
          <Link to="/contact" className="text-sm hover:text-primary">Contact</Link>
        </nav>
        <a
          href={`https://wa.me/${WHATSAPP}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-sunset px-3 py-1.5 text-xs font-semibold text-primary-foreground neon-glow"
          aria-label="WhatsApp order"
        >
          <MessageCircle className="h-3.5 w-3.5" /> Order
        </a>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border/60 bg-card/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <div className="text-lg font-extrabold text-gradient">Moo Chapatis</div>
          <p className="mt-2 text-sm text-muted-foreground">
            Fresh hot chapatis delivered fast across Kitengela. Daily 7PM – 10PM.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold">Contact</div>
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 text-primary" />
              <a href={`tel:+${WHATSAPP}`}>{PHONE}</a>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle className="h-3.5 w-3.5 text-primary" />
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer">
                WhatsApp us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold">Links</div>
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
            <li><Link to="/menu">Menu & Pricing</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Moo Chapatis · Kitengela, Kenya
      </div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP}?text=Hi%20Moo%20Chapatis%2C%20I%27d%20like%20to%20order`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-sunset text-primary-foreground animate-pulse-neon"
      aria-label="Order on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
