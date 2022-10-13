import { useState } from 'react';

const Upload = ({ contentList, setContentList, content, setContent }) => {
  const onSubmit = () => {
    let tempArr = [...contentList];
    tempArr.push(content);
    setContentList([...tempArr]);
    setContent('');
  };

  console.log(content);
  console.log(contentList);

  return (
    <div>
      <input
        type='text'
        value={content}
        onChange={(e) => {
          setContent(e.currentTarget.value);
        }}
      />
      <button
        onClick={() => {
          onSubmit();
        }}
      >
        제출
      </button>
    </div>
  );
};

export default Upload;
