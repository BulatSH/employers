import {Component} from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmployersAddForm from "../employers-add-form/employers-add-form";

import './app.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
					name: "John C.",
					salary: 800,
					increase: false,
					rise: true,
					id: 1,
				},
				{
					name: "Alex M.",
					salary: 3000,
					increase: true,
					rise: false,
					id: 2,
				},
				{
					name: "Carl W.",
					salary: 5000,
					increase: false,
					rise: false,
					id: 3,
				},
			],
			term: '',
			filter: 'all',
		}
	}

	deleteItem = (id) => {
		this.setState(({data}) => {
			return {
				data: data.filter(item => item.id !== id)
			}
		});
	}

	addItem = (e, item) => {
		e.preventDefault();

		if (item.name.length > 3 && item.salary.length > 2) {
			this.setState(({data}) => {
				const arr = [...data, item]
				return {
					data: arr
				}
			});
		}
	}

	onToggleProp = (id, prop) => {
		this.setState(({data}) => ({
			data: data.map(item => {
				if (item.id === id) {
					return {
						...item, [prop]: !item[prop],
					}
				}

				return item;
			})
		}))
	}

	searchEmp = (items, term) => {
		if (term.length === 0) {
			return items;
		}

		return items.filter(item => {
			return item.name.indexOf(term) > -1;
		});
	}

	onUpdateSearch = (term) => {
		this.setState({term});
	}

	filterEmp = (items, filterOption) => {
		if (filterOption === 'all') return items;

		if (filterOption === 'for-promotion') {
			return items.filter(item => item.rise);
		}

		if (filterOption === 'salary-over-thousand') {
			return items.filter(items => items.salary > 1000);
		}
	}

	onUpdateFilter = (filterOption) => {
		this.setState({filter: filterOption})
	}

	render() {
		const {data, term, filter} = this.state;
		const numberOfEmployers = this.state.data.length;
		const numberOfIncreased = this.state.data.filter(item => item.increase).length;
		const visibleData = this.filterEmp(this.searchEmp(data, term), filter);

		return (
			<div className="app">
				<AppInfo
					numberOfEmployers={numberOfEmployers}
					numberOfIncreased={numberOfIncreased}/>

				<div className="search-panel">
					<SearchPanel
						onUpdateSearch={this.onUpdateSearch}
					/>
					<AppFilter
						filter={filter}
						onUpdateFilter={this.onUpdateFilter}
					/>
				</div>

				<EmployersList
					data={visibleData}
					onDelete={this.deleteItem}
					onToggleProp={this.onToggleProp}
				/>
				<EmployersAddForm onAdd={this.addItem} />
			</div>
		);
	}
}

export default App;