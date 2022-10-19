import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import List from './Components/Post/List';
import Upload from './Components/Post/Upload';
import Layout from './Components/Layout';

function App() {
  const [Content, setContent] = useState('');
  const [ContentList, setContentList] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route
            path='/'
            element={
              <List ContentList={ContentList} setContentList={setContentList} />
            }
          />
          <Route
            path='/upload'
            element={
              <Upload
                contentList={ContentList}
                setContentList={setContentList}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
