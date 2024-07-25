import { useState } from "react";

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

function Card(props: any) {
  return (
    <div className="card">
      <li>
        {props.item.id} <br />
        {props.item.title} <br />
        {props.item.task} <br />
        {props.item.date} <br />
        {props.item.time} <br />
        {props.item.repeat}
      </li>
    </div>
  );
}

function App() {
  const [lists, setLists] = useState(initialList);
  // const [id, setId] = useState(1);
  const [title, setTitle] = useState("");
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [repeat, setRepeat] = useState("");

  function handleSubmit(event: any) {
    event.preventDefault();
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
  }

  return (
    <div className="app">
      <div className="header">
        <h1>To-Do List</h1>
      </div>
      <div className="">
        <form onSubmit={handleSubmit} className="input-section">
          <input
            type="text"
            minLength={10}
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Task"
            inputMode="text"
            rows={1}
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <select value={repeat} onChange={(e) => setRepeat(e.target.value)}>
            <option value="never">Never</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
          <button>Add</button>
        </form>
      </div>
      <div className="cards-grid">
        <ul>
          {lists.map((i) => (
            <Card key={i.id} item={i} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
