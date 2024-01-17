import React from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

const TodoListItem = ({id, title, description, onDelete = () => {}, onUpdate = () => {}}) => {
  return (
    <div className="py-2 px-4 flex flex-col gap-2 md:flex-row items-center justify-between font-body gradient-light-bg-02 rounded-lg shadow-md">
      <div className="basis-[60%] w-full md:w-auto">
        <div className="text-base md:text-xl text-black font-bold">{title}</div>
        <div className="text-sm md:text-base text-[#444444]">{description}</div>
      </div>
      <div className="flex flex-row w-full md:w-auto gap-4 font-bold">
        <span className="py-2 px-4 text-xs md:text-sm flex flex-row items-center bg-[#304D30] rounded-md cursor-pointer hover:shadow-xl active:scale-95" onClick={() => onUpdate()}>Edit &nbsp; <MdEdit className="inline-flex"/> </span>
        <span className="py-2 px-4 text-xs md:text-sm flex flex-row items-center bg-[#820300] rounded-md cursor-pointer hover:shadow-xl active:scale-95" onClick={() => onDelete({id})}>Delete &nbsp; <MdDelete className="inline-flex"/></span>
      </div>
    </div>
  );
};

export default TodoListItem;
