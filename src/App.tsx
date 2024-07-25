import { useState } from "react";


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
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Task" value={task} onChange={(e) => setTask(e.target.value)} />
          <input type="date" placeholder="Task" value={date} onChange={(e) => setDate(e.target.value)} />
          <input type="time" placeholder="Task" value={time} onChange={(e) => setTime(e.target.value)} />
          <button>Add</button>
        </form>
      </div>
    </div>
  )
}

export default App
