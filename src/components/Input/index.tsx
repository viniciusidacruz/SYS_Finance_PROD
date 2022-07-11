import React, { Fragment } from "react";

import * as S from "./styles";
import ContentInputProps from "./types";

export function Input({
  label,
  htmlFor,
  iconType,
  isPassword,
  showPassword,
  handleChangePassword,
  ...rest
}: ContentInputProps) {
  return (
    <Fragment>
      <S.Label htmlFor={htmlFor}>{label}</S.Label>

      <S.Container>
        {iconType && <S.ContentIcon>{iconType}</S.ContentIcon>}

        <input {...rest} />

        {isPassword && (
          <S.ContentPassword onClick={handleChangePassword}>
            {showPassword ? <S.HideIcon /> : <S.ShowIcon />}
          </S.ContentPassword>
        )}
      </S.Container>
    </Fragment>
  );
}
