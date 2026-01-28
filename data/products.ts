import { slugify } from "../lib/slug";

export type Product = {
  slug: string;
  team: string;
  title: string;
  price: string;
  description: string;

  // Todas las tallas que muestras
  sizes: string[];

  // Solo las tallas disponibles (las demás se verán tachadas)
  inStockSizes: string[];

  badges: Array<{ label: string; style: string }>;
  images: string[];
};

export const products: Product[] = [
  {
    slug: "Arsenal",
    team: "Arsenal",
    title: "Retro Bergkamp",
    price: "28€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["L"],
    badges: [{ label: "Retro", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/arsenal1.jpg", "/products/arsenal2.jpg", "/products/arsenal3.jpg"],
  },
  {
    slug: "Espana",
    team: "España",
    title: "2026 Local",
    price: "22€",
    description: "Camiseta de alta calidad, perfecta para animar a la selección.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["M"],
    badges: [{ label: "selección", style: "from-emerald-600 to-teal-600" }],
    images: ["/products/españa1.jpeg", "/products/españa2.jpeg"],
  },
  {
    slug: "Atleti",
    team: "Atletico de Madrid",
    title: "Retro Cholo Simeone",
    price: "28€",
    description: "Camiseta de alta calidad, perfecta para animar a la selección.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["L"],
    badges: [{ label: "Retro", style: "from-emerald-600 to-teal-600" }],
    images: ["/products/cholo1.jpeg", "/products/cholo2.jpeg"],
  },

  {
    slug: "valladolid",
    team: "valladolid",
    title: "Retro Peternac",
    price: "28€",
    description: "Camiseta de alta calidad con gran acabado.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["M"],
    badges: [{ label: "Retro", style: "from-fuchsia-600 to-rose-600" }],
    images: ["/products/valladolid1.jpeg", "/products/valladolid2.jpeg"],
  },
  {
    slug: "Madrid",
    team: "Real Madrid",
    title: "Retro Raul",
    price: "28€",
    description: "Camiseta de alta calidad con gran acabado.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["L"],
    badges: [{ label: "Retro", style: "from-fuchsia-600 to-rose-600" }],
    images: ["/products/raul1.jpeg", "/products/raul2.jpeg"],
  },
  {
    slug: "Sevilla",
    team: "Sevilla",
    title: "2ª equipación Sevilla 25/26",
    price: "22€",
    description: "Camiseta de alta calidad con gran acabado.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["M"],
    badges: [{ label: "Liga", style: "from-fuchsia-600 to-rose-600" }],
    images: ["/products/sevilla1.jpeg", "/products/sevilla2.jpeg", "/products/sevilla3.jpeg"],
  },
  {
    slug: "Celta",
    team: "Celta",
    title: "Celta centenario 23/24",
    price: "28€",
    description: "Camiseta de alta calidad con gran acabado.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["M"],
    badges: [{ label: "Retro", style: "from-fuchsia-600 to-rose-600" }],
    images: ["/products/celta1.jpeg", "/products/celta2.jpeg", "/products/celta3.jpeg", "/products/celta4.jpeg"],
  },
  {
    slug: "Celtic",
    team: "Celtic",
    title: "Celtic Glasgow 22/23",
    price: "22€",
    description: "Camiseta de alta calidad con gran acabado.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["M"],
    badges: [{ label: "Retro", style: "from-fuchsia-600 to-rose-600" }],
    images: ["/products/celtic1.jpeg", "/products/celtic2.jpeg", "/products/celtic3.jpeg"],
  },
  {
    slug: "Arsenal-2",
    team: "Arsenal 2",
    title: "Retro Arsenal Bergkamp",
    price: "28€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["M"],
    badges: [{ label: "Retro", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/berkamp1.jpeg", "/products/berkamp2.jpeg", "/products/berkamp3.jpeg", "/products/berkamp4.jpeg", "/products/berkamp5.jpeg"],
  },
  {
    slug: "Francia-98",
    team: "Francia 98",
    title: "Francia 98 Zidane",
    price: "28€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["M", "L"],
    badges: [{ label: "Retro", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/zidane1.jpeg", "/products/zidane2.jpeg", "/products/zidane3.jpeg", "/products/zidane4.jpeg", "/products/zidane5.jpeg", "/products/zidane6.jpeg"],
  },
  {
    slug: "Argentida",
    team: "Argentina",
    title: "Argentina Messi",
    price: "22€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["M", "L"],
    badges: [{ label: "selección", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/messi1.jpeg", "/products/messi2.jpeg", "/products/messi3.jpeg", "/products/messi4.jpeg"],
  },
  {
    slug: "O-LYON",
    team: "O LYON",
    title: "Retro Benzema",
    price: "28€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["M", "L"],
    badges: [{ label: "Retro", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/benzema1.jpeg", "/products/benzema2.jpeg", "/products/benzema3.jpeg", "/products/benzema4.jpeg", "/products/benzema5.jpeg"],
  },
  {
    slug: "Juventus",
    team: "Juventus",
    title: "Retro Juventus CR",
    price: "28€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["M", "L"],
    badges: [{ label: "Retro", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/cr1.jpeg", "/products/cr2.jpeg", "/products/cr3.jpeg", "/products/cr4.jpeg", "/products/cr5.jpeg"],
  },
  {
    slug: "Croacia",
    team: "Croacia",
    title: "Croacia Modric",
    price: "22€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["M", "L"],
    badges: [{ label: "selección", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/modric.jpeg", "/products/modric1.jpeg", "/products/modric2.jpeg", "/products/modric3.jpeg"],
  },
];

export function getProductBySlug(slug: string) {
  const clean = slugify(slug);

  return products.find((p) => {
    const candidate = slugify(p.slug ?? `${p.team} ${p.title}`);
    return candidate === clean;
  });
}
