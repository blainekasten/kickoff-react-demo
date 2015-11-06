import React from 'react';
import style from './style.css';

function Article(props: object) : React.DOM {
  return (
    <div className={style.koArticle}>
      {props.children}
    </div>
  );
}

Article.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default Article;
