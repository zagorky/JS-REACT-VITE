import { ProductItem } from "../../types/product.ts";
interface ProductProps {
  product: ProductItem;
}

export default function Product() {
  const product = {
    id: 1,
    name: "Наручные часы мужские SKMEI 1251",
    img: "https://ir-2.ozone.ru/s3/multimedia-2/wc1000/6197515010.jpg",
    isFavorite: false,
    price: 8165,
    discount: 90,
    rating: 4.7,
    isFavorite: false,
  };
  return (
    <div>
      <p>{product.productName}</p>
      <p>{product.price}</p>
    </div>
  );
}
