export default function ContactoPage() {
  const wa =
    "https://wa.me/34666163082?text=Hola!%20Quiero%20info%20sobre%20tallas%20y%20modelos.";

  return (
    <main className="space-y-4">
      <h1 className="text-2xl font-extrabold">Contacto</h1>

      <p className="text-slate-700">
        Para dudas sobre tallas, modelos o disponibilidad, escríbenos directamente
        por WhatsApp.
      </p>

      <a
        href={wa}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-fuchsia-600 px-6 py-3 text-sm font-extrabold text-white shadow-sm hover:opacity-95"
      >
        Hablar por WhatsApp
      </a>

      <div className="rounded-2xl border border-slate-200/60 bg-white/70 p-4 backdrop-blur">
        <div className="text-sm font-bold">Horario de atención</div>
        <div className="mt-1 text-sm text-slate-700">
          Lunes a sábado · 10:00 – 20:00
        </div>
      </div>
    </main>
  );
}
