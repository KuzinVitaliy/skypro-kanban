import "./column.css"
import { Card } from "../Card/card.jsx";
export function column(cards, title) {
  return (
    <div className="column">
      <div className="columnHeader">{title}</div>
    {cards.map((item, index) => (
               <>{Card(item)}</>
            ))}
      
    </div>
  );
}
