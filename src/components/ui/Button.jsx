const Button = ({ title, className = ""}) => {
  return (
    <button
      className={`font-primary rounded-full ${className} transition-all duration-300 ease-in-out hover:-translate-1`}
    >
      {title}
    </button>
  );
};

export default Button;
