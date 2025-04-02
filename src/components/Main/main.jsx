import "./main.css";
import { column } from "../Column/column.jsx";
import { cards } from "../../data.js";

export function main() {
  return (
    <div className="main">
      <div>
        {column(
          cards.filter((card) => card.taskStatus === 0),
          "Без статуса"
        )}
      </div>
      <div>
        {column(
          cards.filter((card) => card.taskStatus === 1),
          "Нужно сделать"
        )}
      </div>
      <div>
        {column(
          cards.filter((card) => card.taskStatus === 2),
          "В работе"
        )}
      </div>
      <div>
        {column(
          cards.filter((card) => card.taskStatus === 3),
          "Тестирование"
        )}
      </div>
      <div>
        {column(
          cards.filter((card) => card.taskStatus === 4),
          "Готово"
        )}
      </div>
    </div>
  );
}
