import styled from "styled-components";
import { TypeResultButtonProps } from "./types";

const getResultColor = ({ variant, theme }: TypeResultButtonProps) => {
  switch (variant) {
    case "contained":
      return {
        backgroundColor: theme.COLORS.PRIMARY.MAIN,
      };

    case "facebook":
      return {
        backgroundColor: "#3679FA",
      };

    case "google":
      return {
        backgroundColor: "#DD4B38",
      };

    case "outline":
      return {
        backgroundColor: "transparent",
        borderColor: `1px solid ${theme.COLORS.PRIMARY.MAIN}`,
      };

    default:
      return null;
  }
};

const ButtonContainer = styled.button<TypeResultButtonProps>`
  width: 100%;
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  background-color: ${({ variant, theme }) =>
    getResultColor({ variant, theme })?.backgroundColor};

  border-radius: 10px;
  border: ${({ variant, theme }) =>
    getResultColor({ variant, theme })?.borderColor};

  transition: filter 0.3s;

  span {
    font-size: ${({ theme }) => theme.FONTS.SIZES.REGULAR};
  }

  & > span:last-child {
    margin: 0.6rem;
  }

  &:hover {
    filter: brightness(1.3);
  }
`;

export default ButtonContainer;
