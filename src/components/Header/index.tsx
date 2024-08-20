import {
  HeaderContainer,
  HeaderNav,
  HeaderCart,
  Logo,
  CartCount,
} from "./Header.style";
import { useContext } from "react";
import { CartContext } from "../../stores";
import type { CartStateType } from "../../stores";

export default function Header() {
  const [state] = useContext(CartContext) as [CartStateType];

  const scrollToCart = () => {
    if (window.innerWidth < 990) {
      const cartContainer = document.querySelector(".cart-container");
      cartContainer?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <HeaderContainer>
        <HeaderNav>
          <Logo>Meal Go</Logo>
          <HeaderCart onClick={() => scrollToCart()}>
            <span>購物車</span>
            <CartCount $count={state.cartList?.length || 0}>
              {state.cartList?.length}
            </CartCount>
          </HeaderCart>
        </HeaderNav>
      </HeaderContainer>
    </>
  );
}
