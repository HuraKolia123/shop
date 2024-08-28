// react
import { FC } from "react";
// styles
import styles from "./SliderDotsList.module.scss";
import { SliderDotItem } from "../SliderDotItem/SliderDotItem";

interface SliderDotsListProps {
  length: number;
  currentIndex: number;
  dotClick: (index: number) => void;
}

export const SliderDotsList: FC<SliderDotsListProps> = ({
  length,
  currentIndex,
  dotClick,
}) => {
  return (
    <div className={styles.SliderDotsList}>
      {Array.from({ length: length }).map((_, index) => {
        return (
          <SliderDotItem
            dotClick={dotClick}
            key={index}
            currentIndex={currentIndex}
            dotIndex={index}
          />
        );
      })}
    </div>
  );
};
