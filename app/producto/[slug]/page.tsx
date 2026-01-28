import Link from "next/link";
import { products, getProductBySlug } from "../../../data/products";
import ProductGallery from "../../../components/ProductGallery";
import { slugify } from "../../../lib/slug";

// 🔒 MODO ESTÁTICO SEGURO
export const dynamicParams = false;

// ✅ Genera todas las páginas /producto/[slug] en build (Vercel)
export function generateStaticParams() {
  return products.map((p) => ({
    slug: slugify(p.slug),
  }));
}

export default function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = decodeURIComponent(params.slug);
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <main className="space-y-4">
        <Link href="/tienda" className="text-sm font-bold text-slate-800 hover:underline">
          ← Volver a tienda
        </Link>

        <section className="rounded-3xl border border-slate-200/60 bg-white/60 p-8 backdrop-blur">
          <h1 className="text-2xl font-extrabold">Producto no encontrado</h1>
          <p className="mt-2 text-slate-700">Este producto no existe o no está disponible.</p>
          <p className="mt-2 text-xs text-slate-600">
            Slug recibido: <span className="font-bold">{slug}</span>
          </p>
        </section>
      </main>
    );
  }

  const whatsappUrl = `https://wa.me/34666163082?text=${encodeURIComponent(
    `Hola! Estoy interesado en: Camiseta ${product.team} ${product.title}. ¿Tallas disponibles?`
  )}`;

  return (
    <main className="space-y-6">
      <Link href="/tienda" className="text-sm font-bold text-slate-800 hover:underline">
        ← Volver a tienda
      </Link>

      <section className="grid gap-6 lg:grid-cols-2">
        {/* FOTO */}
        <ProductGallery
          images={product.images}
          alt={`Camiseta ${product.team} ${product.title}`}
          badges={product.badges}
        />

        {/* INFO */}
        <div className="rounded-3xl border border-slate-200/60 bg-white/60 p-6 backdrop-blur">
          <h1 className="text-2xl font-extrabold tracking-tight md:text-3xl">
            Camiseta {product.team} {product.title} — Alta calidad
          </h1>

          <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
            <div className="text-2xl font-extrabold">{product.price}</div>
            <span className="rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-bold text-slate-700">
              Calidad premium
            </span>
          </div>

          <p className="mt-4 text-sm text-slate-700">{product.description}</p>

          <div className="mt-6 rounded-2xl border border-slate-200/60 bg-white/70 p-4">
            <div className="text-sm font-extrabold">Tallas</div>

            <div className="mt-3 flex flex-wrap gap-2">
              {product.sizes.map((size) => {
                const inStock = product.inStockSizes.includes(size);

                return (
                  <span
                    key={size}
                    className={[
                      "rounded-xl border px-3 py-2 text-sm font-bold",
                      inStock
                        ? "border-slate-200 bg-white text-slate-900"
                        : "border-slate-200 bg-white/60 text-slate-500 line-through opacity-60",
                    ].join(" ")}
                  >
                    {size}
                  </span>
                );
              })}
            </div>

            <div className="mt-3 text-xs text-slate-600">
              Consejo: si dudas entre dos tallas, elige la más grande.
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-1 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-fuchsia-600 px-6 py-3 text-sm font-extrabold text-white shadow-sm hover:opacity-95"
            >
              Comprar por WhatsApp
            </a>

            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white/80 px-6 py-3 text-sm font-extrabold hover:bg-white"
            >
              Contacto
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
