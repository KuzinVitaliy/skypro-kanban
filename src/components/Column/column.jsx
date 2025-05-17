//import "./column.css";
import { Card } from "../Card/Card.jsx";
import styled from "styled-components";

const SColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const SColumnHeader = styled.div`
  color: rgb(148, 166, 190);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0%;
  text-align: left;
  text-transform: uppercase;
  padding-top: 40px;
  padding-bottom: 20px;
`;

export function Column({ cardList, title }) {
  return (
    <SColumn>
      <SColumnHeader>{title}</SColumnHeader>
      {cardList.map((item) => (
        <Card key={item.taskId} cardInfo={item} />
      ))}
    </SColumn>
  );
}
