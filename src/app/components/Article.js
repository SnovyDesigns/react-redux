import React from 'react';
import '../../css/Article.css';

const Article = () => {
  return (
    <div className="media mt-3">
      <img
        className="align-self-start mr-3"
        src="https://images.unsplash.com/photo-1508997449629-303059a039c0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=af90f024facc8921c9bf854da77f222a&auto=format&fit=crop&w=1500&q=80"
        alt="Conference"
      />
      <div className="media-body">
        <h3 className="mt-0 mb-2">Sample article</h3>
        <h6>February 24th 2018 - Posted by Sample Author</h6>
        <p>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
          scelerisque ante sollicitudin. Cras purus odio, vestibulum in
          vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
          vulputate fringilla. Donec lacinia congue felis in faucibus.
        </p>
        <p>
          Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
          leo. Cum sociis natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus.
        </p>
      </div>
    </div>
  );
};

export default Article;
