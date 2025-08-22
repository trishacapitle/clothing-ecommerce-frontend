
const SIZES = ["Small", "Medium", "Large"];

const SizeSelector = ({ selectedSize, onSelect }) => (
  <div className="my-6">
    <p className="text-black/60">Choose Size</p>
    <div className="mt-4 flex gap-2">
      {SIZES.map((size) => (
        <button
          key={size}
          onClick={() => onSelect(size)}
          className={`font-primary rounded-full px-8 py-3 transition-all duration-300 ease-in-out ${
            selectedSize === size
              ? "bg-black text-white"
              : "bg-[#F0F0F0] text-black/60"
          }`}
        >
          {size}
        </button>
      ))}
    </div>
  </div>
);

export default SizeSelector