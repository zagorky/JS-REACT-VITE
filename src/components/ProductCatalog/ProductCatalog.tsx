import classes from "./ProductCatalog.module.scss";
import { Product } from "@/components";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/service/products";

const ProductCatalog = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading) {
    return <h1>Загрузка</h1>;
  }
  if (isError || !data) {
    return <h1>Ошибка</h1>;
  }
  return (
    <>
      <div>
        <h2>Каталог товаров</h2>
        <div className={classes.catalog}>
          {data.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </div>
    </>
  );
};
export default ProductCatalog;
