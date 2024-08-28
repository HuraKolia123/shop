// react
import { ChangeEvent, FC, HTMLInputTypeAttribute } from "react";
// styles
import styles from "./Input.module.scss";
//libs
import clsx from "clsx";

interface InputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  inputHeightVariant: "24px" | "36px" | "40px" | "48px";
  borderColorVariant: "black" | "gray";
  inputHoverVariant: boolean;
}

export const Input: FC<InputProps> = ({
  onChange,
  placeholder,
  value,
  type,
  inputHeightVariant,
  borderColorVariant,
  inputHoverVariant,
}) => {
  return (
    <div
      className={clsx(styles.Input, {
        [styles.inputHeight24px]: inputHeightVariant === "24px",
        [styles.inputHeight36px]: inputHeightVariant === "36px",
        [styles.inputHeight40px]: inputHeightVariant === "40px",
        [styles.inputHeight48px]: inputHeightVariant === "48px",
        [styles.borderBlack]: borderColorVariant === "black",
        [styles.borderGray]: borderColorVariant === "gray",
        [styles.inputHover]: inputHoverVariant,
      })}
    >
      <input
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};
