// react
import { CSSProperties, FC, ReactNode } from "react";
// libs
import clsx from "clsx";
// styles
import styles from "./Button.module.scss";

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
  disabled?: boolean;
  maxWidth?: CSSProperties["maxWidth"];
  shoudAddBorder?: boolean;

  fontColorVariant?: "white" | "black";
  heightVariant?: "S" | "M" | "XL";
  borderRadiusVariant?: "full" | "bottom";
  BGcolorVariant?: "black" | "red" | "green" | "transparent";
}

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  disabled,
  maxWidth,
  shoudAddBorder,
  BGcolorVariant = "red",
  fontColorVariant = "white",
  borderRadiusVariant = "full",
  heightVariant = "XL",
}) => {
  return (
    <button
      className={clsx(styles.Button, {
        [styles.heightS]: heightVariant === "S",
        [styles.heightM]: heightVariant === "M",
        [styles.heightXL]: heightVariant === "XL",
        [styles.bgBlack]: BGcolorVariant === "black",
        [styles.bgGreen]: BGcolorVariant === "green",
        [styles.bgRed]: BGcolorVariant === "red",
        [styles.bgTransparent]: BGcolorVariant === "transparent",
        [styles.fontBlack]: fontColorVariant === "black",
        [styles.fontWhite]: fontColorVariant === "white",
        [styles.border]: shoudAddBorder,
        [styles.borderRadiusFull]: borderRadiusVariant === "full",
        [styles.borderRadiusBottom]: borderRadiusVariant === "bottom",
      })}
      onClick={onClick}
      disabled={disabled}
      style={{
        maxWidth: maxWidth,
      }}
    >
      {children}
    </button>
  );
};
