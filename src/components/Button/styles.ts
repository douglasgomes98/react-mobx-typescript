import styled from "styled-components";

export const Container = styled.button`
  padding: 16px;
  border-radius: 4px;
  border: 0;
  background-color: #00c893;
  color: #fff;
  font-weight: bold;
  width: 120px;

  & + button {
    margin-top:8px;
  }
`;
