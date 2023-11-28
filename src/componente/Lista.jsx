import React from 'react';
import { Items } from './Items';

export const Lista = ({
    todos,
    handleUpdateTodo,
    handleDeleteTodo,
    handleCompleteTodo,
}) => {
    return (
        <ul>
            {todos.map(todo => (
                <Items
                    key={todo.id}
                    todo={todo}
                    handleUpdateTodo={handleUpdateTodo}
                    handleDeleteTodo={handleDeleteTodo}
                    handleCompleteTodo={handleCompleteTodo}
                />
            ))}
        </ul>
    );
};