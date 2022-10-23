import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import List from './Components/Post/List';
import Upload from './Components/Post/Upload';
import Layout from './Components/Layout';
import Detail from './Components/Post/Detail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/list' element={<List />} />
          <Route path='/upload' element={<Upload />} />
          <Route path='/post/:postNum' element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
