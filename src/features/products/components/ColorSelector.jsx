const COLORS = [
  { key: "amber", className: "bg-amber-500 hover:bg-amber-500/60" },
  { key: "green", className: "bg-green-800 hover:bg-green-800/60" },
  { key: "blue", className: "bg-blue-900 hover:bg-blue-900/60" },
];

const ColorSelector = ({ selectedColor, onSelect }) => (
  <div className="my-6">
    <p className="text-black/60">Select Colors</p>
    <div className="mt-4 flex gap-2">
      {COLORS.map(({ key, className }) => (
        <button
          key={key}
          onClick={() => onSelect(key)}
          className={`color-option flex h-10 w-10 items-center justify-center rounded-full ${className}`}
        >
          {selectedColor === key && <BiCheck size={20} fill="white" />}
        </button>
      ))}
    </div>
  </div>
);

export default ColorSelector;
