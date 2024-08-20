import { createContext } from "react";
import type { ProductType } from "./assets/js/productList";

export type CartStateType = {
  cartList: ProductType[];
};

export type CartActionType = {
  type: string;
  payload?: any;
};

export const CartContext = createContext({});

export const cartInitialState: CartStateType = {
  cartList: [],
};

const calculateTotal = (price: number, qty: number) => price * qty;

export const cartReducer = (state: CartStateType, action: CartActionType) => {
  const newCartList = [...state.cartList];
  const cartItemIndex = newCartList.findIndex(
    (item) => item.id === action.payload.id
  );

  switch (action.type) {
    case "ADD_TO_CART":
      if (cartItemIndex !== -1) {
        const cartItem = newCartList[cartItemIndex];
        const qty = Number(cartItem.qty) + 1;

        if (qty > 20) {
          window.alert("一個品項最多只能購買 20 個！");
          return state;
        }

        const total = calculateTotal(cartItem.price, qty);
        newCartList[cartItemIndex] = {
          ...cartItem,
          qty,
          total,
        };
      } else {
        newCartList.push({
          ...action.payload,
          qty: 1,
          total: calculateTotal(action.payload.price, 1),
        });
      }
      return { cartList: newCartList };

    case "CHANGE_CART_QTY":
      const cartItem = newCartList[cartItemIndex];
      newCartList[cartItemIndex] = {
        ...cartItem,
        qty: action.payload.qty,
        total: calculateTotal(action.payload.price, action.payload.qty),
      };
      return { cartList: newCartList };

    case "REMOVE_FROM_CART":
      newCartList.splice(cartItemIndex, 1);
      return { cartList: newCartList };
    default:
      return state;
  }
};
