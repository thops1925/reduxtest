import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postAPI } from '../../redux/slice';
import FileBase64 from 'react-file-base64';

function CreatePost() {
  const dispatch = useDispatch();
  const [updatePost, { isLoading }] = useEditPostMutation();

  const [value, setValue] = useState({
    title: '',
    creator: '',
    message: '',
    tags: '',
    selectedFile: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postAPI(value));
  };
  return (
    <div className="fixed top-0 right-32 mt-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col bg-gray-200 space-y-3 p-10"
      >
        <input
          placeholder="title"
          type="text"
          name="title"
          value={value.title}
          onChange={(e) => setValue({ ...value, title: e.target.value })}
          className="rounded-sm"
        />
        <input
          placeholder="Creator"
          type="text"
          name="Creator"
          value={value.creator}
          onChange={(e) => setValue({ ...value, creator: e.target.value })}
          className="rounded-sm"
        />
        <textarea
          placeholder="message"
          type="text"
          name="message"
          value={value.message}
          onChange={(e) => setValue({ ...value, message: e.target.value })}
          className="resize-none rounded-sm"
        />
        <input
          placeholder="Tags"
          type="text"
          value={value.tags}
          name="tags"
          onChange={(e) => setValue({ ...value, tags: e.target.value })}
          className="rounded-sm"
        />
        <div>
          <FileBase64
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setValue({ ...value, selectedFile: base64 })
            }
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-blue-50 h-9 rounded-sm"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
