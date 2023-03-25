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
			]
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
		// this.setState(({data}) => {
		// 	const index = data.findIndex(elem => elem.id === id);
		//
		// 	const old = data[index];
		// 	const newItem = {...old, increase: !old.increase};
		// 	const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
		//
		// 	return {
		// 		data: newArr
		// 	}
		// })

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

	render() {
		const numberOfEmployers = this.state.data.length;
		const numberOfIncreased = this.state.data.filter(item => item.increase).length;

		return (
			<div className="app">
				<AppInfo
					numberOfEmployers={numberOfEmployers}
					numberOfIncreased={numberOfIncreased}/>

				<div className="search-panel">
					<SearchPanel />
					<AppFilter />
				</div>

				<EmployersList
					data={this.state.data}
					onDelete={this.deleteItem}
					onToggleProp={this.onToggleProp}
				/>
				<EmployersAddForm onAdd={this.addItem} />
			</div>
		);
	}
}

export default App;