"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function OrderSelector() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const currentOrder = searchParams.get("listOrder");
  const { replace } = useRouter();

  const handleChangeOrder = (value:string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("listOrder", value);
    } else {
      params.delete("listOrder");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div role="orderSelector">
      <label>Ordenar precio de: </label>
      <select
        className=" bg-transparent border-2 border-transparent border-b-gray-300 hover:border-b-gray-400 hover:cursor-pointer"
        name="listOrder"
        defaultValue={currentOrder ? currentOrder : "rel"}
        onChange={(e)=>handleChangeOrder(e.target.value)}
      >
        <option value="rel">{"Relevante"}</option>
        <option value="desc">{"Menor a mayor"}</option>
        <option value="asc">{"Mayor a menor"}</option>
      </select>
    </div>
  );
}
