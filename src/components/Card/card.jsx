import {
  STaskCard_action,
  STaskCard_date,
  STaskCard_header,
  STaskCard_title,
  STaskCard_type,
} from "./scard.jsx";
import { TaskStatus, TaskType } from "../Commons.ts";

import "./calendar.svg";
export function Card({ cardInfo }) {
  let tt = cardInfo.taskType;
  //console.log(cardInfo.taskId);
  return (
    <div data-id={cardInfo.taskId} key={cardInfo.taskId} className="taskCard">
      <STaskCard_header>
        <STaskCard_type $type={tt}>
          {taskTypeName(cardInfo.taskType)}
        </STaskCard_type>
        <STaskCard_action></STaskCard_action>
      </STaskCard_header>
      <STaskCard_title>{cardInfo.taskName}</STaskCard_title>
      <div>
        <STaskCard_date> {cardInfo.taskDate} </STaskCard_date>
      </div>
    </div>
  );
}

function taskTypeName(taskType) {
  switch (taskType) {
    case TaskType.Design:
      return "Web Design";
    case TaskType.Research:
      return "Research";
    case TaskType.Copywriting:
      return "Copywriting";
  }
}
