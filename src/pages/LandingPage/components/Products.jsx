import { data } from "../../../assets/data";
import { Link } from "react-router-dom";
import Button from "../../../components/ui/Button";
import Card from "../../../components/ui/Card";

const Products = () => {
  const { products } = data;

  const ScrollList = ({ items, tag }) => (
    <div className="no-scrollbar w-full overflow-x-auto">
      <div className="lg:flex-center inline-flex">
        {items
          .filter((product) => product.tag === tag)
          .map((product) => (
            <div key={product.id} className="min-w-[200px] shrink-0">
              <Card product={product} />
            </div>
          ))}
      </div>
    </div>
  );

  return (
    <section className="flex w-full flex-col gap-16">
      <div className="mt-16 flex w-full flex-col items-center gap-8 sm:gap-12">
        <h1 className="font-secondary text-4xl uppercase sm:text-5xl">
          New Arrivals
        </h1>
        <ScrollList items={products} tag="new arrival" />
        <Link to="category/all">
          <Button
            title="View All"
            className="h-12 border border-black bg-white px-20 hover:shadow-[5px_8px_0px_0px_rgba(100,100,100)]"
          />
        </Link>
      </div>

      <hr className="w-full border-black/10" />

      <div className="mb-16 flex w-full flex-col items-center gap-12">
        <h1 className="font-secondary text-4xl uppercase sm:text-5xl">
          Top Selling
        </h1>
        <ScrollList items={products} tag="top selling" />
        <Link to="category/all">
          <Button
            title="View All"
            className="h-12 border border-black bg-white px-20 hover:shadow-[5px_8px_0px_0px_rgba(100,100,100)]"
          />
        </Link>
      </div>
    </section>
  );
};

export default Products;
