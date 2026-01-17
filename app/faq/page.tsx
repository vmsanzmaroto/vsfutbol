const faqs = [
  { q: "¿Cuánto tarda el envío?", a: "Entre 2-3 días habiles en España (según zona). En caso de no estar disponible en la web en 20-30 días." },
  { q: "¿Cómo elijo la talla?", a: "Si dudas entre dos tallas, elige la más grande o pregúntanos por WhatsApp." },
  { q: "¿Se pueden hacer cambios?", a: "Sí, según nuestra política de cambios y devoluciones." },
];

export default function FaqPage() {
  return (
    <main className="space-y-4">
      <h1 className="text-2xl font-extrabold">FAQ</h1>
      <div className="space-y-3">
        {faqs.map((f) => (
          <div key={f.q} className="rounded-2xl border border-slate-200/60 bg-white/70 p-4 backdrop-blur">
            <div className="font-bold">{f.q}</div>
            <div className="mt-1 text-sm text-slate-700">{f.a}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
