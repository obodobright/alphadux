import styled from "styled-components";
import { colors } from "../../colors";

export const HeaderContainer = styled.main`
  position: relative;
  width: 100%;
  background-color: ${colors.bg_color};
  display: flex;
  align-items: center;

  .controls {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    button {
      outline: none;
      width: 50px;
      height: 50px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${colors.profile_bg};
      border: 0;
      border-radius: 0.2rem;
    }
  }

  @media (max-width: 800px) {
    display: none;
  }
`;
