import { getMappedSkins } from "../weapons/skins";
import React, { useState, useEffect} from "react";

const WeaponsVault =({handleAddSkin}) => {
    const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [skinsData, setSkinsData] = useState([]);

  useEffect(() => {
    const fetchAndMapSkins = async () => {
      try {
        const mappedSkins = await getMappedSkins();
        setSkinsData(mappedSkins);  
        setLoading(false);  
      } catch (err) {
        setError("Failed to fetch skins");
        setLoading(false);
      }
    };

    fetchAndMapSkins();  
  }, []);  

  return (
    <div>

    <h1>Weapons Skins Vault</h1>
    
     
    {loading && <p>Loading...</p>}
    
    {error && <p>{error}</p>}
    
    <div className="skin-card-container">
      {skinsData.length > 0 ? (
        skinsData.map((skin, index) => (
          <div key={index} className="skin-card">
            <img src={skin.wallpaper} alt={skin.displayName} className="skin-image" />
            <div className="weapon-name">{skin.displayName}</div>
            <button type="submit" className="add-button" onClick={ () => handleAddSkin(skin.displayName, skin.wallpaper)}>Add to Inventory</button>
          </div>
        ))
      ) : (
        <p>No skins available</p>
      )}
    </div>
        </div>
  )
}
   
export default WeaponsVault;
