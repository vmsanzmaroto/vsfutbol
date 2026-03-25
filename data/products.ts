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
    slug: "Madrid",
	team: "Real Madrid",
    title: "Real Madrid 26/27",
    price: "20€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Laliga", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/realmadrid1.jpg", "/products/realmadrid2.jpg", "/products/madrid13.jpg", "/products/madrid14.jpg", "/products/madrid15.jpg", "/products/madrid16.jpg", "/products/madrid17.jpg"],
  },
  {
    slug: "Madrid1",
	team: "Real Madrid",
    title: "Real Madrid 99/00",
    price: "26€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Retro", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/realmadridretro.jpg", "/products/realmadridretro2.jpg", "/products/madrid13.jpg", "/products/madrid14.jpg", "/products/madrid15.jpg", "/products/madrid16.jpg", "/products/madrid17.jpg"],
  },
    {
    slug: "Madrid2",
	team: "Real Madrid",
    title: "Real Madrid 94/96",
    price: "26€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Retro", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/rm3.jpg", "/products/realmadrid4.jpg", "/products/madrid13.jpg", "/products/madrid14.jpg", "/products/madrid15.jpg", "/products/madrid16.jpg", "/products/madrid17.jpg"],
  },
     {
    slug: "Madrid3",
	team: "Real Madrid",
    title: "Real Madrid 97/98",
    price: "26€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Retro", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/madrid1.jpg", "/products/madrid2.jpg", "/products/madrid13.jpg", "/products/madrid14.jpg", "/products/madrid15.jpg", "/products/madrid16.jpg", "/products/madrid17.jpg"],
  },
       {
    slug: "Madrid4",
	team: "Real Madrid",
    title: "Real Madrid 86/88",
    price: "26€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Retro", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/madrid3.jpg", "/products/madrid4.jpg", "/products/madrid13.jpg", "/products/madrid14.jpg", "/products/madrid15.jpg", "/products/madrid16.jpg", "/products/madrid17.jpg"],
  },
         {
    slug: "Madrid5",
	team: "Real Madrid",
    title: "Real Madrid 86/88",
    price: "26€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Retro", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/madrid5.jpg", "/products/madrid6.jpg", "/products/madrid13.jpg", "/products/madrid14.jpg", "/products/madrid15.jpg", "/products/madrid16.jpg", "/products/madrid17.jpg"],
  },
          {
    slug: "atleti",
	team: "Atletico de Madrid",
    title: "Atletico de Madrid 96/97",
    price: "26€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Retro", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/atleti1.jpg", "/products/atleti2.jpg", "/products/atleti13.jpg"],
  },
            {
    slug: "atleti1",
	team: "Atletico de Madrid",
    title: "Atletico de Madrid 97/98",
    price: "26€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Retro", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/atleti3.jpg", "/products/atleti4.jpg", "/products/atleti13.jpg"],
  },
              {
    slug: "atleti2",
	team: "Atletico de Madrid",
    title: "Atletico de Madrid 99/00",
    price: "26€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Retro", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/atleti5.jpg", "/products/atleti6.jpg", "/products/atleti13.jpg"],
  },
  {
    slug: "atleti3",
	team: "Atletico de Madrid",
    title: "Atletico de Madrid 25/26",
    price: "20€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Laliga", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/atleti7.jpg", "/products/atleti8.jpg", "/products/atleti13.jpg"],
  },
  {
    slug: "atleti4",
	team: "Atletico de Madrid",
    title: "Atletico de Madrid 94/95",
    price: "26€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Retro", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/atleti9.jpg", "/products/atleti10.jpg", "/products/atleti13.jpg"],
  }, 
  {
    slug: "atleti5",
	team: "Atletico de Madrid",
    title: "Atletico de Madrid 13/14",
    price: "26€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Retro", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/atleti11.jpg", "/products/atleti11.jpg", "/products/atleti13.jpg"],
  }, 
  {
    slug: "barsa",
	team: "Barcelona",
    title: "Barcelona 25/26",
    price: "20€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Laliga", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/barsa.jpg", "/products/barsa1.jpg", "/products/barsa14.jpg", "/products/barsa15.jpg", "/products/barsa16.jpg"],
  },  
    {
    slug: "barsa1",
	team: "Barcelona",
    title: "Barcelona 95/97",
    price: "26€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Retro", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/barsa2.jpg", "/products/barsa3.jpg", "/products/barsa14.jpg", "/products/barsa15.jpg", "/products/barsa16.jpg"],
  },  
      {
    slug: "barsa2",
	team: "Barcelona",
    title: "Barcelona 98/99",
    price: "26€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Retro", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/barsa4.jpg", "/products/barsa5.jpg", "/products/barsa14.jpg", "/products/barsa15.jpg", "/products/barsa16.jpg"],
  },  
        {
    slug: "barsa3",
	team: "Barcelona",
    title: "Barcelona 15/16",
    price: "26€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Retro", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/barsa6.jpg", "/products/barsa7.jpg", "/products/barsa14.jpg", "/products/barsa15.jpg", "/products/barsa16.jpg"],
  }, 
          {
    slug: "barsa4",
	team: "Barcelona",
    title: "Barcelona 08/09",
    price: "26€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Retro", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/barsa8.jpg", "/products/barsa9.jpg", "/products/barsa14.jpg", "/products/barsa15.jpg", "/products/barsa16.jpg"],
  }, 
            {
    slug: "barsa5",
	team: "Barcelona",
    title: "Barcelona 13/14",
    price: "26€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Retro", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/barsa10.jpg", "/products/barsa11.jpg", "/products/barsa14.jpg", "/products/barsa15.jpg", "/products/barsa16.jpg"],
  }, 
              {
    slug: "bilbao",
	team: "bilbao",
    title: "Athletic Bilbao 25/26",
    price: "20€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Laliga", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/bilbao.jpg", "/products/bilbao1.jpg"],
  }, 
                {
    slug: "bilbao1",
	team: "bilbao",
    title: "Athletic Bilbao 100 aniversario",
    price: "26€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Retro", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/bilbao2.jpg", "/products/bilbao3.jpg"],
  }, 
                {
    slug: "bilbao2",
	team: "bilbao",
    title: "Athletic Bilbao 97/98",
    price: "26€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Retro", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/bilbao4.jpg", "/products/bilbao5.jpg"],
  },
                  {
    slug: "bilbao3",
	team: "bilbao",
    title: "Athletic Bilbao 11/12",
    price: "26€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Retro", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/bilbao6.jpg", "/products/bilbao7.jpg"],
  },
                    {
    slug: "bilbao4",
	team: "bilbao",
    title: "Athletic Bilbao 97/98",
    price: "26€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Retro", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/bilbao8.jpg", "/products/bilbao9.jpg"],
  },
                      {
    slug: "bilbao5",
	team: "bilbao",
    title: "Athletic Bilbao 94/95",
    price: "26€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Retro", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/bilbao10.jpg", "/products/bilbao11.jpg"],
  },
  {
      slug: "real",
	  team: "Real sociedad",
    title: "Real Sociedad 25/26",
    price: "20€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Laliga", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/rs.jpg", "/products/rs1.jpg"],
  }, 
   {
      slug: "real1",
	  team: "Real sociedad",
    title: "Real Sociedad 95/96",
    price: "26€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Retro", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/rs2.jpg", "/products/rs3.jpg"],
  }, 
   {
      slug: "real2",
	  team: "Real sociedad",
    title: "Real Sociedad 99/00",
    price: "26€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Retro", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/rs4.jpg", "/products/rs5.jpg"],
  }, 
     {
      slug: "real3",
	  team: "Real sociedad",
    title: "Real Sociedad 00/02",
    price: "26€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Retro", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/rs6.jpg", "/products/rs7.jpg"],
  }, 
      {
      slug: "real4",
	  team: "Real sociedad",
    title: "Real Sociedad 03/03",
    price: "26€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Retro", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/rs8.jpg", "/products/rs9.jpg"],
  }, 
      {
      slug: "real5",
	  team: "Real sociedad",
    title: "Real Sociedad 94/95",
    price: "26€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Retro", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/rs10.jpg", "/products/rs11.jpg"],
  }, 
        {
      slug: "betis" ,
	  team: "Betis",
    title: "Betis 25/26",
    price: "20€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Laliga", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/betis.jpg", "/products/betis1.jpg", "/products/betis12.jpg"],
  }, 
          {
      slug: "betis1" ,
	  team: "Betis",
    title: "Betis 95/97",
    price: "26€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Retro", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/betis2.jpg", "/products/betis3.jpg"],
  }, 
            {
      slug: "betis2",
	  team: "Betis",
    title: "Betis 99/00",
    price: "26€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Retro", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/betis4.jpg", "/products/betis5.jpg"],
  }, 
              {
      slug: "betis3",
	  team: "Betis",
    title: "Betis 96/97",
    price: "26€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Retro", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/betis6.jpg", "/products/betis7.jpg"],
  }, 
               {
      slug: "betis4",
	  team: "Betis",
    title: "Betis 95/96",
    price: "26€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Retro", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/betis8.jpg", "/products/betis9.jpg"],
  }, 
                 {
      slug: "betis5",
	  team: "Betis",
    title: "Betis 98/99",
    price: "26€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Retro", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/betis10.jpg", "/products/betis11.jpg"],
  },
		{
	   slug: "celta",
	   team: "Celta",
    title: "Celta 25/26",
    price: "20€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Laliga", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/celta.jpg", "/products/celta1.jpg", "/products/celta15.jpg"],
  }, 
                   {
      slug: "celta1",
	  team: "Celta",
    title: "Celta 05/07",
    price: "26€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Retro", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/celta2.jpg", "/products/celta3.jpg"],
  },
                     {
      slug: "celta2",
	  team: "Celta",
    title: "Celta 01/02",
    price: "26€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Retro", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/celta4.jpg", "/products/celta5.jpg"],
  },
                       {
      slug: "celta3",
	  team: "Celta",
    title: "Celta 02/04",
    price: "26€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Retro", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/celta6.jpg", "/products/celta7.jpg"],
  },
                        {
      slug: "celta4",
	  team: "Celta",
    title: "Celta 01/02",
    price: "26€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Retro", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/celta8.jpg", "/products/celta9.jpg"],
  },
                          {
      slug: "Girona",
	  team: "Girona",
    title: "Girona 25/26",
    price: "20€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Laliga", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/girona.jpg", "/products/girona1.jpg"],
  },
                            {
      slug: "Girona1",
	  team: "Girona",
    title: "Girona 25/26",
    price: "20€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Laliga", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/girona2.jpg", "/products/girona3.jpg"],
  },
                              {
      slug: "Villarreal",
	  team: "Villarreal",
    title: "Villarreal 25/26",
    price: "20€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Laliga", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/villarreal.jpg", "/products/villarreal1.jpg"],
  },
                                {
      slug: "Villarreal1",
	  team: "Villarreal",
    title: "Villarreal 25/26",
    price: "20€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Laliga", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/villarreal2.jpg", "/products/villarreal3.jpg"],
  },
                                  {
      slug: "Villarreal2",
	  team: "Villarreal",
    title: "Villarreal 08/09",
    price: "20€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Retro", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/villarreal4.jpg", "/products/villarreal5.jpg"],
  },
                                {
      slug: "Valencia",
	  team: "Valencia",
    title: "Valencia 25/26",
    price: "20€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Laliga", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/valencia.jpg", "/products/valencia1.jpg", "/products/valencia10.jpg"],
  },
            {
      slug: "Valencia1",
	  team: "Valencia",
    title: "Valencia 80/82",
    price: "26€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Retro", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/valencia2.jpg", "/products/valencia3.jpg", "/products/valencia10.jpg"],
  },
              {
      slug: "Valencia2",
	  team: "Valencia",
    title: "Valencia 04/05",
    price: "26€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Retro", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/valencia4.jpg", "/products/valencia5.jpg", "/products/valencia10.jpg"],
  },
              {
      slug: "Valencia3",
	  team: "Valencia",
    title: "Valencia 00/02",
    price: "26€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Retro", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/valencia6.jpg", "/products/valencia7.jpg", "/products/valencia10.jpg"],
  },
              {
      slug: "Valencia4",
	  team: "Valencia",
    title: "Valencia 96/97",
    price: "26€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Retro", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/valencia8.jpg", "/products/valencia9.jpg", "/products/valencia10.jpg"],
  },
                {
      slug: "Osasuna",
	  team: "Osasuna",
    title: "Osasuna 25/26",
    price: "20€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Laliga", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/osasuna.jpg", "/products/osasuna1.jpg", "/products/osasuna13.jpg"],
  },
                 {
      slug: "Osasuna1",
	  team: "Osasuna",
    title: "Osasuna 00/02",
    price: "26€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Retro", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/osasuna2.jpg", "/products/osasuna3.jpg", "/products/osasuna13.jpg"],
  },
  {
      slug: "Osasuna2",
	  team: "Osasuna",
    title: "Osasuna 2005",
    price: "26€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Retro", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/osasuna4.jpg", "/products/osasuna5.jpg", "/products/osasuna13.jpg"],
  },
    {
      slug: "Sevilla",
	  team: "Sevilla",
    title: "Sevilla 25/26",
    price: "20€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Laliga", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/sevilla11.jpg", "/products/sevilla1.jpg", "/products/sevilla12.jpg"],
  },
      {
      slug: "Sevilla1",
	  team: "Sevilla",
    title: "Sevilla 25/26",
    price: "26€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Retro", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/sevilla2.jpg", "/products/sevilla3.jpg", "/products/sevilla12.jpg"],
  },
        {
      slug: "Rayo",
	  team: "Rayo Vallecano",
    title: "Rayo Vallecano 25/26",
    price: "20€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Laliga", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/rayo.jpg", "/products/rayo1.jpg", "/products/rayo10.jpg"],
  },
          {
      slug: "Rayo1",
	  team: "Rayo Vallecano",
    title: "Rayo Vallecano 01/02",
    price: "26€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Retro", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/rayo2.jpg", "/products/rayo3.jpg", "/products/rayo10.jpg"],
  },
            {
      slug: "Rayo2",
	  team: "Rayo Vallecano",
    title: "Rayo Vallecano 94/95",
    price: "26€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Retro", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/rayo4.jpg", "/products/rayo5.jpg", "/products/rayo10.jpg"],
  },
              {
      slug: "Rayo3",
	  team: "Rayo Vallecano",
    title: "Rayo Vallecano 97/98",
    price: "26€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Retro", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/rayo6.jpg", "/products/rayo7.jpg", "/products/rayo10.jpg"],
  },
                {
      slug: "Rayo4",
	  team: "Rayo Vallecano",
    title: "Rayo Vallecano 97/98",
    price: "26€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Retro", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/rayo8.jpg", "/products/rayo9.jpg", "/products/rayo10.jpg"],
  },
                  {
      slug: "Las Palmas",
	  team: "Las Palmas -",
    title: "Las Palmas 25/26",
    price: "20€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Laliga", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/laspalmas.jpg", "/products/laspalmas1.jpg", "/products/laspalmas6.jpg"],
  },
                    {
      slug: "Las Palmas1",
	  team: "Las Palmas -",
    title: "Las Palmas 00/01",
    price: "26€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Retro", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/laspalmas2.jpg", "/products/laspalmas3.jpg", "/products/laspalmas6.jpg"],
  },
                      {
      slug: "Las Palmas2",
	  team: "Las Palmas -",
    title: "Las Palmas 95/96",
    price: "26€",
    description:
      "Camiseta de alta calidad con tejido transpirable y excelente acabado. Ideal para partido o uso diario.",
    sizes: ["S", "M", "L", "XL"],
    inStockSizes: ["S", "M", "L", "XL"],
    badges: [{ label: "Retro", style: "from-blue-600 to-fuchsia-600" }],
    images: ["/products/laspalmas4.jpg", "/products/laspalmas5.jpg", "/products/laspalmas6.jpg"],
  },
];

export function getProductBySlug(slug: string) {
  const clean = slugify(slug);

  return products.find((p) => {
    const candidate = slugify(p.slug ?? `${p.team} ${p.title}`);
    return candidate === clean;
  });
}
export function getRandomProducts() {
  const shuffled = [...products];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}