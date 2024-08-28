// react
import { ChangeEvent, FC, useState } from "react";
// styles
import styles from "./App.module.scss";
import { Input } from "@/shared/ui/Input";

// import { Input } from "@/shared/ui/Input";
// import SearchIcon from "@/shared/libs/assets/svg/searchIcon.svg?react";
// import WishlistIcon from "@/shared/libs/assets/svg/Wishlist.svg?react";
// import BasketIcon from "@/shared/libs/assets/svg/basketIcon.svg?react";
// import { IconButton } from "@/shared/ui/IconButton";
// import { Button } from "@/shared/ui/Button";

interface AppProps {}

export const App: FC<AppProps> = ({}) => {
  const [text, SetText] = useState("");

  const onTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    SetText(e.target.value);
  };

  const [isHover, setIsHover] = useState(false);

  const onFocusInput = () => {
    setIsHover(!isHover);
  };

  return (
    <div className={styles.App}>
      <label>
        Email
        <Input
          inputHoverVariant={}
          onChange={onTextChange}
          type="text"
          value={text}
          placeholder="Input..."
          inputHeightVariant="48px"
          borderColorVariant="gray"
        />
      </label>
    </div>
  );
};
