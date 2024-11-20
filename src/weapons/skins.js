// src/weapons/skins.js

const API_KEY = '6FE9FA2382CD9FC0';
const BASE_URL = `https://valorant-api.com/v1/weapons/skins?key=${API_KEY}`;

const fetchSkins = async () => {
  try {
    const res = await fetch(BASE_URL);
    const data = await res.json();
    return data.data;  
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch skins");
  }
};

const mappedSkins = (skins) => {
  return skins.map(skin => ({
    displayName: skin.displayName,
    wallpaper: skin.displayIcon, 
  }));
};


const getMappedSkins = async () => {
  const skins = await fetchSkins();  
  const mappedSkinsData = mappedSkins(skins);  

  return mappedSkinsData;  
};

export { fetchSkins};
export {BASE_URL};
export {mappedSkins};
export {getMappedSkins};