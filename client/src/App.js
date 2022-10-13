import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import List from './Components/List';
import Upload from './Components/Upload';
import Heading from './Components/Heading';

function App() {
  const [content, setContent] = useState('');
  const [contentList, setContentList] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Heading />} />
        <Route
          path='/upload'
          element={
            <Upload
              contentList={contentList}
              setContentList={setContentList}
              content={content}
              setContent={setContent}
            />
          }
        />
        <Route
          path='/list'
          element={
            <List
              contentList={contentList}
              setContentList={setContentList}
              content={content}
              setContent={setContent}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
