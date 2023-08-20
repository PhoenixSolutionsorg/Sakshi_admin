import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LightSideNav from './Components/LightSideNav/LightSideNav';
import Password from './Components/Password/Password'
import Register from './Components/Register/Register'
import Login from './Components/Login/Login'
import Home from './Components/Home/Home';
import LayOutStatic from './Components/StaticLayout/LayOutStatic';
function App() {
  return <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='lightStatic' element={<LayOutStatic/>}/>
      <Route path='sidenav' element={<LightSideNav/>}/>
      <Route path='/forgetPassWord' element={<Password/>} />
      <Route path='/register' element={<Register/>}/>
      <Route path={'/login'} element={<Login/>}/>
    </Routes>
  </>
}

export default App;
