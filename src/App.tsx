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

  function removeTask() {
    setRemove(!remove);
  }

  return (
    <li className={remove === true ? "card hidden" : "card"}>
      
        <div className="card-heading">
          <button onClick={removeTask}>❌</button>
          <h3>{props.item.title}</h3>
        </div>
        <div className="card-task">
          <p>{props.item.task}</p>
        </div>
        <div>
          <p className="card-timing">
            Reminder on {props.item.date} at {props.item.time}
          </p>
        </div>
        <div className="card-footer">
          <p>Repeats {props.item.repeat}</p>
        </div>
      
    </li>
  );
}

function App() {
  const [lists, setLists] = useState(initialList);
  const [title, setTitle] = useState("");
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [repeat, setRepeat] = useState("");

  function handleSubmit(event: any) {
    event.preventDefault();
    if (title === "" || task === "" || date === "" || time === "")
      alert("Fill all the fields!");
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
      // setTitle("");
      // setTask("");
      // setDate("");
      // setTime("");
      // setRepeat("");
    }
  }

  return (
    <div className="app">
      <div className="header">
        <h1>To-Do List</h1>
      </div>

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
          defaultValue="Date"
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
        <button className="add-button" type="submit">
          Add
        </button>
      </form>

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
