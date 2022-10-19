import { useEffect, useState } from 'react';
import axios from 'axios';

const List = ({ ContentList, setContentList, Content, setContent }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    let body = {
      text: 'Hello from clint',
    };

    axios
      .post('/api/post/submit', body)
      .then((res) => {
        console.log(res);
        setText(res.data.text);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(Content);
  console.log(ContentList);

  return (
    <div>
      <h1>List</h1>
      <h3>{text}</h3>
      {ContentList.map((content, idx) => {
        return <div key={idx}>내용:{content}</div>;
      })}
    </div>
  );
};

export default List;
