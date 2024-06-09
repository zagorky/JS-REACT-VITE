import { FC, ReactNode, createContext } from "react";

interface CounterProviderProps {
  children: ReactNode;
}

interface CounterType {
  value: number;
}

export const CounetrContext = createContext<CounterType>({ value: 0 });

const initialValue: CounterType = { value: 10 };

const CounterProvider: FC<CounterProviderProps> = ({ children }) => {
  return (
    <CounetrContext.Provider value={initialValue}>
      {children}
    </CounetrContext.Provider>
  );
};

export default CounterProvider;
