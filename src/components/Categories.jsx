const Categories = () => {
  return (
    <section className="col-center rounded-4xl bg-[#F0F0F0] p-16 w-fit m-auto">
      <h1 className="font-secondary mb-16 text-5xl uppercase">
        browse by dress style
      </h1>
      <div className="flex-center font-primary gap-5">
        <div className="casual relative">
          <p className="absolute top-6 left-9 text-2xl font-bold">Casual</p>
          <img
            src="/casual.png"
            alt="Casual Wear"
            className="h-72 w-96 rounded-2xl transition-shadow duration-300 ease-in-out hover:shadow-xl"
          />
        </div>
        <div className="formal relative">
          <p className="absolute top-6 left-9 text-2xl font-bold">Formal</p>
          <img
            src="/formal.png"
            alt="Formal Wear"
            className="h-72 w-2xl rounded-2xl transition-shadow duration-300 ease-in-out hover:shadow-xl"
          />
        </div>
      </div>
      <div className="flex-center font-primary mt-5 gap-5">
        <div className="party relative">
          <p className="absolute top-6 left-9 text-2xl font-bold">Party</p>
          <img
            src="/party.png"
            alt="Party Wear"
            className="h-72 w-2xl rounded-2xl transition-shadow duration-300 ease-in-out hover:shadow-xl"
          />
        </div>
        <div className="gym relative">
          <p className="absolute top-6 left-9 text-2xl font-bold">Gym</p>
          <img
            src="/gym.png"
            alt="Gym Wear"
            className="h-72 w-96 rounded-2xl transition-shadow duration-300 ease-in-out hover:shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Categories;
