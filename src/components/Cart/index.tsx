import { useContext } from "react";
import { CartContext } from "../../stores";
import type { CartStateType, CartActionType } from "../../stores";
import type { ProductType } from "../../assets/js/productList";
import {
  CartContainer,
  CartItem,
  EmptyCart,
  CartImg,
  RemoveButton,
  CartFooter,
} from "./Cart.style";
import CountSelect from "../CountSelect";

export default function Cart() {
  const [state, dispatch] = useContext(CartContext) as [
    CartStateType,
    (action: CartActionType) => void
  ];

  const options = [...Array(20)].map((_, index) => ({
    value: index + 1,
    label: index + 1,
  }));

  const changeQtyHandler = (
    e: React.ChangeEvent<HTMLSelectElement>,
    product: ProductType
  ) => {
    e.preventDefault();
    dispatch({
      type: "CHANGE_CART_QTY",
      payload: {
        ...product,
        qty: Number(e.target.value),
      },
    });
  };

  const removeProductHandler = (id: ProductType["id"]) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
  };

  const total = state.cartList.reduce(
    (acc, item) => acc + (item.total || 0),
    0
  );

  return (
    <>
      <CartContainer className="cart-container">
        <ul>
          {state.cartList.length ? (
            state.cartList.map((item: ProductType) => {
              return (
                <CartItem key={item.id}>
                  <CartImg src={item.img} alt={item.title} />
                  <h3>{item.title}</h3>
                  <CountSelect
                    value={item.qty || ""}
                    options={options}
                    placeholder="請選擇數量"
                    onChange={(e) => changeQtyHandler(e, item)}
                  />
                  <strong>{`$${item.total}`}</strong>
                  <RemoveButton onClick={() => removeProductHandler(item.id)}>
                    x
                  </RemoveButton>
                </CartItem>
              );
            })
          ) : (
            <EmptyCart>購物車是空的</EmptyCart>
          )}
        </ul>
        <CartFooter>
          <span>總計</span>
          <strong>${total}</strong>
        </CartFooter>
      </CartContainer>
    </>
  );
}
