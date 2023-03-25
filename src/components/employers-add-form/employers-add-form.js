import {Component} from "react";

import './employers-add-form.css';

class EmployersAddForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			salary: '',
		}
	}

	onValueChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	}

	formationObject = () => {
		return {
			name: this.state.name,
			salary: this.state.salary,
			increase: false,
			rise: false,
			id: Math.floor(Math.random() * 100) + 1,
		}
	}

	render() {
		const { onAdd } = this.props;
		const { name, salary } = this.state;

		return (
			<div className="app-add-form">
				<h3>Добавьте нового сотрудника</h3>
				<form className="add-form d-flex">
					<input
						type="text"
						className="form-control new-post-label"
						placeholder="Как его зовут?"
						name="name"
						value={name}
						onChange={this.onValueChange}
					/>
					<input
						type="number"
						className="form-control new-post-label"
						placeholder="З/п в $?"
						name="salary"
						value={salary}
						onChange={this.onValueChange}
					/>

					<button
						type="submit"
						className="btn btn-outline-light"
						onClick={(e) => onAdd(e, this.formationObject())}
					>
						Добавить
					</button>
				</form>
			</div>
		);
	}
}

export default EmployersAddForm;