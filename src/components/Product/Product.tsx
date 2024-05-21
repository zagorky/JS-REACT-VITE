import classes from "./Product.module.scss";

export default function Product() {
  const product = {
    id: 1,
    name: "Наручные часы мужские SKMEI 1251",
    img: "https://ir-2.ozone.ru/s3/multimedia-2/wc1000/6197515010.jpg",
    price: "8165 руб.",
    discount: "90%",
    rating: 4.7,
    isFavorite: true,
  };
  if (!product.isFavorite) {
    return null;
  }
  return (
    <div className={classes.products}>
      <p>Название товара: {product.name}</p>
      <img src={product.img} alt="Изображение товара" />
      <p>Стоимость: {product.price}</p>
      <p>Скидка: {product.discount}</p>
      <p>Рейтинг: {product.rating}</p>
      <p>Артикул: {product.id}</p>
    </div>
  );
}
