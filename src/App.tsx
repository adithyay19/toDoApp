import { useState } from "react";

const lists = [
  ["one", "two", "three"],
  ["four", "five"],
  ["six", "seven", "eight", "nine"],
];

function Card(props: any) {
  return(
    <div className="card">
      {lists[props.index].map((item) => <h4>{item}</h4>)}
    </div>
  );
}


function App() {

  const [task, setTask] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
 
  function handleSubmit(event: any) {
    event.preventDefault();
    console.log(task, date, time);
    

  }

  return (
    <div>
      <div className="header">
        <h1>To-Do List</h1>
      </div>
      <div className="input-seion">
        <form onSubmit={handleSubmit} className="input-section">
          <input type="text" placeholder="Task" value={task} onChange={(e) => setTask(e.target.value)} />
          <input type="date" placeholder="Task" value={date} onChange={(e) => setDate(e.target.value)} />
          <input type="time" placeholder="Task" value={time} onChange={(e) => setTime(e.target.value)} />
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
