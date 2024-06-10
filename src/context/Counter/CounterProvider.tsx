import { FC, ReactNode, createContext } from "react";
import { useImmerReducer } from "use-immer";
import { reducer } from "./reducer";
import { initialState } from "./initialState";
import { CounterContextType } from "./types";

interface CounterProviderProps {
  children: ReactNode;
}

export const CounterContext = createContext<CounterContextType>({
  state: initialState,
  dispatch: () => {},
});

const CounterProvider: FC<CounterProviderProps> = ({ children }) => {
  const [state, dispatch] = useImmerReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
