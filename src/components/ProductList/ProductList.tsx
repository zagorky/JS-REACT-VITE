import ProductItem from "../../types/product.ts";
import Row from "../Row/Row.tsx";

export default function ProductList() {
  const products: ProductItem[] = [
    {
      name: "товар 1",
      price: "100",
      id: 11,
    },
    {
      name: "товар 2",
      price: "150",
      id: 22,
    },
    {
      name: "товар 3",
      price: "200",
      id: 33,
    },
  ];

  const list = products.map((product) => {
    return (
      <p key={product.id}>
        {" "}
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
}
