import React from 'react';
import './lib/kickoff/kickoff-base.css';
import Spinner from './lib/kickoff/components/Spinner';
import Article from './lib/kickoff/components/Article';
import Button from './lib/kickoff/components/Button';
import Wrap from './lib/kickoff/components/Wrap';

export default (
  <Wrap>
    <Spinner />

    <Button
      type="primary"
      onClick={() => alert('clicked button')}
      title="Click for alert"
    />

    <Article>
      <h1>This is a big heading.</h1>
      <p>Pede cum deserunt ducimus <a href="#">hymenaeos gravida risus sodales</a> molestias repellendus nostrud ipsam, praesent nam temporibus praesent aspernatur turpis, ridiculus, condimentum? Nullam sed animi adipisci veniam. Iure sociosqu, <strong>possimus phasellus vehicula</strong>, amet erat eaque, veritatis ea lacus dolorum pharetra! Hic quas? Quis alias. Cillum habitasse. Nostrum semper? Metus ea, maecenas fames.</p>
      <h2>This is a smaller heading.</h2>
      <p>Egestas conubia velit senectus eligendi tortor nobis qui nostrud itaque mollitia. Iure ex incididunt varius quas mauris! Minima rhoncus magni! <em>Minus sit mollis cras, pariatur tortor dicta accusamus temporibus mauris nibh molestie</em>, sapiente pretium luctus! Mattis magnis purus assumenda dictum quis interdum atque! Cupiditate. Adipisicing, quisquam sem lobortis porta. Inventore.</p>
    </Article>

  </Wrap>
);
