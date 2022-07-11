import React from "react";

import * as S from "./styles";
import ContentProps from "./types";

export function MethodSignIn({ children }: ContentProps) {
  return (
    <S.Container>
      <S.GroupLeft>
        <S.Cover src="/hero-sign.jpg" />
      </S.GroupLeft>

      <S.GroupRight>{children}</S.GroupRight>
    </S.Container>
  );
}
