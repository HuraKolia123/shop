// react
import { FC } from "react";
// styles
import styles from "./SliderDotItem.module.scss";
import clsx from "clsx";

interface SliderDotItemProps {
  dotIndex: number;
  currentIndex: number;
  dotClick: (index: number) => void;
}

export const SliderDotItem: FC<SliderDotItemProps> = ({
  currentIndex,
  dotIndex,
  dotClick,
}) => {
  return (
    <div
      onClick={() => dotClick(dotIndex)}
      className={clsx(styles.SliderDotItem, {
        [styles.activeRed]: dotIndex === currentIndex,
      })}
    ></div>
  );
};
