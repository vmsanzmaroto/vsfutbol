import { Suspense } from "react";
import TiendaClient from "./TiendaClient";

export default function TiendaPage() {
  return (
    <Suspense fallback={<div className="p-8">Cargando tienda...</div>}>
      <TiendaClient />
    </Suspense>
  );
}