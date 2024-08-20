import { useReducer } from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { Main } from "./App.style";
import { CartContext, cartReducer, cartInitialState } from "./stores";

export default function App() {
  const reducer = useReducer(cartReducer, cartInitialState);

  return (
    <>
      <CartContext.Provider value={reducer}>
        <Header />
        <Main>
          <Products />
          <Cart />
        </Main>
      </CartContext.Provider>
    </>
  );
}
