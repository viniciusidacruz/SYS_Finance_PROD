import { ButtonHTMLAttributes, ReactNode } from "react";
import { DefaultTheme } from "styled-components";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  icon?: ReactNode;
  variant: "contained" | "outline" | "facebook" | "google";
}

interface TypeResultButtonProps {
  theme: DefaultTheme;
  variant: "contained" | "outline" | "facebook" | "google";
}

export { ButtonProps, TypeResultButtonProps };
