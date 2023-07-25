import './App.css';
import { Routes, Route } from 'react-router-dom'
// pages
import Home from './pages/Home'
import NoPage from './pages/NoPage'
import FishList from './pages/fish_data/FishList'
import NookShopping from './pages/nook_shop/NookShopping'
import FishInfo from './pages/fish_data/FishInfo';
import BugList from './pages/insect_data/BugList';
import BugInfo from './pages/insect_data/BugInfo';
// import SeaCreature from './components/SeaCreature';
import SeaInfo from './pages/sea_creature_data/SeaInfo';
import SeaList from './pages/sea_creature_data/SeaList';
import HomePage from './components/HomePage';
// try
import images from './models/images'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/insect-list' element={<BugList />}/>
        <Route path='/insect-info' element={<BugInfo />}/>
        <Route path='/fish-list' element={<FishList />}/>
        <Route path='/fish-info' element={<FishInfo />}/>
        <Route path='/sea-creatures-list' element={<SeaList />}/>
        <Route path='/sea-creatures-info' element={<SeaInfo />}/>
        <Route path='/nook-shopping' element={<NookShopping />}/>
        <Route path='*' element={<NoPage />}/>
      </Routes>
    </div>
  );
}

export default App;
