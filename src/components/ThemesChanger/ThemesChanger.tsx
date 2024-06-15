import { ThemeVar, ThemesContext } from "@/context/Themes/ThemesProvider";
import { ChangeEventHandler, useContext } from "react";
import classes from "./ThemesChanger.module.scss";

const ThemesChanger = () => {
  const { theme, setTheme } = useContext(ThemesContext);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) =>
    setTheme(event.target.value as ThemeVar);

  return (
    <div className={classes.input}>
      <label htmlFor="darkTheme">
        <input
          checked={theme === ThemeVar.dark}
          type="radio"
          name="theme"
          id="darkTheme"
          value={ThemeVar.dark}
          onChange={handleChange}
        />
        Темная тема
      </label>
      <label htmlFor="lightTheme">
        <input
          checked={theme === ThemeVar.light}
          type="radio"
          name="theme"
          id="lightTheme"
          value={ThemeVar.light}
          onChange={handleChange}
        />
        Светлая тема
      </label>
    </div>
  );
};

export default ThemesChanger;
