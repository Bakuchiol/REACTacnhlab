import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/fish_data/Home';
import NoPage from './pages/NoPage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='*' element={<NoPage />}/>
      </Routes>
      


    </div>
  );
}

export default App;
