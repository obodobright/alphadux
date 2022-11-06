import styled from "styled-components";

export const HeroContainer = styled.section`
  width: 100%;
  padding: 2rem 1rem;
  height: 250px;
  margin-top: 0.5rem;
  background-image: url("assets/hero_bg.svg");
  background-size: center;
  background-position: center;
  position: relative;

  .artiste_name {
    width: 200px;
    position: absolute;
    right: 200px;
    bottom: 20px;
  }
`;
