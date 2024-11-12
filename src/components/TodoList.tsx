import React from 'react';
import { Todo } from '../App';

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className="space-y-2">
      {todos.map(todo => (
        <li
          key={todo.id}
          className="flex items-center justify-between p-2 border border-gray-200 rounded-lg"
        >
          <span
            onClick={() => toggleTodo(todo.id)}
            className={`${
              todo.completed ? 'line-through text-gray-500' : ''
            } cursor-pointer`}
          >
            {todo.text}
          </span>
          <button
            onClick={() => deleteTodo(todo.id)}
            className="text-red-500 hover:text-red-600"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
