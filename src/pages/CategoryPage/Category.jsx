import { useParams } from "react-router-dom";

const Category = () => {
  const { type } = useParams();

  return (
    <div>
      <h1>Category {type}</h1>
    </div>
  );
};

export default Category;
