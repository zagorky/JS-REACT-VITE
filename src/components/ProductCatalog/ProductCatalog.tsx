import classes from "./ProductCatalog.module.scss";
import { Pagination, Product } from "@/components";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/service/products";
import { useState } from "react";

const ProductCatalog = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(3);

  const { data, isError, isLoading } = useQuery({
    queryKey: ["products", currentPage, perPage],
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
        <div>
          <p>Отображать на странице</p>
          <select
            value={perPage}
            name=""
            id=""
            onChange={(event) => {
              setPerPage(+event.target.value);
            }}
          >
            <option value="3">3</option>
            <option value="6">6</option>
            <option value="9">9</option>
          </select>
        </div>
        <div className={classes.catalog}>
          {data.products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </div>
      <Pagination
        pagination={data.pagination}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};
export default ProductCatalog;
