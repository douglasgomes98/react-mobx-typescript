import React from "react";

import { Container } from "./styles";

type ButtonProps = {
  title: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ title, onClick }) => {
  return <Container onClick={onClick}>{title}</Container>;
};

export default Button;
