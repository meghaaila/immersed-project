import logo from './logo.svg';
import './App.scss';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CurrentInformation from "./components/CurrentInformation/CurrentInformation";
import Container from "./components/Container/Container";
import React, { useState } from 'react';
import axios from "axios";
function App() {
  const [role, setRole] = useState('admin');
  const [allRoles, getAllRoles] = useState({});

  async function getData() {
    await axios.get('./data/data.json')
    .then((res)=> {
      getAllRoles(res.data.roles);

    }).catch((err)=>{
      console.log(err);
    })
  }
  getData();

  return allRoles.length >0 ? (
    <div className="App">
      <Header onClickCallBack={(val) => setRole(val.value)} roles ={allRoles}/>
      <div className={role === "admin"? '' : 'hidden'}><CurrentInformation /> </div>
      <Container />
      <Footer />
    </div>
  ): <div/>;
}

export default App;
