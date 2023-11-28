import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { Actualizar } from './Actualizar';

export const Items = ({
	todo,
	handleUpdateTodo,
	handleDeleteTodo,
	handleCompleteTodo,
}) => {
	return (
		<li>
			<span onClick={() => handleCompleteTodo(todo.id)}>
				<label
					className={`container-done ${todo.done ? 'active' : ''}`}
				></label>
			</span>
			<Actualizar todo={todo} handleUpdateTodo={handleUpdateTodo} />
			<button
				className='btn-delete'
				onClick={() => handleDeleteTodo(todo.id)}
			>
				<FaTrash />
			</button>
		</li>
	);
};