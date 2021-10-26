import React from 'react';

function Item({ creator, tags, message, title, id, image }) {
  return (
    <div key={id} className="bg-blue-300">
      <div>{title}</div>
      <div>{creator}</div>
      <div>{message}</div>
      <div>{tags}</div>
      <img src={image} alt="" />
    </div>
  );
}

export default Item;
