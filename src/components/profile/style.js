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
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
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
