import './App.css';
import { useState } from 'react';

function App() {
	const [word, setWord] = useState('');
	const [color, setColor] = useState(() => '#000000');

	const wArray = word.split('');

	function Algo() {
		let hArr = [];

		//check whole array. If its length is less that 6 add spaces on the end

		for (const value of wArray) {
			console.log(value.charCodeAt());

			if (value.charCodeAt() % 2 === 0) {
				const lastDigStr = String(value.charCodeAt()).slice(-2);
				const lastDigNum = Number(lastDigStr % 6);

				console.log('% BY 2');
				if (hArr.length < 6) {
					hArr.push(lastDigNum.toString());
				}
			} else if (value.charCodeAt() % 3 === 0) {
				const lastDigStr = String(value.charCodeAt()).slice(-1);
				const lastDigNum = Number(Math.round(lastDigStr / 2));

				console.log('% BY 3');
				if (hArr.length < 6) {
					hArr.push(lastDigNum.toString());
				}
			} else if (value.charCodeAt() % 7 === 0) {
				const lastDigStr = String(value.charCodeAt()).slice(-1);
				const lastDigNum = Number(Math.floor(lastDigStr / 3));

				console.log('% BY 7');
				if (hArr.length < 6) {
					hArr.push(lastDigNum.toString());
				}
			} else {
				let numFunc = (num) => Number(num);
				const valArr = Array.from(String(value.charCodeAt()), numFunc);
				let sum = 0;
				for (const i of valArr) {
					sum += i;
					sum = Math.round(sum % 5);
					sum = sum.toString();
				}
				console.log('TESTING ' + Math.round(sum * 3.6));
				if (hArr.length < 6) {
					hArr.push(sum);
				}
			}
		}

		hArr.unshift('#');
		hArr = hArr.join('');
		console.log('hARR HERE ' + hArr);

		return hArr;
	}

	const hexStr = Algo(wArray);

	console.log('HEXSTR HERE ' + typeof hexStr + hexStr);

	return (
		<div
			id="box"
			className="h-screen flex justify-center items-center bg-white"
			style={{ backgroundColor: color, transition: 'all 1s ease' }}
		>
			<div className="flex flex-col bg-white p-4 rounded-3xl border-2 border-black">
				<h1 className="text-3xl mb-2 w-72 text-center">
					Enter a sentence, emotion, or idea!
				</h1>
				<input
					className="border-2 border-black py-2 px-2 rounded"
					value={word}
					onChange={(e) => {
						setWord(e.target.value);
					}}
				/>
				<h2 className="mt-8 text-2xl text-center">HexStr is: {hexStr}</h2>
				<button
					onClick={(e) => {
						setColor(hexStr);
					}}
					className="border-2 border-black bg-black text-white mt-8 py-2 rounded font-semibold tracking-wider text-xl"
				>
					Click For Color!
				</button>
				<div className="flex justify-center items-center w-full">
					<div
						id="box"
						className="colorDiv"
						style={{ backgroundColor: color, transition: 'all 1s ease' }}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
