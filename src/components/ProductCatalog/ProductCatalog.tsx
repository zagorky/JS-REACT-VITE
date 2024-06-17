import classes from "./ProductCatalog.module.scss";
import { Product } from "@/components";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/service/products";
import Pagination from "../Pagination/Pagination";

const ProductCatalog = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading) {
    return <h1>Загрузка</h1>;
  }
  if (isError || !data) {
    return <h2>Ошибка</h2>;
  }
  return (
    <>
      <div>
        <h2>Каталог товаров</h2>
        <div className={classes.catalog}>
          {data.products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </div>
      <Pagination pagination={data.pagination} />
    </>
  );
};
export default ProductCatalog;
