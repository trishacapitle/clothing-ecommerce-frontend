const Button = (title, color, bg, height, width) => {
  return (
    <div
      className={`p-auto rounded-full text-${color} bg-${bg} h-[${height}] w-[${width}]`}
    >
      {title}
    </div>
  );
}

export default Button