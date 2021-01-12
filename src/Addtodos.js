import React, { Component } from 'react';

class Addtodos extends Component {
	state = {
		content: ' '
	};
	changeHandler = (event) => {
		this.setState({
			content: event.target.value
		});
	};

	submitHandler = (e) => {
		e.preventDefault();
		this.props.listUpdater(this.state);
		this.setState({
			content: ''
		});
	};

	render() {
		return (
			<div>
				<form onSubmit={this.submitHandler}>
					<label>Add new todos: </label>
					<input type="text" onChange={this.changeHandler} value={this.state.content} />
				</form>
			</div>
		);
	}
}
export default Addtodos;
