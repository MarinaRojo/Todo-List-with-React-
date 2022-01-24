import React from "react";
import propTypes from "prop-types";

const TodoList = (props) => {
	return (
		<div>
			<li className="list-group-item d-flex">
				<p className="w-100 pt-3">{props.todo.todo}</p>
				<select
					className={
						props.todo.priority == "normal"
							? "form-select w-25 m-2 bg-success"
							: props.todo.priority == "importante"
							? "form-select w-25 m-2 bg-warning"
							: "form-select w-25 m-2 bg-danger"
					}
					aria-label="Priority"
					value={props.todo.priority}
					onChange={(e) => {
						let oldPriority = props.todo.priority;
						props.todo.priority = e.target.value;

						props.modifyPriority(
							props.todo.todo,
							oldPriority,
							props.todo.priority,
							props.id
						);
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
					className="btn-close btn-primary ml-3"
					type="button"
					onClick={() => props.deleteTodo(props.id)}></button>
			</li>
		</div>
	);
};

TodoList.propTypes = {
	id: propTypes.number,
	todo: propTypes.object,
	deleteTodo: propTypes.func,
	modifyPriority: propTypes.func,
};

export default TodoList;
