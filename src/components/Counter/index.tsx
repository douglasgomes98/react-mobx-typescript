import React from "react";

import { Container } from "./styles";

type CounterProps = {
  data: number;
};

const Counter: React.FC<CounterProps> = ({data}) => {
  return (
    <Container>
      {data}
    </Container>
  );
};

export default Counter;
