import classes from "./CreateItems.module.scss";
import { storeProduct } from "@/service/products";
import { ProductStoreRequest } from "@/types/product";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";

const CreateItems = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const queryClient = useQueryClient();

  const mutator = useMutation({
    mutationFn: storeProduct,
    onSuccess: () => {
      formRef.current?.reset();
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },
  });

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const dataObject = Object.fromEntries(new FormData(event.currentTarget));
    const addedProduct = {
      name: dataObject.name,
      img: dataObject.img,
      price: +dataObject.price,
      discount: {
        type: dataObject.type,
        value: +dataObject.value,
      },
      rating: +dataObject.rating,
    };
    mutator.mutate(addedProduct as ProductStoreRequest);
  };

  return (
    <form
      ref={formRef}
      name="addItem"
      onSubmit={handleSubmit}
      className={classes.form}
    >
      <div className={classes.addItemsContainer}>
        <label className={classes.label} htmlFor="name">
          Название товара
        </label>
        <input className={classes.input} type="text" name="name" id="name" />
      </div>
      <div className={classes.addItemsContainer}>
        <label className={classes.label} htmlFor="img">
          Изображение товара
        </label>
        <input className={classes.input} type="text" name="img" id="img" />
      </div>

      <div className={classes.addItemsContainer}>
        <label className={classes.label} htmlFor="price">
          Стоимость
        </label>
        <input className={classes.input} type="text" name="price" id="price" />
      </div>

      <div className={classes.addItemsContainer}>
        <label className={classes.label} htmlFor="discount">
          Тип скидки
        </label>
        <select className={classes.input} name="discount" id="discount">
          <option value="percent">Процент</option>
          <option value="fix">Фиксированная</option>
        </select>
      </div>

      <div className={classes.addItemsContainer}>
        <label className={classes.label} htmlFor="value">
          Размер скидки
        </label>

        <input className={classes.input} type="text" name="value" id="value" />
      </div>

      <div className={classes.addItemsContainer}>
        <label className={classes.label} htmlFor="rating">
          Рейтинг
        </label>
        <input
          className={classes.input}
          type="text"
          name="rating"
          id="rating"
        />
      </div>

      <div className={classes.addItemsContainer}>
        <button className={classes.button} type="submit">
          Отправить
        </button>
      </div>
    </form>
  );
};

export default CreateItems;
