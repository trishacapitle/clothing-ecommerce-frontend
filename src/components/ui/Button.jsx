const Button = ({ title, color, bg, width }) => {
  return (
    <button
      className={`font-primary p-auto rounded-full h-14 text-${color} bg-${bg} w-${width}`}
    >
      {title}
    </button>
  );
};

export default Button;
