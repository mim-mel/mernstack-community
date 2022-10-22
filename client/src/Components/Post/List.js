import { useEffect, useState } from 'react';
import axios from 'axios';

import { ListDiv, ListItem } from '../../Style/ListCSS';

const List = ({ ContentList, setContentList, Content, setContent }) => {
  const [PostList, setPostList] = useState([]);

  useEffect(() => {
    axios
      .post('/api/post/list')
      .then((response) => {
        if (response.data.success) {
          setPostList([...response.data.postList]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <ListDiv>
      {PostList.map((postList) => {
        return (
          <div key={postList._id}>
            <ListItem>
              <p className='title'>{postList.title}</p>
              <p>{postList.content}</p>
            </ListItem>
          </div>
        );
      })}
    </ListDiv>
  );
};

export default List;
