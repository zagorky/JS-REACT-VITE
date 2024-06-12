import { Dispatch, FC, ReactNode, createContext, useState } from "react";

interface ThemesProviderProvider {
  children: ReactNode;
}

interface ThemesContextType {
  theme: ThemeVar;
  setTheme: Dispatch<React.SetStateAction<ThemeVar>>;
}

export enum ThemeVar {
  light = "light",
  dark = "dark",
}

export const ThemesContext = createContext<ThemesContextType>({
  theme: ThemeVar.light,
  setTheme: () => {},
});

const ThemesProvider: FC<ThemesProviderProvider> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeVar>(ThemeVar.light);

  return (
    <ThemesContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemesContext.Provider>
  );
};

export default ThemesProvider;
