import { CounterContext } from "@/context";
import { addCart, removeCart } from "@/context/Counter/actions";
import { useContext, useState } from "react";

const Counter = () => {
  const [value, setValue] = useState<number>(0);

  const { dispatch, state } = useContext(CounterContext);

  const handleAddCart = () => {
    dispatch(addCart(value));
  };

  const handleRemoveCart = () => {
    dispatch(removeCart(value));
  };

  return (
    <div>
      <h2>{state.counter}</h2>
      <input
        type="number"
        value={value}
        onChange={(event) => {
          setValue(+event.target.value);
        }}
      />
      <button onClick={handleAddCart}>+</button>
      <button onClick={handleRemoveCart}>-</button>
    </div>
  );
};

export default Counter;
