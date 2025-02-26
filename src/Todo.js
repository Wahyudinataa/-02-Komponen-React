import React, { useState } from "react";

// Komponen Anak: Menampilkan satu tugas dengan tombol hapus
const TodoItem = ({ task, onDelete }) => {
  return (
    <li className="bg-gray-100 p-2 rounded my-1 flex justify-between items-center">
      <span>{task}</span>
      <button 
        className="bg-red-500 text-white px-2 py-1 rounded"
        onClick={onDelete}
      >
        Hapus
      </button>
    </li>
  );
};

// Komponen Utama: TodoList
const TodoList = () => {
  const [tasks, setTasks] = useState("");
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Todo List</h2>
      <div className="flex gap-2 mb-4">
        <input 
          type="text" 
          className="border p-2 flex-1 rounded" 
          value={newTask} 
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Tambah tugas..."
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={addTask}>Tambah</button>
      </div>
      <ul>
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <TodoItem key={index} task={task} onDelete={() => deleteTask(index)} />
          ))
        ) : (
          <p className="text-gray-500">Tidak ada tugas</p>
        )}
      </ul>
    </div>
  );
};

export default TodoList;
