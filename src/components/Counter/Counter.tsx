import { Reducer, useReducer, useState } from "react";
import { ImmerReducer, useImmerReducer } from "use-immer";

interface CounterType {
  counter: number;
}

type CounterAction =
  | { type: ActiveType.ADDCART; payload: number }
  | { type: ActiveType.REMOVECART; payload: number };

enum ActiveType {
  ADDCART = "addcart",
  REMOVECART = "removecart",
}

const reducer: ImmerReducer<CounterType, CounterAction> = (
  draftState,
  action
) => {
  switch (action.type) {
    case ActiveType.ADDCART:
      draftState.counter += action.payload;
      break;
    case ActiveType.REMOVECART:
      draftState.counter -= action.payload;
      break;
    default:
      break;
  }
};

const initialState: CounterType = {
  counter: 0,
};

const addCart = (value: number) => ({
  type: ActiveType.ADDCART,
  payload: value,
});

const removeCart = (value: number) => ({
  type: ActiveType.REMOVECART,
  payload: value,
});

const Counter = () => {
  const [value, setValue] = useState<number>(0);
  const [state, dispatch] = useImmerReducer(reducer, initialState);

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
