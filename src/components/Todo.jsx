import { useState } from "react";
import { BsPlus, BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addTodo, updateSearchTerm } from "../redux/actions";
import FilterButtons from "./FilterButtons";
import TodoListItems from "./TodoListItems";

function Todo() {
  const dispatch = useDispatch();
  const [newTodoText, setNewTodoText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // ! HANDLING adding Todo Functionality
  const handleAddingTodoFunctionality = (text) => {
    dispatch(addTodo(text));
  };
  const handleAddToDoClick = () => {
    if (newTodoText.trim() !== "") {
      handleAddingTodoFunctionality(newTodoText.trim());
      setNewTodoText("");
    }
  };
  // ! HANDLING search term bar Functionality
  const handleSearchBarChange = (value) => {
    setSearchTerm(value);
    dispatch(updateSearchTerm(value));
  };
  return (
    <div
      className="max-w-4xl mx-auto 
        sm:mt-8 p-4 bg-gray-100 rounded"
    >
      <h2 className="mt-3 mb-6 text-2xl font-bold text-center uppercase">
        My Personal Todo List
      </h2>
      {/*  input and btn for add TODOs */}
      <div className="flex items-center mb-4">
        <input
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          type="text"
          name="addTodoInput"
          id="addTodoInput"
          placeholder="Add Todo"
          className="flex-grow p-2 border-b-2 border-gray-300 
                focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleAddToDoClick}
          className="ml-4 p-2 bg-blue-500
                text-white rounded hover:bg-blue-700 
                focus:outline-none"
        >
          <BsPlus />
        </button>
      </div>
      {/*  Filter and Search Bar*/}
      <div className="flex items-center justify-between">
        <FilterButtons />
        <div className="flex items-center mb-4">
          <input
            value={searchTerm}
            onChange={(e) => handleSearchBarChange(e.target.value)}
            type="text"
            name="searchTermInput"
            id="searchTermInput"
            placeholder="Search"
            className="flex-grow p-2 border-b-2 border-gray-300 
                focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={handleAddToDoClick}
            className="ml-4 p-2 bg-blue-500
                text-white rounded hover:bg-blue-700 
                focus:outline-none"
          >
            <BsSearch />
          </button>
        </div>
      </div>
      {/* List of TODOs I Have */}
      <TodoListItems />
    </div>
  );
}

export default Todo;
