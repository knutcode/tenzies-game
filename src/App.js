import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import Dice from './components/Dice';
import Button from './components/Button';
import Confetti from 'react-confetti';

const App = () => {
	const [dice, setDice] = useState(allNewDice());
	const [tenzies, setTenzies] = useState(false);

	useEffect(() => {
		const firstValue = dice[0].value;
		const allSameValue = dice.every((die) => die.value === firstValue);
		const allHeld = dice.every((die) => die.isHeld);
		if (allHeld && allSameValue) {
			setTenzies(true);
			console.log("You've won!");
		}
	}, [tenzies, dice]);

	function allNewDice() {
		const newDice = [];
		for (let i = 0; i < 10; i++) {
			newDice.push(generateNewDie());
		}
		return newDice;
	}

	function generateNewDie() {
		return {
			value: Math.ceil(Math.random() * 6),
			isHeld: false,
			id: nanoid(),
		};
	}

	function rollDice() {
		if (tenzies === false) {
			setDice((oldDice) =>
				oldDice.map((die) => {
					return die.isHeld ? die : generateNewDie();
				})
			);
		} else {
			setTenzies(false);
			setDice(allNewDice());
		}
	}

	function holdDice(id) {
		setDice((oldDice) =>
			oldDice.map((die) => {
				return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
			})
		);
	}

	const diceElements = dice.map((die) => (
		<Dice
			value={die.value}
			key={die.id}
			isHeld={die.isHeld}
			id={die.id}
			holdDice={() => holdDice(die.id)}
		/>
	));

	return (
		<>
			{tenzies && <Confetti />}
			<main>
				<h1 className="bold">Tenzies</h1>
				<p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
				<div className="dice--wrapper">{diceElements}</div>
				<Button
					rollDice={rollDice}
					tenzies={tenzies}
				/>
			</main>
		</>
	);
};

export default App;
