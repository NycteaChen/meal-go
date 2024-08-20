import styled from "styled-components";

export const CartContainer = styled.section`
  background-color: #f7f7f7;
  padding: 0 12px;

  @media (min-width: 990px) {
    width: 40%;
  }

  @media (min-width: 1200px) {
    width: 30%;
  }
`;

export const CartImg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

export const CartItem = styled.li`
  display: flex;
  position: relative;
  background-color: #fff;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 10px;
  margin: 10px 0;

  h3 {
    flex: 1 1 70%;
  }

  strong {
    text-align: right;
    font-weight: 700;
    flex: 1 1 30%;
  }
`;

export const EmptyCart = styled.li`
  display: flex;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  height: 120px;
`;

export const RemoveButton = styled.button`
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;
  border: none;
  background-color: #ff7600;
  color: #fff;
  font-size: 16px;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.5;
  }
`;

export const CartFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 10px 5px 20px 0;

  strong {
    font-weight: 700;
    font-size: 20px;
  }
`;
