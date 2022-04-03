// This class acts as a wrapper for the box surrounding
// the Expenses component.
import './Card.css';

const Card = (props) => {
  const classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>
};

export default Card;
