import { FC } from "react";
import { MyButton } from "@/components";

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
      <p>
        Товаров в корзине :<MyButton onClick={addCart}> + </MyButton>
        <input type="number" value={count} onChange={handleChangeCartCount} />
        <MyButton onClick={removeCart}> - </MyButton>
      </p>
    </div>
  );
};

export default CountItems;
