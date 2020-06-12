import React, { Component } from 'react'

class AddForm extends Component {
	state = {
		content: '',
		done: false,
	}

	handleSubmit = e => {
		e.preventDefault()
		this.props.addTodo(this.state)
		this.setState(() => ({
			content: '',
		}))
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>Add new todo: </label>
					<input
						type='text'
						value={this.state.content}
						onChange={e =>
							this.setState({
								content: e.target.value,
							})
						}
					/>
				</form>
			</div>
		)
	}
}

export default AddForm
