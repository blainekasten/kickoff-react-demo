import React from 'react';
import style from './style.css';

function Wrap(props: object) : React.DOM {
  return (
    <div className={style.koWrap}>
      {props.children}
    </div>
  );
}

Wrap.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default Wrap;
