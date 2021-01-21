import logo from './logo.svg';
import './App.scss';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CurrentInformation from "./components/CurrentInformation/CurrentInformation";
import Container from "./components/Container/Container";
import React, { useState } from 'react';

function App() {
  const [role, setRole] = useState('admin');
  return (
    <div className="App">
      <Header onClickCallBack={(val) => setRole(val.value)}/>
      <div className={role === "admin"? '' : 'hidden'}><CurrentInformation /> </div>
      <Container />
      <Footer />
    </div>
  );
}

export default App;
