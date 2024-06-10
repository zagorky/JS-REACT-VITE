import { FC, useContext } from "react";
import { MyButton } from "@/components";
import { CounterContext } from "@/context/Counter/CounterProvider";

interface CountItemsProps {
  count: number;
  addCart: () => void;
  removeCart: () => void;
}

const CountItems: FC<CountItemsProps> = (props) => {
  const { addCart, count, removeCart } = props;
  const { state } = useContext(CounterContext);

  return (
    <div>
      <p>
        Товаров в корзине :<MyButton onClick={addCart}> + </MyButton>
        {count} {state.counter}
        <MyButton onClick={removeCart}> - </MyButton>
      </p>
    </div>
  );
};

export default CountItems;
