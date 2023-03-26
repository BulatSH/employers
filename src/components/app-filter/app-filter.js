import {Component} from "react";

import './app-filter.css';

class AppFilter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filter: 'all',
		}
	}

	onUpdateFilter = (e) => {
		const filterOption = e.currentTarget.getAttribute('data-filter');

		this.setState({filterOption});
		this.props.onUpdateFilter(filterOption);
	}

	render() {
		const buttonsData = [
			{name: 'all', label: 'Все сотрудники'},
			{name: 'for-promotion', label: 'Сотрудники на повышение'},
			{name: 'salary-over-thousand', label: 'З/п больше 1000$'},
		];

		const buttons = buttonsData.map(({name, label}) => {
			const active = this.props.filter === name;
			const extraClass = active ? 'btn-light' : 'btn-outline-light';

			return (
				<button
					className={`btn ${extraClass}`}
					type="button"
					key={name}
					data-filter={name}
					onClick={this.onUpdateFilter}
				>
					{label}
				</button>
			);
		})

		return (
			<div className="btn-group">
				{buttons}
			</div>
		);
	}
}

export default AppFilter;