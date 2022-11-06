import styled from "styled-components";
import { colors } from "../colors";

export const Cards = styled.div`
  border: 1px solid ${colors.text_primary};
  padding-bottom: 1rem;
  margin: 0.7rem;
  position: relative;
  //   width: 300px;

  .bg-background {
    width: 100%;
    height: 170px;
    background: ${({ bg }) =>
      bg === "blue"
        ? colors.blue_cardColor
        : bg === "indigo"
        ? colors.indigo_cardColor
        : bg === "red"
        ? colors.red_cardColor
        : ""};
    position: absolute;
    top: 50px;
    z-index: -1;
  }
  .img_backdrop {
    border: 1px solid white;
    border-bottom: 0;
    margin: 0.5rem 1rem;
    position: relative;
    top: 10px;
    z-index: 1;
    background: black;

    .img {
      margin: 0.7rem;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }
  }
  .info_data {
    background: ${({ bg }) =>
      bg === "blue"
        ? colors.blue_cardColor
        : bg === "indigo"
        ? colors.indigo_cardColor
        : bg === "red"
        ? colors.red_cardColor
        : ""};
    width: 100%;
    padding: 1rem;
    position: relative;
    display: flex;
    padding-bottom: 0.5rem;
    align-items: flex-end;
    h4 {
      font-family: Bw Modelica;
      font-size: 16px;
      font-weight: 700;
      line-height: 19px;
      letter-spacing: 0.04em;
      text-align: left;
      padding: 2px;
    }
    .info_details {
      padding: 2px;
      font-family: Bw Modelica;
      font-size: 10px;
      font-weight: 500;
      line-height: 12px;
      letter-spacing: 0.04em;
      text-align: left;
    }
  }
`;
