"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { products } from "../../data/products";
import { slugify } from "@/lib/slug";

function shuffleArray<T>(array: T[]) {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

export default function TiendaPage() {
  const [orderedProducts, setOrderedProducts] = useState(products);
  const [nameQuery, setNameQuery] = useState("");
  const [sizeFilter, setSizeFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  useEffect(() => {
    const topProducts = products.filter((p) =>
      (p.badges || []).some((b) => b.label === "Top")
    );

    const normalProducts = products.filter(
      (p) => !(p.badges || []).some((b) => b.label === "Top")
    );

    setOrderedProducts([...topProducts, ...shuffleArray(normalProducts)]);
  }, []);

  const allSizes = useMemo(() => {
    const set = new Set<string>();
    for (const p of orderedProducts) {
      for (const s of p.sizes) set.add(s);
    }
    return Array.from(set).sort();
  }, [orderedProducts]);

  const allTypes = useMemo(() => {
    const set = new Set<string>();
    for (const p of orderedProducts) {
      for (const b of p.badges || []) set.add(b.label);
    }
    return Array.from(set).sort();
  }, [orderedProducts]);

  const filtered = useMemo(() => {
    const q = nameQuery.trim().toLowerCase();

    return orderedProducts.filter((p) => {
      const haystack = `${p.team} ${p.title} ${p.slug ?? ""}`.toLowerCase();
      const matchName = q === "" || haystack.includes(q);

      const matchSize =
        sizeFilter === "" ||
        (p.sizes.includes(sizeFilter) && p.inStockSizes.includes(sizeFilter));

      const matchType =
        typeFilter === "" || (p.badges || []).some((b) => b.label === typeFilter);

      return matchName && matchSize && matchType;
    });
  }, [nameQuery, sizeFilter, typeFilter, orderedProducts]);

  return (
    <main className="space-y-10">
      <section className="rounded-3xl border border-slate-200/60 bg-white/60 p-8 backdrop-blur">
        <h1 className="text-3xl font-extrabold tracking-tight">Tienda</h1>
        <p className="mt-2 text-slate-700">
          Elige tu camiseta y entra para ver detalles. Atención rápida por WhatsApp.
        </p>

        <div className="mt-6 grid gap-3 md:grid-cols-4">
          <div className="rounded-2xl border border-slate-200/60 bg-white/70 p-4">
            <div className="text-xs font-extrabold text-slate-700">Búsqueda por nombre</div>
            <input
              value={nameQuery}
              onChange={(e) => setNameQuery(e.target.value)}
              placeholder="Ej: madrid, betis, españa, 24/25..."
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold outline-none focus:ring-2 focus:ring-fuchsia-300"
            />
            <div className="mt-2 text-[11px] text-slate-500">
              Busca por equipo, temporada/título o nombre interno.
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200/60 bg-white/70 p-4">
            <div className="text-xs font-extrabold text-slate-700">Talla</div>
            <select
              value={sizeFilter}
              onChange={(e) => setSizeFilter(e.target.value)}
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold outline-none focus:ring-2 focus:ring-fuchsia-300"
            >
              <option value="">Todas</option>
              {allSizes.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <div className="mt-2 text-[11px] text-slate-500">
              Solo muestra productos con esa talla disponible.
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200/60 bg-white/70 p-4">
            <div className="text-xs font-extrabold text-slate-700">Tipo</div>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold outline-none focus:ring-2 focus:ring-fuchsia-300"
            >
              <option value="">Todos</option>
              {allTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            <div className="mt-2 text-[11px] text-slate-500">
              Se rellena con los labels de tus productos.
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200/60 bg-white/70 p-4">
            <div className="text-xs font-extrabold text-slate-700">Resultados</div>
            <div className="mt-2 text-2xl font-extrabold">{filtered.length}</div>
            <button
              type="button"
              onClick={() => {
                setNameQuery("");
                setSizeFilter("");
                setTypeFilter("");
              }}
              className="mt-3 inline-flex w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-extrabold hover:bg-slate-50"
            >
              Limpiar filtros
            </button>
          </div>
        </div>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => {
          const cleanSlug = slugify(p.slug ?? `${p.team} ${p.title}`);

          return (
            <Link
              key={cleanSlug}
              href={`/producto/${cleanSlug}`}
              className="group overflow-hidden rounded-3xl border border-slate-200/60 bg-white/60 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="relative h-56">
                <Image
                  src={p.images[0]}
                  alt={`Camiseta ${p.team} ${p.title}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0" />

                <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                  {p.badges?.slice(0, 2).map((b) => (
                    <span
                      key={b.label}
                      className={`inline-flex items-center rounded-full bg-gradient-to-r ${b.style} px-3 py-1 text-xs font-extrabold text-white shadow-sm`}
                    >
                      {b.label}
                    </span>
                  ))}
                </div>

                <div className="absolute bottom-4 left-5 right-5">
                  <div className="text-sm font-extrabold text-white">{p.team}</div>
                  <div className="text-xs text-white/90">{p.title}</div>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-sm font-extrabold text-slate-900">Camiseta {p.team}</div>
                    <div className="mt-1 text-sm text-slate-700">{p.title} — Alta calidad</div>
                  </div>
                  <div className="text-sm font-extrabold text-slate-900">{p.price}</div>
                </div>

                <div className="mt-3 text-xs text-slate-600">
                  Tallas en stock:{" "}
                  <span className="font-bold text-slate-700">
                    {p.inStockSizes.join(", ")}
                  </span>
                </div>

                <div className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-slate-900">
                  Ver producto <span className="transition group-hover:translate-x-0.5">→</span>
                </div>
              </div>
            </Link>
          );
        })}
      </section>

      <div className="text-center">
        <Link href="/" className="text-sm font-bold text-slate-800 hover:underline">
          ← Volver al inicio
        </Link>
      </div>
    </main>
  );
}