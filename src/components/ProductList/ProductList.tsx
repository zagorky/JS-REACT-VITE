import { ProductItem } from "@/types";
import { Row } from "@/components";
import { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState<ProductItem[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((e) => console.error(e));
  }, []);

  const list = products.map((product) => {
    return (
      <p key={product.id}>
        Название:
        {product.name}, стоимость: {product.price}
      </p>
    );
  });

  return (
    <div>
      <Row>{list}</Row>
    </div>
  );
};

export default ProductList;
