import { useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import Dice from './components/Dice';
import Button from './components/Button';

const App = () => {
	const [dice, setDice] = useState(allNewDice());

	function allNewDice() {
		const newDice = [];
		for (let i = 0; i < 10; i++) {
			newDice.push({
				value: Math.ceil(Math.random() * 6),
				isHeld: false,
				id: nanoid(),
			});
		}
		return newDice;
	}

	function rollDice() {
		setDice(allNewDice());
	}

	const diceElements = dice.map((die) => (
		<Dice
			value={die.value}
			key={die.id}
		/>
	));

	return (
		<main>
			<h1 className="bold">Tenzies</h1>
			<p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
			<div className="dice--wrapper">{diceElements}</div>
			<Button rollDice={rollDice} />
		</main>
	);
};

export default App;
