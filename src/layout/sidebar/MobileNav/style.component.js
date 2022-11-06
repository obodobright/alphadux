import styled from "styled-components";

export const NavContainer = styled.nav`
  display: none;
  @media (max-width: 800px) {
    width: 100%;
    height: 70px;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: black;
    z-index: 99;
  }
  span {
    padding: 0.2rem 1.7rem;
  }
`;
