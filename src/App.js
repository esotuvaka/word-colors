import './App.css';
import { useState } from 'react';

function App() {
	const [word, setWord] = useState('');
	const [color, setColor] = useState(() => '#000000');

	const wArray = word.split('');

	function algo() {
		let hArr = [];

		for (const value of wArray) {
			console.log(value.charCodeAt());

			if (value.charCodeAt() % 2 === 0) {
				const lastDigStr = String(value.charCodeAt()).slice(-1);
				const lastDigNum = Number(lastDigStr);

				console.log('% BY 2');
				hArr.push(lastDigNum.toString());
			} else if (value.charCodeAt() % 3 === 0) {
				const lastDigStr = String(value.charCodeAt()).slice(-1);
				const lastDigNum = Number(Math.round(lastDigStr / 2));

				console.log('% BY 3');
				hArr.push(lastDigNum.toString());
			} else if (value.charCodeAt() % 7 === 0) {
				const lastDigStr = String(value.charCodeAt()).slice(-1);
				const lastDigNum = Number(Math.floor(lastDigStr / 3));

				console.log('% BY 7');
				hArr.push(lastDigNum.toString());
			} else {
				let numFunc = (num) => Number(num);
				const valArr = Array.from(String(value.charCodeAt()), numFunc);
				let sum = 0;
				for (const i of valArr) {
					sum += i;
					sum = Math.round(sum % 5);
					sum = sum.toString();
				}
				console.log('AYOOOOOOOOOOOOOOOOOO ' + Math.round(sum * 3.6));
				hArr.push(sum);
			}
		}

		hArr.unshift('#');
		hArr = hArr.join('');

		return hArr;
	}

	const hexStr = algo(wArray);

	console.log('HEXSTR HERE ' + typeof hexStr + hexStr);
	console.log(color);

	return (
		<div className="h-screen flex justify-center items-center bg-white">
			<div className="flex flex-col">
				<input
					className="border-2 border-black py-2 px-2 rounded"
					value={word}
					onChange={(e) => setWord(e.target.value)}
				/>
				<div className="mt-8">HexStr is: {hexStr}</div>
				<button
					onClick={(e) => setColor(hexStr)}
					className="border-2 border-black mt-8 py-2 rounded"
				>
					Click Here!
				</button>
				<div className="flex justify-center items-center w-full">
					<div
						id="box"
						className="colorDiv"
						style={{ backgroundColor: color }}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
