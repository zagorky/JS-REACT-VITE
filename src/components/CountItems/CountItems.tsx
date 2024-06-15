import { FC } from "react";
import { MyButton } from "@/components";
import classes from "./CounterItems.module.scss";

interface CountItemsProps {
  count: number;
  addCart: () => void;
  removeCart: () => void;
  handleChangeCartCount: React.ChangeEventHandler<HTMLInputElement>;
}

const CountItems: FC<CountItemsProps> = (props) => {
  const { addCart, count, removeCart, handleChangeCartCount } = props;

  return (
    <div>
      <p>Товаров в корзине :</p>
      <div className={classes.container}>
        <MyButton onClick={addCart}> + </MyButton>
        <input type="number" value={count} onChange={handleChangeCartCount} />
        <MyButton onClick={removeCart}> - </MyButton>
      </div>
    </div>
  );
};

export default CountItems;
