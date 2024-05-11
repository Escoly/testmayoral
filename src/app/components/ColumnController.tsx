"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function ColumnController() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const columnWidthQuery = searchParams.get("columnWidth");
  const [columnWidth, setColumnWidth] = useState(columnWidthQuery || "extra");

  const handleToggleColumnSize = (mode: string) => {
    const params = new URLSearchParams(searchParams);
    if (mode) {
      params.set("columnWidth", mode);
      setColumnWidth(mode);
    } else {
      params.delete("columnWidth");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div role="columnController" className="flex gap-1">
      <button
        role="normalModeButton"
        disabled={columnWidth === "normal"}
        onClick={() => handleToggleColumnSize("normal")}
        className={
          columnWidth !== "normal"
            ? "text-gray-600 hover:cursor-pointer hover:scale-125"
            : "text-gray-400"
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-12 h-12 "
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
        </svg>
      </button>

      <button
        role="extraModeButton"
        disabled={columnWidth === "extra"}
        onClick={() => handleToggleColumnSize("extra")}
        className={
          columnWidth !== "extra"
            ? "text-gray-600 hover:cursor-pointer hover:scale-125"
            : "text-gray-400"
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-12 h-12 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </div>
  );
}
