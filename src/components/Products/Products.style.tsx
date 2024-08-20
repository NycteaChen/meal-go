import styled from "styled-components";

export const ProductContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media (min-width: 990px) {
    width: 60%;
  }

  @media (min-width: 1200px) {
    width: 70%;
  }
`;

export const ProductCard = styled.figure`
  width: 100%;
  border: 1px solid #f4e4ff;

  @media (min-width: 560px) {
    width: calc(50% - 10px);
  }

  @media (min-width: 1200px) {
    width: calc(100% / 3 - 40px / 3);
  }
`;

export const ProductImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 200px;
`;

export const CartButton = styled.button`
  background-color: transparent;
  border: 1px solid #c8a6df;
  color: #c8a6df;
  font-size: 14px;
  padding: 10px 16px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  @media (min-width: 768px) {
    &:hover {
      background-color: #c8a6df;
      color: #fff;
    }
  }
`;

export const ProductInfo = styled.figcaption`
  padding: 10px 16px 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  strong {
    margin-left: auto;
    font-weight: 700;
  }

  ${CartButton} {
    width: 100%;
  }
`;
