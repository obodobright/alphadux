import styled from "styled-components";

export const Container = styled.section`
  width: 100%;

  .music_container {
    padding: 2rem;

    p {
      font-style: normal;
      font-weight: 700;
      font-size: 1.7rem;
      padding-bottom: 1rem;

      @media (max-width: 800px) {
        font-size: 1.25rem;
      }
    }
  }
  .card_container {
    //
    align-items: center;

    justify-content: flex-start;
    display: grid;
    grid-template-columns: repeat(auto-fill, 256px);

    @media (max-width: 800px) {
      justify-content: flex-start;
      display: flex;
      width: 100%;
      overflow-x: scroll;
    }
  }

  .mobile_topbar {
    display: none;
    @media (max-width: 800px) {
      display: flex;
    }
  }
`;
