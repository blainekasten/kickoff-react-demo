
import React, { PropTypes } from 'react';
import style from './style.css';

function ButtonGroup(props) : React.DOM {
  return (
    <div className={style.buttonGroup}>
      {props.children}
    </div>
  );
}

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ButtonGroup;
