import styled from "styled-components";
import { colors } from "../colors";

export const ProfileContainer = styled.section`
  width: 100%;
  position: relative;
  background-color: ${colors.profile_bg};
  padding: 1rem;
  gap: 0.7rem;
  display: flex;
  //   justify-content: center;
  align-items: center;

  .profile_bg {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 100%;
    background: blue;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .profile_details {
    ont-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
  }
`;
