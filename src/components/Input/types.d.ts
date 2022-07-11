import { InputHTMLAttributes, ReactNode } from "react";

interface ContentInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  htmlFor?: string;
  iconType?: ReactNode;
  isPassword?: boolean;
  showPassword?: boolean;
  handleChangePassword?: () => void;
}

export default ContentInputProps;
