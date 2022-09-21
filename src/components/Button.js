import './Button.css';

const Button = (props) => {
	const { rollDice } = props;

	return <button onClick={rollDice}>{props.tenzies ? 'New game' : 'Roll'}</button>;
};

export default Button;
