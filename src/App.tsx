import { useState } from "react";

const lists = [
  ["one", "two", "three"],
  ["four", "five"],
  ["six", "seven", "eight", "nine"],
];

function Card(props: any) {
  return(
    <div className="card">
      {lists[props.index].map((item) => <li>{item}</li>)}
    </div>
  );
}


function App() {

  const [lists, setLists] = useState([]);
  const [title, setTitle] = useState('');
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
 
  function handleSubmit(event: any) {
    event.preventDefault();
    console.log(task, date, time);
    // setLists([[...lists], [task]);
    

  }

  return (
    <div className="app">
      <div className="header">
        <h1>To-Do List</h1>
      </div>
      <div className="input-seion">
        <form onSubmit={handleSubmit} className="input-section">
          <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
          <input type="text" placeholder="Task" value={task} onChange={(e) => setTask(e.target.value)} />
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
          <select name="" id="">
            <option value="">Never</option>
            <option value="">Daily</option>
            <option value="">Weekly</option>
            <option value="">Monthly</option>
            <option value="">Yearly</option>
          </select>
          <br />
          <button>Add</button>
        </form>
      </div>
      <div className="cards-grid">
        <ul>

        {lists.map((l) => <Card index={lists.indexOf(l)}/>)}
        </ul>
      </div>
    </div>
  )
}

export default App
