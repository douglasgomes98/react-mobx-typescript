import React, { useState } from "react";

import { Container, ButtonWrapper, CardWrapper } from "./styles";
import { Button, Card, Counter } from "../../components";

const Home: React.FC = () => {
  const [data, setData] = useState([1, 2, 3, 4, 5]);

  function addElement() {
    setData([...data, data.length + 1]);
  }

  function removeElement() {
    const lastNumber = data[data.length - 1];
    const newData = data.filter((element) => element !== lastNumber);
    setData(newData);
  }

  return (
    <Container>
      <ButtonWrapper>
        <Button title="Adicionar" onClick={addElement}></Button>
        <Button title="Remover" onClick={removeElement}></Button>
      </ButtonWrapper>
      <CardWrapper>
        {data.map((element) => (
          <Card key={element} data={element}></Card>
        ))}
      </CardWrapper>
      <Counter data={data.length}></Counter>
    </Container>
  );
};

export default Home;
