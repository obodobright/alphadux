import styled from "styled-components";

export const LayoutContainer = styled.div`
  position: relative;
  max-width: 96%;
  width: 100%;
  color: white;
  margin-left: 16rem;
  padding: 1.3rem;
  // background: red;
  overflow: hidden;

  @media (max-width: 800px) {
    margin: 0;
    width: 100%;
    max-width: 100%;
    padding: 0rem;
  }
`;
