import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-paper text-paper">
      {/* Header */}
      <header className="border-b border-paper/15">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-12">
          <img
            src="/images/Logo GAK Creations copy.png"
            alt="GAK Creations Logo"
            className="h-10 w-auto"
          />
          <nav className="flex gap-6 text-xs uppercase tracking-[0.25em] text-paper/70">
            <Link to="/" className="hover:text-paper">
              Home
            </Link>
            <Link to="/privacy-policy" className="hover:text-paper">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-paper">
              Terms
            </Link>
            <Link to="/shipping-policy" className="hover:text-paper">
              Shipping
            </Link>
            <Link to="/refund-policy" className="hover:text-paper">
              Refunds
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative mx-auto max-w-[1400px] px-6 py-20 md:px-12">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-light tracking-tight md:text-6xl">
              Architectural Art & Travel Collages
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-paper/70">
              A curated collection of architectural sketches, travel-inspired
              collages, and fine art prints — created with care in the studio.
            </p>
          </div>
          <div>
            <img
              src="/images/Abbaye Aux Dames Saintes France.jpg"
              alt="Hero Artwork"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-12">
        <h2 className="mb-12 text-center text-2xl uppercase tracking-[0.25em] text-paper/70">
          Featured Prints
        </h2>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Print 1 */}
          <div>
            <img
              src="/images/Guggenheim Museum Bilba, Spain.jpg"
              alt="Guggenheim Museum Bilbao"
              className="w-full rounded-lg shadow-md"
            />
            <p className="mt-4 text-sm uppercase tracking-[0.25em] text-paper/70">
              Guggenheim Museum — Bilbao, Spain
            </p>
          </div>

          {/* Print 2 */}
          <div>
            <img
              src="/images/Church of San Juan Bautista de Ban.jpg"
              alt="Church of San Juan Bautista de Banos"
              className="w-full rounded-lg shadow-md"
            />
            <p className="mt-4 text-sm uppercase tracking-[0.25em] text-paper/70">
              Church of San Juan Bautista — Banos, Spain
            </p>
          </div>

          {/* Print 3 */}
          <div>
            <img
              src="/images/Fuerteventura Chapel.jpg"
              alt="Fuerteventura Chapel"
              className="w-full rounded-lg shadow-md"
            />
            <p className="mt-4 text-sm uppercase tracking-[0.25em] text-paper/70">
              Fuerteventura Chapel — Canary Islands
            </p>
          </div>

          {/* Print 4 */}
          <div>
            <img
              src="/images/The Boat That Dreams Of Sea.jpg"
              alt="The Boat That Dreams Of Sea"
              className="w-full rounded-lg shadow-md"
            />
            <p className="mt-4 text-sm uppercase tracking-[0.25em] text-paper/70">
              The Boat That Dreams Of Sea
            </p>
          </div>
        </div>
      </section>

      {/* Studio Section */}
      <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-12">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <img
              src="/images/Fuerteventura Chapel.jpg"
              alt="Studio"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-light tracking-tight">
              Created in the Studio
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-paper/70">
              Each artwork is crafted with care, blending architectural detail,
              travel memories, and fine art techniques.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-paper/15">
        <div className="mx-auto max-w-[1400px] px-6 py-12 text-center md:px-12">
          <p className="text-xs uppercase tracking-[0.25em] text-paper/50">
            Made to order. Fulfilled worldwide through Printify.
          </p>
        </div>

        <div className="border-t border-paper/15">
          <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4 px-6 py-6 text-[0.7rem] uppercase tracking-[0.25em] text-paper/50 md:px-12">
            <span>© {new Date().getFullYear()} GAK Creations</span>
            <span>Made with care — in the studio</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
