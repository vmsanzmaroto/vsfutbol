export default function WhatsAppFloating() {
  const wa =
    "https://wa.me/34666163082?text=Hola!%20Estoy%20interesado%20en%20una%20camiseta.%20%C2%BFMe%20ayudas%20con%20tallas%20y%20modelos%3F";

  return (
    <a
      href={wa}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 px-5 py-3 text-sm font-extrabold text-white shadow-lg hover:opacity-95"
      aria-label="Contactar por WhatsApp"
      title="WhatsApp"
    >
      <span className="text-base">💬</span>
      WhatsApp
    </a>
  );
}
