import React, { useState } from "react";

import { Input } from "components/Input";

import * as S from "./styles";
import { Button } from "components/Button";

export function FormSignIn() {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword(!showPassword);

  return (
    <S.Form>
      <h4>Entrar</h4>

      <Input
        name="email"
        type="email"
        autoComplete="off"
        iconType={<S.Email />}
        placeholder="Digite o seu email"
      />

      <Input
        isPassword
        minLength={6}
        maxLength={30}
        autoComplete="off"
        iconType={<S.Password />}
        showPassword={showPassword}
        placeholder="Digite a sua senha"
        type={showPassword ? "text" : "password"}
        handleChangePassword={handleShowPassword}
      />

      <S.FooterForm>
        <span>Esqueceu a senha?</span>

        <Button title="Entrar" variant="contained" />
      </S.FooterForm>
    </S.Form>
  );
}
