import React from 'react'

const Todos = ({ todos, deleteTodo, toggleTodo }) => {
	const todoList = todos.length ? (
		todos.map(todo => (
			<div className='collection-item todo' key={todo.id}>
				<span
					onClick={() => toggleTodo(todo.id)}
					style={{ cursor: 'pointer' }}
				>
					{!todo.done ? (
						<span>{todo.content}</span>
					) : (
						<span style={{ textDecoration: 'line-through' }}>
							{todo.content}
						</span>
					)}
				</span>
				<span className='right' onClick={() => deleteTodo(todo.id)}>
					<svg
						className='delete-btn'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
						fill='black'
						width='18px'
						height='18px'
					>
						<path d='M0 0h24v24H0z' fill='none' />
						<path d='M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z' />
					</svg>
				</span>
			</div>
		))
	) : (
		<p className='center'>You have no todo's left, yay!</p>
	)

	return <div className='todos collection'>{todoList}</div>
}

export default Todos
