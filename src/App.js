import './App.css';
import { FaHome } from 'react-icons/fa';
import { TbArrowsLeftRight } from "react-icons/tb";
import { CiWallet } from "react-icons/ci";
import { PiClockClockwiseFill, PiSquaresFour } from "react-icons/pi";

import { BrowserRouter, Routes, Route, Navigate, NavLink } from 'react-router-dom';

import Home from './Home/Home';
import Transfer from './Transfer/Transfer';
import Services from './Services/Services';
import AddCard from './AddCard/AddCard';
import InputOutput from './InputOutput/InputOutput';
// import AppWrapper from './AppWrapper'; // Qo‘shilgan

function App() {
  return (
    <BrowserRouter>
      {/* <AppWrapper> */}
        <div className="App">
          <nav className='navBottom'>
            <NavLink style={{textDecoration: "none", color:"black", padding: "10px 0px"}} to="/" ><FaHome /><p>Asosiy</p></NavLink>
            <NavLink style={{textDecoration: "none", color:"black", padding: "10px 0px"}} to="/otkazma"><TbArrowsLeftRight /><p>O'tkazma</p></NavLink>
            <NavLink style={{textDecoration: "none", color:"black", padding: "10px 0px"}} to="/addCard" ><CiWallet /><p>Karta</p></NavLink>
            <NavLink style={{textDecoration: "none", color:"black", padding: "10px 0px"}} to="/servislar" ><PiSquaresFour /><p>Servislar</p></NavLink>
            <NavLink style={{textDecoration: "none", color:"black", padding: "10px 0px"}} to="/kirim-chiqim" ><PiClockClockwiseFill /><p>Kirim-chiqim</p></NavLink>
          </nav>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/otkazma' element={<Transfer />} />
            <Route path='/addCard' element={<AddCard />} />
            <Route path='/servislar' element={<Services />} />
            <Route path='/kirim-chiqim' element={<InputOutput />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      {/* </AppWrapper> */}
    </BrowserRouter>
  );
}

export default App;
