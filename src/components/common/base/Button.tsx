import React from "react";
import styled from "styled-components";

type ChildrenProps = {
  children: React.ReactNode;
  onClick: () => void;
};

const Button = ({ children, onClick }: ChildrenProps) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

const StyledButton = styled.button`
  border-radius: 1.2rem;
`;

export default Button;
