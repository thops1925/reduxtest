import React from 'react';

function Item({ creator, tags, message, title, id, image, remove }) {
  const onDelete = () => {
    remove(id);
  };

  return (
    <div key={id} className="relative">
      <div className="">
        <div className=""></div>
        <div className="">
          <div>{title}</div>
          <div>{creator}</div>
          <div>{message}</div>
          <div>{tags}</div>
        </div>
      </div>
      <img src={image} alt="" className="object-fit" />
      <div className="z-20">
        <button className="" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Item;
