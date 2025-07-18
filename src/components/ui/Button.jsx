const Button = ({ title, className = ""}) => {
  return (
    <button
      className={`font-primary rounded-full w-fit ${className} transition-all duration-300 ease-in-out hover:scale-105`}
    >
      {title}
    </button>
  );
};

export default Button;
