import { MyButton } from "@/components";
import { getProdById } from "@/service/products";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";

const ProductPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["product", id],
    queryFn: ({ queryKey }) => getProdById(queryKey[1]),
  });

  if (isLoading) {
    return <h1>Загрузка</h1>;
  }
  if (isError || !data) {
    return <h2>Ошибка</h2>;
  }

  return (
    <div>
      <h1>Информация о товаре-{data.name}</h1>
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
