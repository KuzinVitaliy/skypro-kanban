import "./PopNewCard.css";
export function PopNewCard() {
    return(<></>)
  return (
    <div className="newCard">
      <div className="newCard_header">Создание задачи</div>
      <div className="newCard_main">
        <div className="newCard_input">
          <div>Название задачи</div>
          <dic>
            <Input:text className="newCard_inputName"></Input:text>
          </dic>
          <div>Описание задачи</div>
          <dic>
            <Input:text></Input:text>
          </dic>
        </div>
        <div className="newCard_calendar"></div>
      </div>
    </div>
  );
}
