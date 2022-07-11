import React from "react";

import { ButtonProps } from "./types";
import ButtonContainer from "./styles";

export function Button({ title, icon, variant, ...rest }: ButtonProps) {
  return (
    <ButtonContainer variant={variant} {...rest}>
      <span>{title}</span>

      {icon && <span>{icon}</span>}
    </ButtonContainer>
  );
}
