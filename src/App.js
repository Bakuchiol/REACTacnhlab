import './App.css';
import { Routes, Route } from 'react-router-dom'
// pages
import Home from './pages/Home'
import NoPage from './pages/NoPage'
import FishList from './pages/fish_data/FishList'
import NookShopping from './pages/NookShopping'
import FishInfo from './pages/fish_data/FishInfo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/fish-list' element={<FishList />}/>
        <Route path='/fish-info' element={<FishInfo />}/>
        <Route path='/nook-shopping' element={<NookShopping />}/>
        <Route path='*' element={<NoPage />}/>
      </Routes>
      


    </div>
  );
}

export default App;
