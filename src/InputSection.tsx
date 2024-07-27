export default function InputSection(props: any) {
  return (
    <form onSubmit={props.handleSubmit} className="input-section">
      <input
        type="text"
        placeholder="Title"
        value={props.title}
        onChange={(e) => props.setTitle(e.target.value)}
      />
      <textarea
        placeholder="Task"
        inputMode="text"
        rows={1}
        value={props.task}
        onChange={(e) => props.setTask(e.target.value)}
      />
      <input
        type="date"
        value={props.date}
        onChange={(e) => props.setDate(e.target.value)}
      />
      <input
        type="time"
        value={props.time}
        onChange={(e) => props.setTime(e.target.value)}
      />
      <select
        value={props.repeat}
        onChange={(e) => props.setRepeat(e.target.value)}
      >
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
  );
}
