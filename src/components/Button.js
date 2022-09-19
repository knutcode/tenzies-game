import './Button.css';

const Button = (props) => {
	const { rollDice } = props;

	return <button onClick={rollDice}>Roll</button>;
};

export default Button;
