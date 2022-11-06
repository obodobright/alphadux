import styled from "styled-components";

export const SideContainer = styled.div`
  width: 16rem;
  background-image: url("assets/img_background.svg");
  background-repeat: repeat;
  background-position: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  color: white;
  overflow-y: scroll;

  @media (max-width: 800px) {
    position: relative;
    display: none;
  }
`;
