import Card from "./ui/Card";
import Button from "./ui/Button";
import { data } from "../assets/products";

const Products = () => {
  const { newArrivals, topSelling } = data.products;

  return (
    <section className="col-center w-full gap-16">
      <div className="new-arrivals col-center mt-16 sm:gap-12 gap-8">
        <h1 className="font-secondary text-4xl uppercase sm:text-5xl">
          New Arrivals
        </h1>
        <div className="products flex-center sm:gap-5  overflow-x-auto">
          {newArrivals.map((naProduct) => (
            <Card key={naProduct.id} product={naProduct} />
          ))}
        </div>
        <Button
          title="View All"
          className="h-12 border border-black bg-white px-20"
        />
      </div>

      <hr className="w-[80dvw] border-black/10" />

      <div className="top-selling col-center mb-16 gap-12">
        <h1 className="font-secondary sm:text-5xl text-4xl uppercase">Top Selling</h1>
        <div className="products flex-center sm:gap-5  overflow-x-auto">
          {topSelling.map((tsProduct) => (
            <Card key={tsProduct.id} product={tsProduct} />
          ))}
        </div>
        <Button
          title="View All"
          className="h-12 border border-black bg-white px-20"
        />
      </div>
    </section>
  );
};

export default Products;
