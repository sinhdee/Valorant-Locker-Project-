// src/App.jsx
import { useState } from "react";
import { skins } from "./weapons/skins";
import Navbar from "./components/NavBar";
import './App.css'


const App = () => {
  // const [weaponSkin, setWeaponSkin] = useState({})

  // const fetchData = async (uuid) => {
  //   const data = await skins.show(uuid)
  //   console.log('skins', data)

  //   // TODO: Parse the data to pull out only the properties we want 
  //   const newData = { 
  //     displayName: data.displayName,
  //     displayIcon: data.displayIcon,
  //   }
    
  //   console.log(newData)
  // }

  // fetchData()
  return (
    // <Navbar />,
    <skins/>
  );
}

export default App

