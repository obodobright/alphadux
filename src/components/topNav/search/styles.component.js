import styled from "styled-components";
import { colors } from "../../colors";

export const SearchContainer = styled.section`
  width: 350px;
  max-width: 500px;
  height: 50px;
  padding: 0.6rem;
  display: flex;
  border: 1px solid ${colors.profile_bg};
  border-radius: 0.4rem;
  align-items: center;
  margin-left: 2rem;
  position: relative;
  gap: 0.5rem;
  input {
    width: 100%;
    height: 45px;
    outline: none;
    border: 0;
    background: black;
    color: ${colors.text_secondary};
  }
`;
