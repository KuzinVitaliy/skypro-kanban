import "./column.css";
import { Card } from "../Card/Card.jsx";
export function Column({cardList, title}) {
  return (
    <div className="column">
      <div className="columnHeader">{title}</div>
      {cardList.map((item, index) => (
        <Card cardInfo={item} />
      ))}
    </div>
  );
}
