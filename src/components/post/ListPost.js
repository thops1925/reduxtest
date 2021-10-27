import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAPI, getAPI } from '../../redux/slice';
import Item from './itemPost/Item';

function ListPost() {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);
  console.log(post);

  useEffect(() => {
    dispatch(getAPI());
  }, [dispatch]);

  const removed = (id) => {
    dispatch(deleteAPI({ id }));
  };

  return (
    <div className="w-1/3 space-y-2">
      {post.map((item) => (
        <Item
          title={item.title}
          tags={item.tags}
          message={item.message}
          id={item._id}
          creator={item.creator}
          image={item.selectedFile}
          remove={removed}
        />
      ))}
    </div>
  );
}

export default ListPost;
