import Link from "next/link";

export default function HomePage() {
  return (
    <main className="space-y-10">
      {/* HERO con campo de futbol */}
      <section className="relative overflow-hidden rounded-3xl">
        {/* Imagen campo */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/backgrounds/campo.jpg')" }}
        />

        {/* Oscurecido suave */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Contenido */}
        <div className="relative z-10 rounded-3xl bg-white/85 p-10 backdrop-blur-sm">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Camisetas de fútbol{" "}
            <span className="bg-gradient-to-r from-blue-600 to-fuchsia-600 bg-clip-text text-transparent">
              Calidad premium
            </span>
          </h1>

          <p className="mt-4 max-w-2xl text-slate-700">
            Envío rápido en España · Fotos reales · Guía de tallas · Atención directa
            por WhatsApp. Pregúntanos por cualquier camiseta actual o retro y te
            indicamos disponibilidad.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/tienda"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-fuchsia-600 px-8 py-4 text-base font-extrabold text-white shadow-sm hover:opacity-95"
            >
              Ver camisetas
            </Link>

            <a
              href="https://wa.me/34666163082?text=Hola!%20Quiero%20ver%20las%20camisetas"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white/90 px-8 py-4 text-base font-extrabold hover:bg-white"
            >
              WhatsApp
            </a>
			{/* BLOQUE PRECIOS DESTACADOS */}
<div className="mt-6 rounded-2xl border border-slate-200/60 bg-white/80 p-5 backdrop-blur">
  <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
    Precios
  </h3>

  <div className="grid gap-4 sm:grid-cols-2">
    <div className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 p-4 text-white shadow">
      <p className="text-sm opacity-90">Camiseta temporada actual</p>
      <p className="text-2xl font-bold">22 €</p>
    </div>

    <div className="rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 p-4 text-white shadow">
      <p className="text-sm opacity-90">Camiseta retro</p>
      <p className="text-2xl font-bold">28 €</p>
    </div>
  </div>
</div>

          </div>

          <div className="mt-4 text-sm font-bold text-slate-700">
            🚚 Envío gratuito a partir de <span className="font-extrabold">75 €</span>. En pedidos inferiores, el coste de envío es de{" "}
            <span className="font-extrabold">4 €</span>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-3xl border border-slate-200/60 bg-white/70 p-6 backdrop-blur">
          <div className="text-sm font-extrabold text-blue-700">Envío</div>
          <p className="mt-2 text-sm text-slate-700">
            Entrega rápida en España (según zona). Si no está disponible en web,
            puede tardar más.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200/60 bg-white/70 p-6 backdrop-blur">
          <div className="text-sm font-extrabold text-fuchsia-700">Pago seguro</div>
          <p className="mt-2 text-sm text-slate-700">
            Métodos de pago fiables: Paypal, bizum o transferencia bancaria.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200/60 bg-white/70 p-6 backdrop-blur">
          <div className="text-sm font-extrabold text-slate-900">Atención directa</div>
          <p className="mt-2 text-sm text-slate-700">
            Te atendemos por WhatsApp para tallas, modelos y disponibilidad.
          </p>
        </div>
      </section>

      {/* CTA inferior */}
 
    </main>
  );
}
