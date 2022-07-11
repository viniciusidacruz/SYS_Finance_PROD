import styled from "styled-components";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-right: 1rem;
  height: 3rem;

  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.COLORS.SHAPE};

  input {
    width: 100%;
    padding-left: 1rem;
    background-color: transparent;
    height: 100%;
  }
`;

export const Label = styled.label``;

export const ContentIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;

  font-size: 1.5rem;

  background-color: ${({ theme }) => theme.COLORS.PRIMARY.MAIN};
  color: #ffffff;

  width: 10%;
  height: 100%;
`;

export const ContentPassword = styled.div`
  cursor: pointer;
`;

export const ShowIcon = styled(BsEyeFill)`
  color: ${({ theme }) => theme.COLORS.GRAY.MAIN};
`;

export const HideIcon = styled(BsEyeSlashFill)`
  color: ${({ theme }) => theme.COLORS.GRAY.MAIN};
`;
