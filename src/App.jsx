import './App.css';
import { Agregar } from './componente/Agregar';
import { Lista } from './componente/Lista';
import { useTodo } from './hooks/useTodo';

export  function App() {
	const {
		todos,
		todosCount,
		pendingTodosCount,
		handleNewTodo,
		handleDeleteTodo,
		handleCompleteTodo,
		handleUpdateTodo,
	} = useTodo();

	return (
		<>
			<div className='card-to-do'>
				<h1>Lista de tareas</h1>
				<div className='counter-todos'>
					<h3>
						N° Tareas: <span>{todosCount}</span>
					</h3>
					<h3>
						Pendientes: <span>{pendingTodosCount}</span>
					</h3>
				</div>

				<div className='add-todo'>
					<h3>Agregar Tarea</h3>
					<Agregar handleNewTodo={handleNewTodo} />
				</div>

				<Lista
					todos={todos}
					handleUpdateTodo={handleUpdateTodo}
					handleDeleteTodo={handleDeleteTodo}
					handleCompleteTodo={handleCompleteTodo}
				/>
			</div>
		</>
	);
}

