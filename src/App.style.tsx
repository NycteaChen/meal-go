import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  margin: auto;
  padding: 40px 0;
  width: 95%;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 990px) {
    align-items: flex-start;
    flex-direction: row;
    padding: 60px 0;
    max-width: 1320px;
  }
`;
