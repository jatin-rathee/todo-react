import React, { Component } from 'react'
import Todos from './Todos'
import AddForm from './AddForm'

class App extends Component {
	state = {
		todos: [],
	}

	componentDidMount() {
		const todos = JSON.parse(localStorage.getItem('todos'))
		if (todos) {
			this.setState({ todos })
		}
	}

	deleteTodo = id => {
		const todos = this.state.todos.filter(todo => todo.id !== id)
		localStorage.setItem('todos', JSON.stringify(todos))
		this.setState({
			todos,
		})
	}

	addTodo = todo => {
		todo.id = Math.random()
		let todos = [...this.state.todos, todo]
		localStorage.setItem('todos', JSON.stringify(todos))
		this.setState({
			todos,
		})
	}

	toggleTodo = id => {
		const { todos } = this.state
		const todo = todos.findIndex(todo => todo.id === id)
		todos[todo].done = !todos[todo].done
		localStorage.setItem('todos', JSON.stringify(todos))
		this.setState({
			todos,
		})
	}

	render() {
		return (
			<div className='todo-app container '>
				<h1 className='center blue-text'>Todo's</h1>
				<Todos
					todos={this.state.todos}
					deleteTodo={this.deleteTodo}
					toggleTodo={this.toggleTodo}
				/>
				<AddForm addTodo={this.addTodo} />
			</div>
		)
	}
}

export default App
