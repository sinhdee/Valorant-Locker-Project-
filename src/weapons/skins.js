
const API_KEY = '6FE9FA2382CD9FC0';
const BASE_URL = ` https://valorant-api.com/v1/weapons/skins?key=${API_KEY}`;

const skins = async () => {
  
  const res = await fetch(BASE_URL);
  const data = await res.json();   
  
    const skinsArray = data.data;


  const mappedSkins = skinsArray.map(skin => ({
    displayName: skin.displayName,
    wallpaper: skin.displayIcon
  }));


  console.log(mappedSkins);
const skinsContainer = document.getElementById('skins-container')//getElementByID

//Create a for Each
mappedSkins.forEach(skin => {
    const card = document.createElement('div');
    card.cardList.add('skin-card');

const img =document.createElement('img');
img.src = skin.wallpaper
img.alt = skin.displayName

const name = document.createElement('weapon-name')
name.textContent = skin.displayName
})


//Append the card to the container
};

skins();
export { skins };