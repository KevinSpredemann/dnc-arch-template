import './Button.css';
import Arrow from '../../assets/white-arrow.svg';

const Button = (props) => {
  return (
    <button className={`button ${props.style}`}>
      {props.children} {props.arrow ? <img src={Arrow} alt="Arrow" /> : null}
    </button>
  );
};

export default Button;