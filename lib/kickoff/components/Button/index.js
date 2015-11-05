import React, { PropTypes } from 'react';
import style from './style.css';

function Button(props) : React.DOM {
  return (
    <button
      className={style[props.type]}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf([
    'primary',
    'default',
    'cancel',
  ]).isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
