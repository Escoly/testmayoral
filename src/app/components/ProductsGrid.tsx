"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import GetProductsByQuery from "../../api/GetProductsByQuery";
import ProductCard from "./ProductCard";

export default function ProductsGrid() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const columnWidth = searchParams.get("columnWidth");
  const listOrder = searchParams.get("listOrder");

  const [productsList, setProductsList] = useState<IProduct[]>([]);
  const [noProductsFound, setNoProductsFound] = useState(false);

  useEffect(() => {
    const resProductsList = [...GetProductsByQuery(query || "")];
    if (!resProductsList.length) {
      setNoProductsFound(true);
    } else {
      setNoProductsFound(false);
    }
    if (listOrder === "asc") {
      setProductsList([...resProductsList.sort((a, b) => b.price - a.price)]);
    } else if (listOrder === "desc") {
      setProductsList([...resProductsList.sort((a, b) => a.price - b.price)]);
    } else {
      setProductsList([...resProductsList]);
    }
  }, [query, listOrder]);

  return (
    <section
      role="productsGrid"
      className={
        columnWidth === "normal"
          ? "grid grid-cols-1 md:grid-cols-3 gap-10 "
          : "grid grid-cols-2 md:grid-cols-4 gap-10 "
      }
    >
      {productsList.length > 0 ? (
        productsList.map((product: IProduct, index: number) => {
          return <ProductCard product={product} key={index} />;
        })
      ) : (
        <>
          {noProductsFound ? (
            <p>{'No se han encontrado resultados'}</p>
          ) : (
            <p>{'Cargando'}</p>
          )}
        </>
      )}
    </section>
  );
}
