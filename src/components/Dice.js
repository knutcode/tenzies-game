import './Dice.css';

const Dice = (props) => {
	return (
		<div className="dice">
			<h2 className="bold">{props.value}</h2>
		</div>
	);
};

export default Dice;
