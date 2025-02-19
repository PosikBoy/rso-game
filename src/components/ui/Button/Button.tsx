import classNames from "classnames";
import styles from "./Button.module.scss";

interface IProps {
  onClick: () => void;

  text: string;
  variant?:
    | "outlined-20-primary"
    | "contained-20-primary"
    | "outlined-20-gradient";
  className?: string;
}

const Button = (props: IProps) => {
  const { onClick, variant = "outlined-20-primary", text, className } = props;
  return (
    <button
      className={classNames(
        styles.button,
        styles[`variant-${variant}`],
        className
      )}
      onClick={onClick}
    >
      <span>{text}</span>
    </button>
  );
};

export default Button;
