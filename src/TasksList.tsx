import TaskCard from "./TaskCard";

export default function TasksList({ lists, removeTask }: any) {
  return (
    <div className="cards-grid">
      <ul>
        {lists.map((item: any) => (
          <TaskCard key={item.id} item={item} removeTask={removeTask} />
        ))}
      </ul>
    </div>
  );
}
