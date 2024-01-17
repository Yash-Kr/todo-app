import React from 'react'
import TodoListItem from './TodoListItem'

const TodoList = ({todos = [], onDelete = () => {}, onUpdate = () => {}}) => {

  console.log(todos);
  return (
    <div className='w-full mt-10 font-body flex flex-col gap-8 border-2 border-gray-400 shadow-sm p-2 max-h-[50vh] overflow-scroll'>
         {todos.length === 0 && <div className='p-2 text-red-500'>No Todos</div>}
         {todos.map((todo, index) =>   <TodoListItem onDelete={onDelete} onUpdate={() => onUpdate(todos[index])} key={todo.id} id={todo.id} title={todo.title} description={todo.description}/>)}
    </div>
  )
}

export default TodoList