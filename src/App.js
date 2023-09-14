import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Chart from './components/Chart/Chart';
import Map from './components/Map/Map';
import ManageUsers from './components/ManageUsers/ManageUsers';
import Preferences from './components/Preferences/preferences';
import Login from './components/Login/Login';


function App() {
  return <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/charts' element={<Chart/>}></Route>
      <Route path='/map' element={<Map/>}></Route>
      <Route path='/manage_user' element={<ManageUsers/>}></Route>
      <Route path='/preferences' element={<Preferences/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
  </>
}

export default App;
