import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-200/70 bg-white/60">
      <div className="mx-auto grid max-w-5xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <div className="inline-flex items-baseline gap-0.5">
            <span className="font-extrabold tracking-tight text-blue-600">VS</span>
            <span className="font-extrabold tracking-tight text-fuchsia-600">Futbol</span>
          </div>
          <p className="mt-2 text-sm text-slate-600">
            Camisetas de fútbol de alta calidad. Envío rápido en España y atención por WhatsApp.
          </p>
        </div>

        <div className="text-sm">
          <div className="font-semibold">Enlaces</div>
          <ul className="mt-2 space-y-2 text-slate-700">
            <li><Link href="/tienda" className="hover:underline">Tienda</Link></li>
            <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
            <li><Link href="/contacto" className="hover:underline">Contacto</Link></li>
          </ul>
        </div>

        <div className="text-sm">
          <div className="font-semibold">Legal</div>
          <ul className="mt-2 space-y-2 text-slate-700">
            <li><Link href="/legal/aviso-legal" className="hover:underline">Aviso legal</Link></li>
            <li><Link href="/legal/privacidad" className="hover:underline">Privacidad</Link></li>
            <li><Link href="/legal/cookies" className="hover:underline">Cookies</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200/70 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} VSFutbol
      </div>
    </footer>
  );
}

