export default function TaskCard({ item, removeTask }: any) {
  return (
    <li className="card">
      <div className="card-heading">
        <button onClick={() => removeTask(item.id)}>❌</button>
        <h3>{item.title}</h3>
      </div>
      <div className="card-task">
        <p>{item.task}</p>
      </div>
      <div>
        <p className="card-timing">
          Reminder on {item.date} at {item.time}
        </p>
      </div>
      <div className="card-footer">
        <p>Repeats {item.repeat}</p>
      </div>
    </li>
  );
}
