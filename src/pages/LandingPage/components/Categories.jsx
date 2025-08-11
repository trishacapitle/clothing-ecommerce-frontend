import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <section className="col-center m-auto w-fit rounded-4xl bg-[#F0F0F0] p-8 sm:p-16">
      <h1 className="font-secondary mb-8 text-center text-4xl uppercase sm:mb-16 sm:text-5xl">
        browse by dress style
      </h1>
      <div className="flex-center font-primary flex-col gap-5 sm:flex-row">
        <div className="casual relative">
          <Link to="/category/casual">
            <p className="absolute top-6 left-9 text-2xl font-bold">Casual</p>
            <img
              src="/casual.png"
              alt="Casual Wear"
              className="h-72 w-96 rounded-2xl transition-shadow duration-300 ease-in-out hover:shadow-xl"
            />
          </Link>
        </div>
        <div className="formal relative">
          <Link to="/category/formal">
            <p className="absolute top-6 left-9 text-2xl font-bold">Formal</p>
            <img
              src="/formal.png"
              alt="Formal Wear"
              className="h-72 w-2xl rounded-2xl object-cover transition-shadow duration-300 ease-in-out hover:shadow-xl"
            />
          </Link>
        </div>
      </div>
      <div className="flex-center font-primary mt-5 flex-col gap-5 sm:flex-row">
        <div className="party relative">
          <Link to="/category/party">
            <p className="absolute top-6 left-9 text-2xl font-bold">Party</p>
            <img
              src="/party.png"
              alt="Party Wear"
              className="h-72 w-2xl rounded-2xl object-cover transition-shadow duration-300 ease-in-out hover:shadow-xl"
            />
          </Link>
        </div>
        <div className="gym relative">
          <Link to="/category/gym">
            <p className="absolute top-6 left-9 text-2xl font-bold">Gym</p>
            <img
              src="/gym.png"
              alt="Gym Wear"
              className="h-72 w-96 rounded-2xl transition-shadow duration-300 ease-in-out hover:shadow-xl"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Categories;
