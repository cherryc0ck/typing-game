import React from "react";
import * as S from "./Button.styled";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

const Button = ({ children, onClick }: ButtonProps) => {
  return <S.Button onClick={onClick}>{children}</S.Button>;
};

export default Button;
