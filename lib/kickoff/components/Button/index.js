import React, { PropTypes } from 'react';
import style from './style.css';
import classnames from 'classnames';

function Button(props) : React.DOM {
  const buttonClassName = classnames(
    style[props.type], {
      [style.disabled]: props.disabled,
    }
  );


  return (
    <button
      className={buttonClassName}
      onClick={handleClick.bind(props)}
    >
      {props.children}
    </button>
  );
}

function handleClick(props, e) {
  if (!props.disabled && typeof props.onClick === 'function') {
    props.onClick(e);
  }
}

Button.propTypes = {
  type: PropTypes.oneOf([
    'primary',
    'default',
    'cancel',
  ]).isRequired,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'default',
};

export default Button;
