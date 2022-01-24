import React from "react";
import propTypes from "prop-types";

const TodoList = (props) => {
	return (
		<div>
			<li>
				{props.todo.todo}
				<button
					className="btn btn-primary"
					onClick={() => props.deleteTodo(props.id)}>
					Delete
				</button>
				<select
					className="form-select bg-light"
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
