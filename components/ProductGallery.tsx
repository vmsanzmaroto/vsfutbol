"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Badge = {
  label: string;
  style: string;
};

export default function ProductGallery({
  images,
  alt,
  badges = [],
}: {
  images: string[];
  alt: string;
  badges?: Badge[];
}) {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);

  const main = images[active] ?? images[0];

  const prev = () => setActive((i) => (i - 1 + images.length) % images.length);
  const next = () => setActive((i) => (i + 1) % images.length);

  // Teclas: ESC cierra, flechas cambian
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, images.length]);

  // Bloquear scroll cuando el modal está abierto
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <>
      <div className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white/60 p-6 backdrop-blur">
        {/* IMAGEN GRANDE */}
        <div className="relative h-[420px] overflow-hidden rounded-2xl border border-slate-200/60 bg-gradient-to-b from-white via-slate-50 to-slate-100">
          <Image
            src={main}
            alt={alt}
            fill
            className="object-contain object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />

          {/* sombra suave inferior */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-black/0 to-black/0" />

          {/* Badges */}
          <div className="absolute left-5 top-5 flex flex-wrap gap-2">
            {badges.map((b) => (
              <span
                key={b.label}
                className={`inline-flex items-center rounded-full bg-gradient-to-r ${b.style} px-3 py-1 text-xs font-extrabold text-white shadow-sm`}
              >
                {b.label}
              </span>
            ))}
          </div>

          {/* Botones sobre imagen */}
          <div className="absolute right-4 top-4 flex items-center gap-2">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="rounded-xl border border-slate-200 bg-white/90 px-3 py-2 text-xs font-extrabold text-slate-900 shadow-sm hover:bg-white"
              title="Ver en pantalla completa"
            >
              ⤢ Pantalla completa
            </button>
          </div>

          {/* Flechas (si hay más de 1 imagen) */}
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-slate-200 bg-white/90 px-3 py-2 text-sm font-extrabold text-slate-900 shadow-sm hover:bg-white"
                aria-label="Imagen anterior"
                title="Anterior"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-slate-200 bg-white/90 px-3 py-2 text-sm font-extrabold text-slate-900 shadow-sm hover:bg-white"
                aria-label="Imagen siguiente"
                title="Siguiente"
              >
                ›
              </button>
            </>
          )}

          {/* Contador */}
          {images.length > 1 && (
            <div className="absolute bottom-3 right-3 rounded-full border border-slate-200 bg-white/90 px-3 py-1 text-xs font-extrabold text-slate-900">
              {active + 1}/{images.length}
            </div>
          )}
        </div>

        {/* MINIATURAS */}
        <div className="mt-4 grid grid-cols-3 gap-3">
          {images.slice(0, 6).map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              className={[
                "relative h-24 overflow-hidden rounded-2xl border bg-white transition",
                i === active
                  ? "border-fuchsia-500 ring-2 ring-fuchsia-300"
                  : "border-slate-200/60 hover:border-slate-300",
              ].join(" ")}
              aria-label={`Ver imagen ${i + 1}`}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-100" />
              <Image
                src={src}
                alt={`${alt} miniatura ${i + 1}`}
                fill
                className="object-contain object-center"
                sizes="(max-width: 1024px) 33vw, 10vw"
              />
            </button>
          ))}
        </div>

        <div className="mt-3 text-center text-xs text-slate-600">
          Pulsa una miniatura para verla en grande · Usa ⤢ para pantalla completa
        </div>
      </div>

      {/* MODAL (pantalla completa) */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-black/40 shadow-2xl backdrop-blur"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
              <div className="text-sm font-extrabold text-white">{alt}</div>
              <div className="flex items-center gap-2">
                {images.length > 1 && (
                  <div className="text-xs font-bold text-white/80">
                    {active + 1}/{images.length} · ← →
                  </div>
                )}
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-xs font-extrabold text-white hover:bg-white/15"
                >
                  Cerrar ✕
                </button>
              </div>
            </div>

            <div className="relative h-[70vh] bg-black">
              <Image
                src={main}
                alt={alt}
                fill
                className="object-contain object-center"
                sizes="100vw"
                priority
              />
            </div>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-white/10 px-4 py-3 text-xl font-extrabold text-white hover:bg-white/15"
                  aria-label="Imagen anterior"
                  title="Anterior (←)"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-white/10 px-4 py-3 text-xl font-extrabold text-white hover:bg-white/15"
                  aria-label="Imagen siguiente"
                  title="Siguiente (→)"
                >
                  ›
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
