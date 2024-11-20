import { useState } from "react";

const Inventory = ({inventoryWeapon, setInventoryWeapon}) => {
    const handleDeleteSkin =(index) => {
         setInventoryWeapon((prevInventory)=>prevInventory.filter((_, i) => i !== index));
      
    };
return (
    <div><h1>Inventory: Weapon Skins</h1>
    <div className="skin-card-container">
        
        <ul>
            {inventoryWeapon.map((weapon, index) => (
                <div key={index} className="skin-card">
                <img src={weapon.wallpaper} alt={weapon.displayName} className="skin-image" />
                <div className="weapon-name">{weapon.displayName}</div>
                <button className="bg-pink-500 p-2 rounded" onClick={() => handleDeleteSkin(index)}>Delete</button>
              </div>
            ))}
        </ul>
        </div>
    </div>
)
}

export default Inventory;
