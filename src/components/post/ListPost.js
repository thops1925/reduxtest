import React from 'react';
import { useGetAllPostQuery } from '../../redux/query';
// import { useDispatch, useSelector } from 'react-redux';
// import { deleteAPI, getAPI } from '../../redux/slice';
import Item from './itemPost/Item';

function ListPost() {
  // const dispatch = useDispatch();
  // const post = useSelector((state) => state.post);
  // console.log(post);

  // useEffect(() => {
  //   dispatch(getAPI());
  // }, [dispatch]);

  // const removed = (del) => {
  //   dispatch(deleteAPI({ del }));
  // };

  const { data, errors, isLoading } = useGetAllPostQuery();
  console.log(data);

  return (
    <div className="w-1/3 space-y-2">
      {isLoading ? (
        <p>loading...</p>
      ) : errors ? (
        <p>error</p>
      ) : (
        <>
          {data.map((item) => (
            <Item
              id={item.id}
              title={item.title}
              tags={item.tags}
              message={item.message}
              creator={item.creator}
              image={item.selectedFile}
              // remove={removed}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default ListPost;
