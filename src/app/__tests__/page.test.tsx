/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Page from "../page";

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
      get: () => {},
    }),
  };
});

describe("Products page loads components correctly ", () => {
  it("renders page.tsx correctly", () => {
    render(<Page />);
    expect(screen.getByRole("homePage")).toBeInTheDocument();
  });
  it("renders ColumnController component inside page.tsx",()=>{
    render(<Page />);
    expect(screen.getByRole('columnController')).toBeInTheDocument();
  })
  it("renders SearchBar component inside page.tsx",()=>{
    render(<Page />);
    expect(screen.getByRole('searchBar')).toBeInTheDocument();
  })
  it("renders SearchBar component inside page.tsx",()=>{
    render(<Page />);
    expect(screen.getByRole('orderSelector')).toBeInTheDocument();
  })
  it("renders SearchBar component inside page.tsx",()=>{
    render(<Page />);
    expect(screen.getByRole('productsGrid')).toBeInTheDocument();
  })
  
});

describe("Products page functionality test ", () => {
  it('renders the correct number of products', () => {
    render(<Page />);
    const cards = screen.getAllByRole('productCard');
    expect(cards.length).toEqual(10);
  });
    
});
