import React, { useState } from "react";
import TodoList from "./todoList.jsx";

const Home = () => {
	const [listTodo, setListTodo] = useState([]);
	const [newTodo, setNewTodo] = useState({
		todo: "",
		priority: "",
	});
	const [countImportant, setCountImportant] = useState(0);
	const [countNormal, setCountNormal] = useState(0);
	const [countUrgent, setCountUrgent] = useState(0);

	const handleClick = () => {
		const newListTodo = [...listTodo, newTodo];

		setListTodo(newListTodo);
	};

	const deleteTodo = (id) => {
		setListTodo(
			listTodo.filter(function (todo, index) {
				return index != id;
			})
		);
	};

	const printTodos = () => {
		return listTodo.map((todo, index) => (
			<TodoList
				key={index}
				todo={todo}
				id={index}
				deleteTodo={deleteTodo}
				modifyPriority={modifyPriority}
			/>
		));
	};

	const modifyPriority = (priority, todo, id) => {
		console.log(priority + todo + id);
	};

	let task = "";
	return (
		<div>
			<div className="container col-8">
				<h1 className="text-center">Todo List</h1>
				<div className="input-group mt-3">
					<input
						type="text"
						className="form-control"
						placeholder="New todo"
						aria-label="New todo"
						onChange={(event) => {
							task = event.target.value;
						}}
					/>
					<select
						className="form-select bg-light"
						aria-label="Priority"
						defaultValue="Select Priority"
						onChange={(event) =>
							setNewTodo({
								todo: task,
								priority: event.target.value,
							})
						}>
						<option>Select priority</option>
						<option value="normal" className="bg-success">
							Normal
						</option>
						<option value="urgente" className="bg-danger">
							Urgente
						</option>
						<option value="importante" className="bg-warning">
							Importante
						</option>
					</select>
					<button
						className="btn btn-outline-secondary"
						type="button"
						id="button-addon2"
						onClick={handleClick}>
						Add
					</button>
				</div>
				<div>{!listTodo.length ? "No hay TODOS" : printTodos()}</div>

				<span className="badge bg-primary rounded-pill">
					{countImportant}
				</span>
				<span className="badge bg-primary rounded-pill">
					{countNormal}
				</span>
				<span className="badge bg-primary rounded-pill">
					{countUrgent}
				</span>
			</div>
		</div>
	);
};

export default Home;
