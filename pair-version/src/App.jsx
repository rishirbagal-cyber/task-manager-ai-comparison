import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

  const addTask = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput("");
    }
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div style={{ padding: "20px" }}>
      <h2>Task Manager</h2>

      <input
        type="text"
        placeholder="Add a task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={addTask}
      />

      <div style={{ marginTop: "10px" }}>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>

      <ul>
        {filteredTasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(index)}
            />
            {task.text}
          </li>
        ))}
      </ul>

      <p>Total Tasks: {tasks.length}</p>
    </div>
  );
}

export default App;
