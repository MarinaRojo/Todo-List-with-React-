import React, { useState } from "react";
import TodoList from "./todoList.jsx";

let priority = "";
let task = "";
let countNormal = 0;
let countImportant = 0;
let countUrgent = 0;

const Home = () => {
	const [listTodo, setListTodo] = useState([]);
	const [newTodo, setNewTodo] = useState({});

	const printTodos = () => {
		return listTodo.map((todo, index) => (
			<TodoList
				key={index}
				todo={todo}
				id={index}
				deleteTodo={deleteTodo}
				modifyPriority={modifyPriority}
				setNewTodo={setNewTodo}
				newTodo={newTodo}
			/>
		));
	};

	const handleClick = () => {
		const newListTodo = [...listTodo, newTodo];
		setListTodo(newListTodo);
		if (newTodo.priority == "normal") {
			countNormal++;
		} else if (newTodo.priority == "importante") {
			countImportant++;
		} else {
			countUrgent++;
		}
	};

	const deleteTodo = (id) => {
		if (listTodo[id].priority == "normal") {
			countNormal--;
		} else if (listTodo[id].priority == "importante") {
			countImportant--;
		} else {
			countUrgent--;
		}

		const newList = listTodo.filter(function (todo, index) {
			return index != id;
		});

		setListTodo(newList);
	};

	const modifyPriority = (todo, oldPriority, newPriority, id) => {
		if (newPriority == "normal") {
			countNormal++;
		} else if (newPriority == "importante") {
			countImportant++;
		} else {
			countUrgent++;
		}
		if (oldPriority == "normal") {
			countNormal--;
		} else if (oldPriority == "importante") {
			countImportant--;
		} else {
			countUrgent--;
		}

		const newList = listTodo.filter(function (todo, index) {
			return index != id;
		});
		const newListTodo = [...newList, { todo: todo, priority: newPriority }];
		setListTodo(newListTodo);
	};

	return (
		<div>
			<div className="container col-8" style={{ background: "#AFFFC0" }}>
				<h1 className="text-center">Todo List de Marina Rojo</h1>
				<div className="input-group mt-3 w-75 m-auto">
					<input
						type="text"
						className="form-control w-50"
						placeholder="New todo"
						aria-label="New todo"
						onChange={(event) => {
							task = event.target.value;
							setNewTodo({ todo: task, priority: priority });
						}}
					/>
					<select
						className="form-select bg-light"
						aria-label="Priority"
						defaultValue="Select Priority"
						onChange={(event) => {
							priority = event.target.value;
							setNewTodo({ todo: task, priority: priority });
						}}>
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
						style={{ background: "#39FF63" }}
						onClick={handleClick}>
						Add
					</button>
				</div>
				<div className="w-75 m-auto mt-3">
					{!listTodo.length ? (
						<div class="alert alert-info border-2" role="alert">
							No hay tareas en la lista
						</div>
					) : (
						printTodos()
					)}
				</div>
				<div className="w-75 m-auto d-flex justify-content-evenly mt-4 mb-4">
					<span className="badge bg-warning rounded-pill col-1">
						{countImportant}
					</span>
					<span className="badge bg-success rounded-pill col-1">
						{countNormal}
					</span>
					<span className="badge bg-danger rounded-pill col-1">
						{countUrgent}
					</span>
				</div>
			</div>
		</div>
	);
};

export default Home;
