import React from 'react';

import { Container } from './styles';

type CardProps = {
  data: number;
}

const Card: React.FC<CardProps> = ({data}) => {
  return (
    <Container>
      {data}
    </Container>
  );
};

export default Card;
