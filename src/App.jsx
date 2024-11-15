
import Navbar from "./components/NavBar";
import WeaponsVault from "./components/WeaponsVault";
import './App.css';
import { Route, Routes } from "react-router-dom";
import Inventory from "./components/inventory";
import { useState } from "react";
import Home from "./components/home";

const App = () => {
  const [inventoryWeapon,setInventoryWeapon] = useState([]);

  const handleAddSkin = (displayName,wallpaper) => {
      const newSkin = {
          displayName,
          wallpaper,
      };
      setInventoryWeapon((prevInventory)=>[...prevInventory,newSkin]);
  };
  return (
    <div className="app">
      <Navbar />

<Routes>
<Route
          path="/WeaponsVault"
          element={<WeaponsVault handleAddSkin={handleAddSkin} />}
        />
</Routes>
<Routes>
      <Route
    path="/inventory"
    element={<Inventory inventoryWeapon={inventoryWeapon} setInventoryWeapon={setInventoryWeapon} />}
  />
  </Routes>
  <Routes>
      <Route
    path="/Home"
    element={<Home Home={Home} />}
  />
  </Routes>
    </div>
  );
};

export default App;
