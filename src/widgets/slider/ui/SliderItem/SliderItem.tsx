// react
import { FC, ReactNode } from "react";
// styles
import styles from "./SliderItem.module.scss";
import { ISliderItem } from "../../model/types/slider";

interface SliderItemProps extends ISliderItem {}

export const SliderItem: FC<SliderItemProps> = ({
  description,
  link,
  logo,
  productImage,
  productTitle,
}) => {
  return (
    <div className={styles.SliderItem}>
      <img src={productImage} alt="" />
    </div>
  );
};
