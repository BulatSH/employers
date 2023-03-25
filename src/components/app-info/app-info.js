import './app-info.css'

const AppInfo = ({ numberOfEmployers, numberOfIncreased }) => {

	return (
		<div className="app-info">
			<h1>
				Учет сотрудников в компании
			</h1>
			<h2>
				Общее число сотрудников: {numberOfEmployers}
			</h2>
			<h2>
				Премию получат: {numberOfIncreased}
			</h2>
		</div>
	);
}

export default AppInfo;