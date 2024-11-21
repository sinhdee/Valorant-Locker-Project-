import { useState } from "react";

const Inventory = ({inventoryWeapon, setInventoryWeapon}) => {
    const handleDeleteSkin =(index) => {
         setInventoryWeapon((prevInventory)=>prevInventory.filter((_, i) => i !== index));
      
    };
return (
    <div><h1 className="flex justify-center text-white py-5 text-[30px] ">Inventory: Weapon Skins</h1>
    <div className="flex justify-center">
        
        <ul>
            {inventoryWeapon.map((weapon, index) => (
                <div key={index} className="skin-card">
                <img src={weapon.wallpaper} alt={weapon.displayName} className="skin-image" />
                <div className="weapon-name">{weapon.displayName}</div>
                <button className="bg-[#fffbf5] rounded px-2 py-1 text-sm" onClick={() => handleDeleteSkin(index)}>Delete</button>
              </div>
            ))}
        </ul>
        </div>
    </div>
)
}

export default Inventory;
