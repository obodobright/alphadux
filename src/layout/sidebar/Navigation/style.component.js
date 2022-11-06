import styled from "styled-components";
import { colors } from "../../../components/colors";

export const NavContainer = styled.aside`
  position: relative;
  width: 100%;
  padding: 2rem 1rem;
  color: ${colors.text_secondary};
  //   background: red;
`;

export const NavWrapper = styled.section`
  padding: 0.5rem;
  position: relative;

  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
  li {
    padding: 0.3rem;
    width: 100%;
    margin: 0.4rem 0.2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.7rem;
    font-weight:500;
    font-size:1rem;
    transition:all 350ms;

    &:hover{
      color:${colors.active_text};
    }

    .active {
      color: ${colors.active_text};
      font-weight: 600;
    }
    .flex-between {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width:100%;

      .flex-wrapper{
      display: flex;
      align-items: center;
      gap: 0.7rem;
      }
  }
`;
