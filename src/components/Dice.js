import './Dice.css';

const Dice = (props) => {
	return (
		<div
			className="dice"
			style={props.isHeld ? { backgroundColor: '#59E391' } : { backgroundColor: '#FFF' }}
			onClick={props.holdDice}
		>
			<h2 className="bold">{props.value}</h2>
		</div>
	);
};

export default Dice;
