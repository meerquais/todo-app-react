import { useState } from "react";

import Header from "./Componenets/Header/Header";
import Button from "./Componenets/Button/Button";

function App() {
  const [todoValue, setTodoValue] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todoValue.trim() !== "") {
      setTodos([...todos, todoValue]);
      setTodoValue("");
    } else {
      alert("Please Enter Value!!");
    }
  };

  const deleteAllTodo = () => {
    setTodos([]);
  };

  const editTodo = (index) => {
    const updatedTodos = [...todos];
    const editedTodo = prompt("Edit todo:", updatedTodos[index]);
    if (editedTodo !== null) {
      updatedTodos[index] = editedTodo;
      setTodos(updatedTodos);
    }
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <Header />

      <div className="flex justify-center items-center mt-5 flex-col">
        <div className="w-[70%]">
          <input
            type="text"
            placeholder="ENTER YOUR NAME"
            className="border w-full rounded-lg p-3 outline-none border-gray-600"
            id="todoInput"
            value={todoValue}
            onChange={(e) => {
              setTodoValue(e.target.value);
            }}
          />
        </div>

        <div className="flex mt-10">
          <Button title="Add todo" clickTrigger={addTodo} />
          <Button
            title="Delete All"
            clickTrigger={deleteAllTodo}
            customClass="bg-red-500"
          />
        </div>
      </div>

      <div className="w-[70%] mx-auto mt-5">
        <ul>
          {todos.map((todo, index) => {
            return (
              <li
                key={index}
                className="text-xl p-3 border rounded-lg flex justify-between items-center"
              >
                {todo}
                <div>
                  <Button title="EDIT" clickTrigger={() => editTodo(index)} />
                  <Button
                    title="Delete"
                    clickTrigger={() => deleteTodo(index)}
                    customClass="bg-red-500"
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
