import { createFileRoute } from "@tanstack/react-router";
import heroArtwork from "@/assets/hero-artwork.jpg";
import print1 from "@/assets/print-1.jpg";
import print2 from "@/assets/print-2.jpg";
import print3 from "@/assets/print-3.jpg";
import studio from "@/assets/studio.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const SHOP_URL = "https://gak-creations.printify.me";

function Index() {
  return (
    <div className="min-h-screen bg-paper text-ink font-body">
      <Header />
      <Hero />
      <Marquee />
      <Editorial />
      <Collection />
      <StudioNote />
      <Shop />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="border-b border-ink/15">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-12">
        <a href="/" className="eyebrow">
          Est. Studio
        </a>
        <a href="/" className="font-display text-xl tracking-wide md:text-2xl">
          GAK <span className="italic font-light">Creations</span>
        </a>
        <a
          href={SHOP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="eyebrow hidden md:inline-block hover:text-ink"
        >
          Shop →
        </a>
        <a
          href={SHOP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="eyebrow md:hidden"
        >
          Shop
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="border-b border-ink/15">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-6 py-14 md:grid-cols-12 md:gap-8 md:px-12 md:py-24">
        <div className="md:col-span-5 md:pt-6">
          <p className="eyebrow">Volume 01 · Contemporary Prints</p>
          <h1 className="mt-8 font-display text-[3.5rem] leading-[0.95] tracking-tight md:text-[6rem]">
            Ink, <em className="font-light">paper,</em>
            <br />
            <span className="italic font-light">and</span> quiet
            <br />
            gestures.
          </h1>
          <p className="mt-8 max-w-md text-base leading-relaxed text-ink-soft md:text-lg">
            A contemporary studio of original works on paper. Each print is an
            edition — considered, unhurried, made to live on your walls.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href={SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-ink px-7 py-4 text-sm font-medium uppercase tracking-[0.2em] text-paper transition hover:bg-ink-soft"
            >
              Shop the Collection
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#collection"
              className="text-sm uppercase tracking-[0.2em] text-ink underline underline-offset-8 decoration-ink/40 hover:decoration-ink"
            >
              View works
            </a>
          </div>
        </div>

        <div className="relative md:col-span-7">
          <div className="absolute -left-4 top-0 hidden h-full w-px bg-ink/20 md:block" />
          <figure className="relative">
            <img
              src={heroArtwork}
              alt="Featured contemporary ink and wash artwork by GAK"
              width={1400}
              height={1600}
              className="w-full object-cover"
            />
            <figcaption className="mt-4 flex items-start justify-between gap-6 text-xs uppercase tracking-[0.2em] text-ink-soft">
              <span>Fig. 001 — Untitled, ink on paper</span>
              <span>2026</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "Original Works",
    "Limited Editions",
    "Museum-Grade Paper",
    "Worldwide Shipping",
    "New Volume",
  ];
  return (
    <div className="overflow-hidden border-b border-ink/15 bg-paper-warm">
      <div className="flex whitespace-nowrap py-5 [animation:marquee_40s_linear_infinite]">
        {[...items, ...items, ...items].map((t, i) => (
          <span
            key={i}
            className="mx-10 font-display text-2xl italic text-ink md:text-3xl"
          >
            {t} <span className="mx-8 text-ink/40">✦</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0);} to { transform: translateX(-33.333%);} }`}</style>
    </div>
  );
}

function Editorial() {
  return (
    <section className="border-b border-ink/15">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 py-20 md:grid-cols-12 md:px-12 md:py-28">
        <div className="md:col-span-4">
          <p className="eyebrow">The Notebook</p>
          <div className="rule-line mt-6 w-16" />
        </div>
        <div className="md:col-span-8">
          <h2 className="font-display text-4xl leading-[1.05] md:text-6xl">
            Art that <em className="font-light">arrives quietly</em> and stays
            for a long time.
          </h2>
          <div className="mt-10 grid gap-8 text-base leading-relaxed text-ink-soft md:grid-cols-2 md:text-[1.05rem]">
            <p>
              GAK Creations is a small contemporary studio publishing original
              works on paper. Every piece begins in the studio with ink,
              pigment, and time — then travels to you as an archival print,
              made on demand by a partner press.
            </p>
            <p>
              The store lives on Printify, so orders ship globally with the
              craft standards of a proper print house. This site is the front
              door — a place to sit with the work before you take it home.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Collection() {
  const works = [
    {
      img: print1,
      no: "N° 02",
      title: "Botanica",
      medium: "Ink · Framed print",
    },
    {
      img: print2,
      no: "N° 03",
      title: "Interference",
      medium: "Mixed media · Giclée",
    },
    {
      img: print3,
      no: "N° 04",
      title: "Figure, in one line",
      medium: "Ink on paper",
    },
  ];

  return (
    <section id="collection" className="border-b border-ink/15">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Selected Works</p>
            <h2 className="mt-6 font-display text-4xl md:text-6xl">
              The <em className="font-light">Collection</em>
            </h2>
          </div>
          <a
            href={SHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="eyebrow hover:text-ink"
          >
            Browse all in shop →
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          {/* Feature */}
          <a
            href={SHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group md:col-span-7"
          >
            <div className="overflow-hidden bg-paper-warm">
              <img
                src={works[0].img}
                alt={works[0].title}
                width={900}
                height={1100}
                loading="lazy"
                className="w-full object-cover transition duration-700 group-hover:scale-[1.02]"
              />
            </div>
            <div className="mt-5 flex items-baseline justify-between border-b border-ink/20 pb-4">
              <div>
                <p className="eyebrow">{works[0].no}</p>
                <h3 className="mt-2 font-display text-3xl md:text-4xl">
                  {works[0].title}
                </h3>
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-ink-soft">
                {works[0].medium}
              </span>
            </div>
          </a>

          {/* Two stacked */}
          <div className="grid grid-cols-1 gap-10 md:col-span-5">
            {works.slice(1).map((w) => (
              <a
                key={w.no}
                href={SHOP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="overflow-hidden bg-paper-warm">
                  <img
                    src={w.img}
                    alt={w.title}
                    width={900}
                    height={1100}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="mt-4 flex items-baseline justify-between border-b border-ink/20 pb-3">
                  <div>
                    <p className="eyebrow">{w.no}</p>
                    <h3 className="mt-2 font-display text-2xl">{w.title}</h3>
                  </div>
                  <span className="text-[0.65rem] uppercase tracking-[0.2em] text-ink-soft">
                    {w.medium}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StudioNote() {
  return (
    <section className="border-b border-ink/15 bg-paper-warm">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 py-20 md:grid-cols-12 md:px-12 md:py-28">
        <figure className="md:col-span-6">
          <img
            src={studio}
            alt="Inside the GAK Creations studio"
            width={1200}
            height={900}
            loading="lazy"
            className="w-full object-cover"
          />
          <figcaption className="mt-4 text-xs uppercase tracking-[0.2em] text-ink-soft">
            The studio — morning light
          </figcaption>
        </figure>
        <div className="md:col-span-6 md:pl-8">
          <p className="eyebrow">A Note from the Studio</p>
          <blockquote className="mt-8 font-display text-3xl leading-tight md:text-5xl">
            <span className="text-ink/30">“</span>
            I make prints for the quiet hours — the ones with coffee, open
            windows, and no particular plan.
            <span className="text-ink/30">”</span>
          </blockquote>
          <p className="mt-8 text-sm uppercase tracking-[0.25em] text-ink-soft">
            — GAK, Founder & Artist
          </p>
          <div className="rule-line mt-10 w-24" />
        </div>
      </div>
    </section>
  );
}

function Shop() {
  return (
    <section className="border-b border-ink/15">
      <div className="mx-auto max-w-[1400px] px-6 py-24 text-center md:px-12 md:py-32">
        <p className="eyebrow">The Storefront</p>
        <h2 className="mx-auto mt-8 max-w-4xl font-display text-5xl leading-[1] md:text-8xl">
          Take a <em className="font-light">piece</em> of the studio
          <br />
          <span className="italic font-light">home.</span>
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-ink-soft">
          The complete collection is published on our print-on-demand
          storefront. Every order is made-to-order and shipped worldwide.
        </p>
        <a
          href={SHOP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-flex items-center gap-4 bg-ink px-10 py-5 text-sm font-medium uppercase tracking-[0.25em] text-paper transition hover:bg-ink-soft"
        >
          Enter the Shop
          <span>→</span>
        </a>
        <p className="mt-6 text-xs uppercase tracking-[0.2em] text-ink-soft">
          gak-creations.printify.me
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-6 py-16 md:grid-cols-12 md:px-12">
        <div className="md:col-span-6">
          <p className="font-display text-4xl md:text-5xl">
            GAK <em className="font-light">Creations</em>
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/60">
            Contemporary art prints, made in the studio and shipped from a
            partner print house.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="text-[0.65rem] uppercase tracking-[0.28em] text-paper/50">
            Elsewhere
          </p>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a
                href={SHOP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-paper/70"
              >
                Printify Storefront
              </a>
            </li>
            <li>
              <a
                href="https://www.gakcreations.com"
                className="hover:text-paper/70"
              >
                gakcreations.com
              </a>
            </li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="text-[0.65rem] uppercase tracking-[0.28em] text-paper/50">
            Studio
          </p>
          <ul className="mt-5 space-y-3 text-sm text-paper/80">
            <li>Original works on paper</li>
            <li>Limited editions</li>
            <li>Worldwide shipping</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/15">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4 px-6 py-6 text-[0.7rem] uppercase tracking-[0.25em] text-paper/50 md:px-12">
          <span>© {new Date().getFullYear()} GAK Creations</span>
          <span>Made with care — in the studio</span>
        </div>
      </div>
    </footer>
  );
}
