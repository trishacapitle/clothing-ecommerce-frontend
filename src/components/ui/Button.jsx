const Button = ({ title, className = ""}) => {
  return (
    <button
      className={`font-primary rounded-full ${className} hover:-translate-1 ease-in-out duration-300 transition-all`}
    >
      {title}
    </button>
  );
};

export default Button;
