
import './App.css';
import Grids from './components/Grids';
import ReadMore from './components/ReadMore';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Grids />} />
      <Route path='/:id' element={<ReadMore />} />
    </Routes>
  );
}

export default App;
