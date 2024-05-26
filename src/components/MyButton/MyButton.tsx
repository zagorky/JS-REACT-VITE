import { FC } from "react";
import classes from "./MyButton.module.scss";

interface MyButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
}

const MyButton: FC<MyButtonProps> = (props) => {
  const { children, onClick } = props;

  return (
    <button className={classes.button} onClick={onClick}>
      {children}
    </button>
  );
};
export default MyButton;
