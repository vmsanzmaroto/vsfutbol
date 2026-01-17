import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppFloating from "../components/WhatsAppFloating";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="relative min-h-screen text-slate-900">
        {/* FONDO CAMPO DE FUTBOL */}
        <div
          className="fixed inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: "url('/backgrounds/campo.jpg')" }}
        />

        {/* Capa clara encima para que no moleste */}
        <div className="fixed inset-0 -z-10 bg-white/0 backdrop-blur-[1px]" />

        <Navbar />

        <main className="mx-auto max-w-7xl px-6 py-8">
          {children}
        </main>

        <Footer />
        <WhatsAppFloating />
      </body>
    </html>
  );
}
