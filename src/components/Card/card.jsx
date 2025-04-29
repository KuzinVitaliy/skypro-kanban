import "./card.css";
import "./calendar.svg";
export function Card({ cardInfo }) {
  let taskTypeStyle = "";
  switch (cardInfo.taskType) {
    case 0:
      taskTypeStyle = "taskCard_type taskCard_type__design";
      break;
    case 1:
      taskTypeStyle = "taskCard_type taskCard_type__research";
      break;
    case 2:
      taskTypeStyle = "taskCard_type taskCard_type__copywriting";
      break;
  }
  //console.log(cardInfo.taskId);
  return (
    <div data-id={cardInfo.taskId} key={cardInfo.taskId} className="taskCard">
      <div className="taskCard_header">
        <div className={taskTypeStyle}>{taskTypeName(cardInfo.taskType)}</div>
        <div className="taskCard_action"></div>
      </div>
      <div className="taskCard_title">{cardInfo.taskName}</div>
      <div>
        <div className="taskCard_date">{cardInfo.taskDate}</div>
      </div>
    </div>
  );
}

function taskTypeName(taskType) {
  switch (taskType) {
    case 0:
      return "Web Design";
    case 1:
      return "Research";
    case 2:
      return "Copywriting";
  }
}
