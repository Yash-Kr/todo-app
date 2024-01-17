import React, { useState, useRef } from "react";
import Status from "./Categories";
import TodoList from "./TodoList";
import { CATEGORY } from "../config/constants";
import { createTodoItem } from "../utilities";
import { RxCross2 } from "react-icons/rx";
import { FiPlus } from "react-icons/fi";
import _ from "lodash";

const TodoApp = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [formOpen, setFormOpen] = useState(false);
  const [selectedMenuCategory, setSelectedMenuCategory] = useState(CATEGORY.TODO);
  const [selectedFormCategory, setSelectedFormCategory] = useState(
    CATEGORY.TODO
  );
  const [updateId, setUpdateId] = useState(null);

  const [todos, setTodos] = useState([]);

  const handleCreateTodoItem = () => {
    const todo_item = createTodoItem({
      title: title,
      description: description,
      category: selectedFormCategory,
    });
    setTodos([...todos, todo_item]);
    setFormOpen(false);
    setTitle("");
    setDescription("");
    setSelectedMenuCategory(selectedFormCategory);
  };

  const resetForm = () => {
    setFormOpen(false);
    setUpdateId(null);
    setTitle("");
    setDescription("");
  }

  const handleUpdateTodoItem = () => {
    let new_todos = [...todos];
    const idx = new_todos.findIndex((todo_item) => todo_item.id === updateId);
    new_todos[idx].title = title;
    new_todos[idx].description = description;
    new_todos[idx].category = selectedFormCategory;
    setTodos(new_todos);
    resetForm();
    setSelectedMenuCategory(selectedFormCategory);
  };

  const handleFormCategoryChange = (new_category = CATEGORY.TODO) => {
    setSelectedFormCategory(new_category);
  };

  const handleCategoryChange = (new_category = CATEGORY.TODO) => {
    setSelectedMenuCategory(new_category);
  };

  const handleDeletion = ({ id = "" }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleUpdation = (todo_item = {}) => {
    console.log(todo_item);
    setFormOpen(true);
    setUpdateId(todo_item.id);
    setTitle(todo_item.title);
    setDescription(todo_item.description);
    setSelectedFormCategory(todo_item.category);
  };


  return (
    <>
      {formOpen && (
        <div className="w-[80%] md:w-[75%] xl:w-[50%] my-10 mx-auto flex flex-col gap-8 font-body  p-4 shadow-lg   rounded-lg bg-[#272727]">
          <div className="flex flex-col md:flex-row md:items-center">
            <label className="w-48 font-bold text-base md:text-lg">Title :</label>
            <input
              type="text"
              placeholder="max 20 characters"
              className="flex-1 p-2 text-black bg-gray-300 rounded-md font-bold"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="flex flex-col md:flex-row md:items-center">
            <label className="w-48 font-bold text-base md:text-lg">Description</label>
            <textarea
              type="text"
              className="flex-1 p-2 bg-gray-300 rounded-md text-black font-bold"
              placeholder="max 100 characters"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-0">
            <label className="w-48 font-bold text-base md:text-lg">Status</label>
            <Status
              selectedCategory={selectedFormCategory}
              onCategoryChange={handleFormCategoryChange}
            />
          </div>
          <div className="w-fit mt-6 mx-auto flex flex-row gap-8 items-center">
            <button
              onClick={() => updateId ? handleUpdateTodoItem() : handleCreateTodoItem()}
              className="px-4 py-2 text-sm rounded-full border-2 border-[#304D30]  shadow-lg active:scale-95"
            >
              <FiPlus className="inline-flex" /> {updateId ? 'Update' : 'Add'}
            </button>
            <button
              onClick={() => resetForm()}
              className="px-4 py-2 text-sm rounded-full border-2 border-[#820300] shadow-lg active:scale-95"
            >
              <RxCross2 className="inline-flex" /> Cancel
            </button>
          </div>
        </div>
      )}
      {!formOpen && (
        <div className="md:w-[75%] xl:w-[50%] mx-auto flex items-center justify-center my-20">
          {" "}
          <button
            className="px-4 py-2 text-sm rounded-full border-2 text-black border-[#596FB7] bg-[#F6ECA9] shadow-lg hover:scale-105 active:scale-95"
            onClick={() => setFormOpen(!formOpen)}
          >
            Add New Todo Item
          </button>{" "}
        </div>
      )}
      <div className="w-[90%] md:w-[75%] xl:w-[50%] mx-auto">
        <h1 className="p-2">
          Your Todo List : &nbsp;
          <br className="md:hidden"></br>
          <br className="md:hidden"></br>
          <Status
            selectedCategory={selectedMenuCategory}
            onCategoryChange={handleCategoryChange}
          />{" "}
        </h1>
        <TodoList
          todos={todos.filter((todo) => todo.category === selectedMenuCategory)}
          onDelete={handleDeletion}
          onUpdate={handleUpdation}
        />
      </div>
    </>
  );
};

export default TodoApp;
