import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/50 bg-white/60 backdrop-blur">
      {/* Banner envío */}
      <div className="border-b border-slate-200/50 bg-white/70">
        <div className="mx-auto max-w-7xl px-6 py-2 text-center text-xs font-bold text-slate-700">
          🚚 Envío gratis desde <span className="text-slate-900">75 €</span> · En pedidos inferiores, envío{" "}
          <span className="text-slate-900">4 €</span>
        </div>
      </div>

      {/* Navbar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="group inline-flex items-center gap-0.5">
          <span className="text-lg font-black tracking-tight text-blue-600">VS</span>
          <span className="text-lg font-black tracking-tight text-fuchsia-600">Futbol</span>
        </Link>

        <nav className="flex items-center gap-2 text-sm">
          <Link
            href="/tienda"
            className="rounded-full px-3 py-2 font-semibold text-slate-700 hover:bg-slate-100 hover:text-slate-900"
          >
            Tienda
          </Link>
          <Link
            href="/faq"
            className="rounded-full px-3 py-2 font-semibold text-slate-700 hover:bg-slate-100 hover:text-slate-900"
          >
            FAQ
          </Link>
          <Link
            href="/contacto"
            className="rounded-full px-3 py-2 font-semibold text-slate-700 hover:bg-slate-100 hover:text-slate-900"
          >
            Contacto
          </Link>

          <Link
            href="/tienda"
            className="ml-1 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-fuchsia-600 px-4 py-2 font-extrabold text-white shadow-sm hover:opacity-95"
          >
            Ver camisetas
          </Link>
        </nav>
      </div>
    </header>
  );
}
