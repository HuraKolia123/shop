// react
import { FC } from "react";
import { Route, Routes } from "react-router-dom";
// pages
import { HomePage } from "@/pages/home";

import {
  getAboutRoute,
  getAccountRoute,
  getCartRoute,
  getCheckOutRoute,
  getErrorRoute,
  getHomeRoute,
  getLogInRoute,
  getProductDetailsRoute,
  getSignUpRoute,
  getWishlistRoute,
} from "@/shared/constants/routes";
import { AboutPage } from "@/pages/about/ui/AboutPage/AboutPage";
import { AccountPage } from "@/pages/account/ui/AccountPage/AccountPage";
import { CartPage } from "@/pages/cart/ui/CartPage/CartPage";
import { CheckOutPage } from "@/pages/checkOut/ui/CheckOutPage/CheckOutPage";
import { ErrorPage } from "@/pages/error/ui/ErrorPage/ErrorPage";
import { LogInPage } from "@/pages/logIn/ui/LogInPage/LogInPage";
import { ProductDetailsPage } from "@/pages/productDetails/ui/ProductDetailsPage/ProductDetailsPage";
import { SignUpPage } from "@/pages/singUp/ui/SignUpPage/SignUpPage";
import { WishlistPage } from "@/pages/wishlist/ui/WishlistPage/WishlistPage";

interface AppRouterProps {}

export const AppRouter: FC<AppRouterProps> = () => {
  return (
    <Routes>
      <Route path={getHomeRoute()} element={<HomePage />} />
      <Route path={getAboutRoute()} element={<AboutPage />} />
      <Route path={getAccountRoute()} element={<AccountPage />} />
      <Route path={getCartRoute()} element={<CartPage />} />
      <Route path={getCheckOutRoute()} element={<CheckOutPage />} />
      <Route path={getErrorRoute()} element={<ErrorPage />} />
      <Route path={getLogInRoute()} element={<LogInPage />} />
      <Route path={getProductDetailsRoute()} element={<ProductDetailsPage />} />
      <Route path={getSignUpRoute()} element={<SignUpPage />} />
      <Route path={getWishlistRoute()} element={<WishlistPage />} />
    </Routes>
  );
};
