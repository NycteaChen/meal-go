import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #f4e4ff;
  padding: 10px 16px;

  @media (min-width: 768px) {
    padding: 12px 24px;
  }
`;

export const HeaderNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1320px;
  margin: 0 auto;
`;

export const Logo = styled.h1`
  margin: 0;
  font-size: 28px;
  font-weight: 700;
`;

export const HeaderCart = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 989px) {
    cursor: pointer;
  }
`;

export const CartCount = styled.span<{ $count: number }>`
  position: absolute;
  top: -10px;
  right: ${(props) => (props.$count > 99 ? "-18px" : "-14px")};
  color: #fff;
  font-size: 12px;
  height: auto;
  background-color: #e94527;
  width: ${(props) => (props.$count > 99 ? "24px" : "16px")};
  height: 16px;
  padding: 2px;
  border-radius: ${(props) => (props.$count > 99 ? "50rem" : " 50%")};
  display: flex;
  align-items: center;
  justify-content: center;
`;
