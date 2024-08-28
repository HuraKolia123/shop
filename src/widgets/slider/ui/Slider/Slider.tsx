// react
import { FC, useState } from "react";
// styles
import styles from "./Slider.module.scss";
import { ISliderItem } from "../../model/types/slider";
import { SliderItem } from "../SliderItem/SliderItem";
import { SliderDotsList } from "../SliderDotsList/SliderDotsList";

interface SliderProps {
  sliderItems: ISliderItem[];
}

export const Slider: FC<SliderProps> = ({ sliderItems }) => {
  const [currentItem, setCurrentItem] = useState(sliderItems[0]);

  const currentIndex = sliderItems.findIndex((item) => {
    return item.productImage === currentItem.productImage;
  });

  const sliderItemsLength = sliderItems.length;

  const dotClick = (index: number) => {
    setCurrentItem(sliderItems[index]);
  };

  return (
    <div className={styles.Slider}>
      <SliderItem {...currentItem} />
      <SliderDotsList
        length={sliderItemsLength}
        currentIndex={currentIndex}
        dotClick={dotClick}
      />
    </div>
  );
};
