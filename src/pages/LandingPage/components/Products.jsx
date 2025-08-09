import Card from "../../../components/ui/Card";
import Button from "../../../components/ui/Button";
import { data } from "../../../assets/data";

const Products = () => {
  const { newArrivals, topSelling } = data.products;

  const ScrollList = ({ items }) => (
    <div className="no-scrollbar w-full overflow-x-auto">
      <div className="sm:flex-center inline-flex">
        {items.map((product) => (
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
        <ScrollList items={newArrivals} />
        <Button
          title="View All"
          className="h-12 border border-black bg-white px-20"
        />
      </div>

      <hr className="w-full border-black/10" />

      <div className="mb-16 flex w-full flex-col items-center gap-12">
        <h1 className="font-secondary text-4xl uppercase sm:text-5xl">
          Top Selling
        </h1>
        <ScrollList items={topSelling} />
        <Button
          title="View All"
          className="h-12 border border-black bg-white px-20"
        />
      </div>
    </section>
  );
};

export default Products;
