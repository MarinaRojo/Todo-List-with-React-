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
					defaultValue={props.todo.priority}
					onChange={(event) =>
						props.modifyPriority(
							event.target.value,
							props.todo.todo,
							props.id
						)
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
