import logo from './logo.svg';
import './App.css';
import First from './components/First';
import Nav from './components/Nav';
import StateBasics from './components/StateBasics';
import Hello from './components/Hello';
import Taple from './components/Taple';
import { Route, Routes } from 'react-router-dom';
import Apien from './components/Apien';


function App() {
  return (
  <div className="App">
    <Nav/>
 <Routes> 
   <Route path='/' element={<StateBasics/>}/>
   <Route path='/first' element={<First/>}/> 
   <Route path='/nav' element={<Nav/>}/>
   <Route path='/hello' element={<Hello/>}/>
   <Route path='/taple' element={<Taple/>}/>
   <Route path='/axios' element={<Apien/>}/>
 </Routes>
  </div>
  );
}

export default App;
