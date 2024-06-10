import { ImmerReducer } from "use-immer";
import { ActiveType, CounterAction, CounterType } from "./types";

export const reducer: ImmerReducer<CounterType, CounterAction> = (
  draftState,
  action,
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
