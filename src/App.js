import { useState } from 'react';

function App(){
	const [calc, setCalc] = useState("");
	const [result, setResult] = useState("");

	const ops = ["+", "-", "*", "/", "."];
	const UpdateCalc = value => {
		if(
			ops.includes(value) && calc===''||
			ops.includes(value) && ops.includes(calc.slice(-1))
		){
			return;
		}
		setCalc(calc + value);
		if(!ops.includes(value)){
			setResult(eval(calc+value).toString());
		}

	}

	const createnumber = () => {
		const digits = [];
		for(let i = 1; i<10; i++) {
			digits.push(
				<button 
					onClick={()=> UpdateCalc(i.toString())} 
					key={i}>
					{i}
				</button>
			)

		};
		return digits
	}
	const calculate = () => {
		setCalc(eval(calc).toString());
	}
	const deli = () => {
		if (calc==""){
			return;
		}
		const value = calc.slice(-1, 0);
		setCalc(value);
	} 
	return (
		<div className="App">
			<div className="calculator">
				<div className="display">
					{result ? <span>({result})</span>: " "} 
					{calc || "0"}
				</div>
				<div className="operators">
					<button onClick={()=> UpdateCalc('+')}>+</button>
					<button onClick={()=> UpdateCalc('-')}>-</button>
					<button onClick={()=> UpdateCalc('*')}>*</button>
					<button onClick={()=> UpdateCalc('/')}>/</button>

					<button onClick={deli}>DEL</button>
					<div className="digits">
						{ createnumber() }
						<button onClick={()=> UpdateCalc('0')}>0</button>
						<button onClick={()=> UpdateCalc('.')}>.</button>

						<button onClick={()=>calculate()}>=</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
