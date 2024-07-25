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
  const [remove, setRemove] = useState(false);
  const currentDate = new Date();
  const daysLeft = Math.abs(props.item.date.valueOf() - currentDate.valueOf());

  function removeTask() {
    setRemove(!remove);
    console.log(daysLeft);
  }

  return (
    <li className={remove === true ? "card hidden" : "card"}>
      <ul>
        <li className="card-heading">
          <button onClick={removeTask}>❌</button>
          <h3>{props.item.title}</h3>
        </li>
        <li className="card-task">
          <p>{props.item.task}</p>
        </li>
        <li>
          <p className="card-timing">
            Reminder on {props.item.date} at {props.item.time}
          </p>
        </li>
        <li className="card-footer">
        <p>Repeats {props.item.repeat}</p>
        </li>
      </ul>
    </li>
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
          <button className="add-button">Add</button>
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
