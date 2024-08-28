// react
import { ChangeEvent, FC, useState } from "react";
// styles
import styles from "./App.module.scss";
import { Input } from "@/shared/ui/Input";
import { Slider } from "@/widgets/slider/ui/Slider/Slider";

// import { Input } from "@/shared/ui/Input";
// import SearchIcon from "@/shared/libs/assets/svg/searchIcon.svg?react";
// import WishlistIcon from "@/shared/libs/assets/svg/Wishlist.svg?react";
// import BasketIcon from "@/shared/libs/assets/svg/basketIcon.svg?react";
// import { IconButton } from "@/shared/ui/IconButton";
// import { Button } from "@/shared/ui/Button";

interface AppProps {}

export const App: FC<AppProps> = ({}) => {
  return (
    <div className={styles.App}>
      <Slider
        sliderItems={[
          {
            description: "",
            logo: undefined,
            productTitle: "",
            productImage:
              "https://s3-alpha-sig.figma.com/img/5e63/4682/db5174aff99bb9337d2dc9598a0b44e4?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H5Ods4ristFVj6V9yIQ5cP75wiNYZkhf2fokP7a-LxLGv4pSN8eS1nT1kfRdLVz0JEeFvh31wODXY~3zINJzdIUQEBY9A9ek2UYfklfK629T8-dXeQrAdC2MLyogpoPU5wsiCIhydefg3Z8DpV98CzCzsFcyW9Hkz8vl7AAHj0evm8hUlfP7hHl6YCHsHJszLcWWymXbxZjtAmmbJhYPQ0Z91R6iz8eOlWlZ4sOSInrG4~oOctDHNdHb9fB74pRT4eZG~gMC4EynVJo-RK16s3ZstFdWCVXL2Z2CWGXQ2AU4klsMHgQmSYOv8rMiLX3MYTYkc6~XCzUnd8mVZkMwag__",
            link: "",
          },
          {
            description: "",
            logo: undefined,
            productTitle: "",
            productImage:
              "https://s3-alpha-sig.figma.com/img/e59d/9f34/8cc24eeff489863523b63971c3ff8e4a?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RM07aWZJdhhIWI3l8ZfEJA6KojXKfqF~D9KT8BBx1KtMbm45rUrwE077nKQxjK9qbecgnxw9dyxLrO8MB7mQlZ2iGaDx3jhklf~bQhV4xrv2DBZs0NZoXLDMRt2Ulbto-p4gou5fdarTv-xt39vTHZ-B3AB-OfwlvWYEfLYNljAUxGtJ4Xo-bBlpmyvm3nSxvd8UHUUV06hhlvy92VDkT8p9T3Pwe4bIl~ewL7TG0M3Ue6ABIpcfFAv6CCbpIF2Dryn20mSJYS8JQhOIhLcKgeLb0ePxudDjQr60Ikkfd1GZOoyVP-CSW6buGcRYAGPueBEpTT1BsF6gGLnY-BfEDg__",
            link: "",
          },
          {
            description: "",
            logo: undefined,
            productTitle: "",
            productImage:
              "https://s3-alpha-sig.figma.com/img/288d/a330/273c46e1c3dc0a8915c4b031d0345347?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m34LdWAB2UGWXEUmdLxVaT5ww-FcsFE~FtUBxUscbDWzDWRfCmnbQjERLg~VgWUb1PaqI~Kr6nGIQPqe1B6JnKw0a8kOGrdIrhA6t041duC829TTgqj18Wc0a7pDsqN89byPlsYV9nd~h2MJu5R05IuSFy-whC2zop3yES4BAmdm8lfePJUnfFsTsTycr0poYvPGIcTeRM6npA5BsytBU~A4L6Nu~c1hlafp1RZ8ETcXOlOeSKmyIpdZ7qrZPbebFFKD48AsKU7FFzslu47jPZYyV594pwICbMrEIWW1fevmutAK0PgeTaRTMj~CPx4mvs4cL1a-JJN5EFL9eF2SoQ__",
            link: "",
          },
        ]}
      />
    </div>
  );
};
