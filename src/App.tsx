import { useState } from "react";
import InputSection from "./InputSection";
import Header from "./Header";
import TasksList from "./TasksList";

const initialList = [
  {
    id: 1,
    title: "Groceries",
    task: "Carrrots, Bread, Milk",
    date: "2024-12-12",
    time: "16:30",
    repeat: "never",
  },
];

export default function App() {
  const [lists, setLists] = useState(initialList);
  const [title, setTitle] = useState("");
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [repeat, setRepeat] = useState("");

  function handleSubmit(event: any) {
    event.preventDefault();
    if (!title || !task || !date || !time) alert("Fill all the fields!");
    else {
      console.log(title, task, date, time, repeat);
      setLists([
        ...lists,
        {
          id: lists.length + 1,
          title: title,
          task: task,
          date: date,
          time: time,
          repeat: repeat,
        },
      ]);
      setTitle("");
      setTask("");
      setDate("");
      setTime("");
      setRepeat("");
    }
  }

  function handleRemoveTask(id: any) {
    setLists(lists.filter((list: any) => list.id != id));
  }

  return (
    <div className="app">
      <Header />
      <InputSection
        handleSubmit={handleSubmit}
        title={title}
        setTitle={setTitle}
        task={task}
        setTask={setTask}
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}
        repeat={repeat}
        setRepeat={setRepeat}
      />
      <TasksList lists={lists} removeTask={handleRemoveTask} />
    </div>
  );
}
