import { FC } from "react";
import MyButton from "../MyButton/MyButton";

interface CountItemsProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const CountItems: FC<CountItemsProps> = (props) => {
  const { count, onIncrement, onDecrement } = props;

  return (
    <div>
      <p>
        Товаров в корзине :<MyButton onClick={onIncrement}> + </MyButton>
        {count}
        <MyButton onClick={onDecrement}> - </MyButton>
      </p>
    </div>
  );
};

export default CountItems;
