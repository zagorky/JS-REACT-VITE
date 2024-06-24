import { MyButton } from "@/components";
import { useNavigate, useParams } from "react-router-dom";

const ProductPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;
  return (
    <div>
      <h1>Информация о товаре</h1>
      <MyButton
        onClick={() => {
          navigate(-1);
        }}
      >
        Назад
      </MyButton>
    </div>
  );
};

export default ProductPage;
