import ProductsGrid from "./components/ProductsGrid";
import SearchBar from "./components/SearchBar";
import OrderSelector from "./components/OrderSelector";
import ColumnController from "./components/ColumnController";

export const metadata = {
  title: "Test Mayoral",
};

export default function Home() {
  return (
    <main role="homePage" className="flex w-full px-5 min-h-screen flex-col justify-between sm:py-5  bg-white">
      <section>
        <div className="flex flex-col  my-10  items-center  sm:flex-row-reverse">
          <div className="flex w-1/2 mb-10 justify-center sm:justify-end sm:mb-0">
            <ColumnController />
          </div> 
          <div className="w-full sm:w-1/2">
            <SearchBar />
          </div>
        </div>
        <div className="flex w-full justify-end mb-4 place-items-center">
          <OrderSelector />
        </div>
        <ProductsGrid />
      </section>
    </main>
  );
}
