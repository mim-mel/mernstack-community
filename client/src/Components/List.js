import { useEffect, useState } from 'react';
import axios from 'axios';

const List = ({ contentList, setContentList, content, setContent }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    let body = {
      text: 'Hello from clint',
    };

    axios
      .post('/api/test', body)
      .then((res) => {
        console.log(res);
        setText(res.data.text);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(content);
  console.log(contentList);

  return (
    <div>
      <h1>List</h1>
      <h3>{text}</h3>
      {contentList.map((content, idx) => {
        return <div key={idx}>내용:{content}</div>;
      })}
    </div>
  );
};

export default List;
