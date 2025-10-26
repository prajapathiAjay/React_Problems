// using all hooks
// 🧩 Ultimate Hooks Challenge — “Task Dashboard”
// 🎯 Goal

// Create a Task Dashboard that manages tasks, tracks stats, and remembers user preferences — using all 7 React hooks.

// 🧠 Requirements
// 1️⃣ Manage State (useState)

// Each task should have: { id, name, completed }

// Add new tasks using an input and “Add” button.

// Mark tasks as complete/incomplete.

// Delete tasks.

// 2️⃣ Handle Side Effects (useEffect)

// When the component loads:

// Load saved tasks from localStorage.

// Whenever tasks change:

// Save updated tasks back to localStorage.

// Log "Tasks updated" whenever the list changes.

// 3️⃣ Access Shared Theme (useContext)

// Use a Theme Context (light / dark).

// The theme affects background & text color.

// A “Toggle Theme” button switches modes globally.

// 4️⃣ DOM Ref & Persistent Value (useRef)

// Keep a ref for the task input box.

// When you click “Add Task,” automatically focus the input again.

// 5️⃣ Memoize Expensive Computations (useMemo)

// Show a “Task Stats” section that displays:

// Total tasks

// Completed tasks

// Pending tasks

// Memoize these calculations so they don’t re-run unnecessarily.

// 6️⃣ Memoize Functions (useCallback)

// Wrap your addTask, deleteTask, and toggleTask functions so they don’t re-create on every render.

// This will prevent re-renders in your memoized child components.

// 7️⃣ Complex State Management (useReducer)

// Manage theme state (light / dark) with useReducer instead of useState.

// The reducer handles two actions:

// "TOGGLE_THEME"

// "RESET_THEME"

// 🧩 Bonus Challenge

// Create a child component <TaskList /> that receives tasks and callback props (toggleTask, deleteTask)
// → Optimize it so it only re-renders when needed using React.memo.

// 💡 Expected UI Behavior

// User can add, delete, toggle tasks

// App remembers tasks (localStorage)

// Task count updates automatically

// Theme toggles (light/dark)

// Input auto-focuses after adding

// Functions and stats are optimized

// Everything stays smooth even with 100+ tasks 😎

import React, { useEffect, useState, useCallback } from "react";
import TodoList from "./TodoList";
import axios from "axios"

const Hook2 = () => {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);
const [apiData,setApiData]=useState(null)




  const fettchApi=async()=>{

try {
  const response=await axios.get("https://jsonplaceholder.typicode.com/users")
   
//  if(response){

// setApiData(response)

//  }
setApiData(response)


} catch (error) {
  console.log(error)
  
}


  }


    useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("list")) || [];
    setList(storedList);
    fettchApi()
  console.log("datas",apiData)
  }, []);
  // useCallback for handleSubmit
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());

      const item = { id:Date.now(),todoName: data.todoText, status: data.status };
      const newList = [...list, item];
      setList(newList);
      localStorage.setItem("list", JSON.stringify(newList));
      setInputValue(""); // optional: clear input after submit
    },
    [list] // dependencies: updates whenever list changes
  );

const handleDelete=(item)=>{
  const updatedData=list.filter((presentList)=>presentList.id!==item.id)
  // localStorage.clear()
  localStorage.setItem("list",JSON.stringify(updatedData))
  setList(updatedData)

}
useEffect(()=>{
console.log(apiData)
},[apiData])

  return (
    <div className="flex flex-col justify-center items-center w-[100vw] h-[100vh]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-4 bg-red-200  rounded-lg h-[50vh] w-[400px]"
      >
        <input
        name="ok"
        type="checkbox"
        
        />
        <input
          type="text"
          name="todoText"
          placeholder="Enter the Todo"
          className="w-[200px] h-10 bg-amber-100 rounded-full p-8"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <select name="status" className="bg-blue-100 w-[200px] h-10 p-1">
          <option value="">Select Options</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>

        <button
          type="submit"
          className="p-4 border border-red-600 bg-white text-red-950"
        >
          Add Todo
        </button>
      </form>

      <TodoList list={list} handleDelete={handleDelete} />
    </div>
  );
};

export default Hook2;
