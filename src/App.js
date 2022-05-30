import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart.js';
function App() {
	const data = [
		10,
		20,
		30,
		40,
		50,
		60,
		70,
		80,
		90,
		100,
		11,
		11,
		11,
		11,
		11,
		11,
		11,
		11,
		11,
		11,
		11,
		11,
		11,
		11,
		11,
		11
	];
	const data1 = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ];
	const color = '#42bcf5';
	return (
		<div>
			<Chart data={data} color={color} />
		</div>
	);
}

export default App;
