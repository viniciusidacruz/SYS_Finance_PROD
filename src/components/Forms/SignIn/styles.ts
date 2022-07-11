import styled from "styled-components";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

export const Form = styled.form`
  width: 100%;

  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);

  border-radius: 1rem;
  padding: 2rem;

  & > div {
    margin: 1rem 0;
  }
`;

export const FooterForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > span {
    cursor: pointer;

    &:hover {
      filter: brightness(0.8);
    }
  }

  button {
    width: 50%;
  }
`;

export const Email = styled(MdEmail)``;

export const Password = styled(RiLockPasswordFill)``;
