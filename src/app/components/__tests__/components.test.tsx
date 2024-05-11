/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import ColumnController from "../ColumnController";
import OrderSelector from "../OrderSelector";
import ProductCard from "../ProductCard";
import ProductsGrid from "../ProductsGrid";
import SearchBar from "../SearchBar";

// Mock useRouter:
/** New next/navigation mock */
jest.mock("next/navigation", () => {
  return {
    __esModule: true,
    usePathname: () => ({
      pathname: "",
    }),
    useRouter: () => ({
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
    }),
    useSearchParams: () => ({
      get: () => {columnWidth:'extra'},
    }),
  };
});
const mockProduct = {
    discount: 20,
    hasMoreColors: false,
    imgUrl:
      "https://assets.mayoral.com/images/t_auto_img,f_auto,c_limit,w_750/v1698612694/24-03011-077-XL-1/camiseta-animales-better-cotton-nino-milk-XL-1.jpg",
    price: 15.99,
    title: "Camiseta animales Better Cotton niño",
  };

describe("Checks each component works for itself", () => {
  it("renders ColumnController.tsx correctly", () => {
    render(<ColumnController />);
    expect(screen.getByRole("columnController")).toBeInTheDocument();
  });
  it("renders page.tsx correctly", () => {
    render(<OrderSelector />);
    expect(screen.getByRole("orderSelector")).toBeInTheDocument();
  });
  it("renders page.tsx correctly", () => {
    render(<ProductCard product={mockProduct}/>);
    expect(screen.getByRole("productCard")).toBeInTheDocument();
  });
  it("renders page.tsx correctly", () => {
    render(<ProductsGrid />);
    expect(screen.getByRole("productsGrid")).toBeInTheDocument();
  });
  it("renders page.tsx correctly", () => {
    render(<SearchBar />);
    expect(screen.getByRole("searchBar")).toBeInTheDocument();
  });
  
});
