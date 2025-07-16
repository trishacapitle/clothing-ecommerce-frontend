import Card from "./ui/Card";
import Button from "./ui/Button";
import { data } from "../assets/products";

const Products = () => {
  const { newArrivals, topSelling } = data.products;

  return (
    <div className="col-center w-full gap-16">
      <div className="new-arrivals col-center mt-16 gap-12">
        <h1 className="font-secondary text-5xl uppercase">New Arrivals</h1>
        <div className="products flex-center gap-5">
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
        <h1 className="font-secondary text-5xl uppercase">Top Selling</h1>
        <div className="products flex-center gap-5">
          {topSelling.map((tsProduct) => (
            <Card key={tsProduct.id} product={tsProduct} />
          ))}
        </div>
        <Button
          title="View All"
          className="h-12 border border-black bg-white px-20"
        />
      </div>
    </div>
  );
};

export default Products;
