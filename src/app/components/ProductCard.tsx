"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }: { product: IProduct }) {
  const handleFormattPrice = (price: string) => {
    return price.replace(/\./g, ",");
  };

  const handleGetDiscountPrice = () => {
    const discountedPrice = (
      product.price -
      product.price * (product.discount / 100)
    ).toFixed(2);

    return handleFormattPrice(discountedPrice);
  };

  const handleAddToCart = (e: any) => {
    e.preventDefault()
    console.log('product added to cart');
  };

  return (
    <article role="productCard">
      <Link
        className="flex flex-col items-center border-blue-200 border-2 rounded-md p-2 text-xs shadow-md	 sm:p-6 md:text-md lg:text-lg"
        key={product.title}
        href={"/not-found"}
      >
        <Image
          src={product.imgUrl}
          alt={"product image"}
          width={350}
          height={350}
          className="h-64 object-cover"
          priority
        />
        <div className="grid grid-rows-5 place-items-center mt-5 gap-2">
          <h1 className="line-clamp-1 text-gray-700">{product.title}</h1>

          <p
            className={
              product.discount ? "line-through	text-gray-400" : "text-gray-700"
            }
          >
            {product.discount
              ? `${handleFormattPrice(product.price.toString())}€`
              : ""}
          </p>
          <p className={product.discount ? "text-red-400" : "text-gray-700"}>
            {product.discount
              ? `${handleGetDiscountPrice()}€(-${product.discount}%)`
              : `${handleFormattPrice(product.price.toString())}€`}
          </p>
          <span className="text-gray-500">
            {product.hasMoreColors && <p>más colores</p>}
          </span>
          <button
            name="button"
            className="bg-blue-500 py-1 px-2 rounded-md white text-white align-bottom hover:bg-blue-600 hover:scale-105"
            onClick={(e) => handleAddToCart(e)}
          >
            Añadir
          </button>
        </div>
      </Link>
    </article>
  );
}
