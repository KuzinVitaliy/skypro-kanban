import { TaskStatus, TaskType } from "./components/Commons.ts";

export let cards = [
  {
    taskId: 1,
    taskType: TaskType.Research,
    taskName: "Задача №1",
    taskDate: "01.02.2025",
    taskStatus: TaskStatus.Non,
  },
  {
    taskId: 2,
    taskType: TaskType.Design,
    taskName: "Задача №2",
    taskDate: "04.03.2025",
    taskStatus: TaskStatus.NeedDo,
  },
  {
    taskId: 3,
    taskType: TaskType.Copywriting,
    taskName: "Задача №3",
    taskDate: "04.02.2025",
    taskStatus: TaskStatus.Processing,
  },
  {
    taskId: 4,
    taskType: TaskType.Design,
    taskName: "Задача №4",
    taskDate: "10.02.2025",
    taskStatus: TaskStatus.Processing,
  },
  {
    taskId: 5,
    taskType: TaskType.Research,
    taskName: "Задача №5",
    taskDate: "11.02.2025",
    taskStatus: TaskStatus.Testing,
  },
  {
    taskId: 6,
    taskType: TaskType.Design,
    taskName: "Задача №6",
    taskDate: "03.03.2025",
    taskStatus: TaskStatus.Testing,
  },
  {
    taskId: 7,
    taskType: TaskType.Research,
    taskName: "Задача №7",
    taskDate: "01.02.2025",
    taskStatus: TaskStatus.Done,
  },
  {
    taskId: 8,
    taskType: TaskType.Copywriting,
    taskName: "Задача №8",
    taskDate: "01.02.2025",
    taskStatus: TaskStatus.Non,
  },

  {
    taskId: 9,
    taskType: TaskType.Design,
    taskName: "Задача №9",
    taskDate: "01.02.2025",
    taskStatus: TaskStatus.Done,
  },
];
