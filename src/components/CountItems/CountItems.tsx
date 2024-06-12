import { FC } from "react";
import { MyButton } from "@/components";

interface CountItemsProps {
  count: number;
  addCart: () => void;
  removeCart: () => void;
}

const CountItems: FC<CountItemsProps> = (props) => {
  const { addCart, count, removeCart } = props;

  return (
    <div>
      <p>
        Товаров в корзине :<MyButton onClick={addCart}> + </MyButton>
        {count}
        <MyButton onClick={removeCart}> - </MyButton>
      </p>
    </div>
  );
};

export default CountItems;
