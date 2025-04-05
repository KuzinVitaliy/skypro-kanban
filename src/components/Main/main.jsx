import "./main.css";
import { Column } from "../Column/Column.jsx";
import { cards } from "../../data.js";

export function Main() {
  return (
    <div className="main">
      <div>
        <Column
          cardList={cards.filter((card) => card.taskStatus === 0)}
          title="Без статуса"
        />
      </div>
      <div>
        <Column
          cardList={cards.filter((card) => card.taskStatus === 1)}
          title="Нужно сделать"
        />
      </div>
      <div>
        <Column
          cardList={cards.filter((card) => card.taskStatus === 2)}
          title="В работе"
        />
      </div>
      <div>
        <Column
          cardList={cards.filter((card) => card.taskStatus === 3)}
          title="Тестирование"
        />
      </div>
      <div>
        <Column
          cardList={cards.filter((card) => card.taskStatus === 4)}
          title="Готово"
        />
      </div>
    </div>
  );
}
