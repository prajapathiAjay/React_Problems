import React, { useMemo } from "react";
const TodoList = React.memo(({ list, handleDelete }) => {
  return (
    <div>
      <h1>Todo List</h1>
      {list.map((item, index) => (
        <div className="flex flex-col mb-4 w-[300px]" key={index}>
          <div className="flex justify-between border border-red-900 p-4">

            <span>{item.todoName}</span>
            <button onClick={() => handleDelete(item)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
});
export default TodoList;
