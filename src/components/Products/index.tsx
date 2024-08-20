import { useContext } from "react";
import { CartContext, CartActionType } from "../../stores";
import type { CartStateType } from "../../stores";
import {
  ProductContainer,
  ProductCard,
  ProductImg,
  ProductInfo,
  CartButton,
} from "./Products.style";
import productList from "../../assets/js/productList";
import type { ProductType } from "../../assets/js/productList";

export default function Products() {
  const [, dispatch] = useContext(CartContext) as [
    CartStateType,
    (action: CartActionType) => void
  ];

  const addToCartHandler = (product: ProductType) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <>
      <ProductContainer>
        {productList.map((product) => (
          <ProductCard key={product.id}>
            <ProductImg src={product.img} alt={product.title} />
            <ProductInfo>
              <h3>{product.title}</h3>
              <strong>{`$${product.price}`}</strong>
              <CartButton onClick={() => addToCartHandler(product)}>
                加入購物車
              </CartButton>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductContainer>
    </>
  );
}
