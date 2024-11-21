import React from "react";
import AliceCarousel from "react-alice-carousel";

const bestskins = () => {
   const items =[
      <div key="elderflame" className="flex justifiy-content flex-col items-center py-4">
   <h2 className="flex justify-center text-red-500">Elderflame Vandal</h2>
        <div className="flex flex-col items-center gap-8 py-4">
        <img 
          src="https://vgraphs.com/images/weapons/valorant-elderflame-vandal-profile-icon.png" 
          alt="Elderflame Vandal" 
          style={{ width: '400px', height: '150px' }} 
        />
        <iframe
        src = "https://www.youtube.com/embed/-WYElC5Xi-U"
        alt = "Elderflame Vandal Video"
        allowFullScreen
        />
</div>
</div>,

<div key="reaver-phantom" className="flex justifiy-content flex-col items-center py-4">
<h2 className="flex justify-center text-red-500">Reaver Phantom </h2>
     <div className="flex flex-col items-center gap-8 py-4">
     <img 
          src="https://cdn.sanity.io/images/ccckgjf9/production/c56e2341952ea2fad4c08a55b662c4f287490ebb-960x380.png?max-h=1080&max-w=1920&q=50&fit=scale&auto=format" 
          alt="Reaver Phantom" 
          style={{ width: '300px', height: '100px' }} 
        />
        <iframe
        src = "https://www.youtube.com/embed/392UKKpTXTE"
        alt = "Reaver Phantom Video"
        allowFullScreen/>
</div>
</div>,

<div key="2.0-karambit" className="flex justifiy-content flex-col items-center py-4">
<h2 className="flex justify-center text-red-500">Prime 2.0 Karambit</h2>
     <div className="flex flex-col items-center gap-8 py-4">
     <img 
          src="https://i.pinimg.com/originals/4b/c6/ad/4bc6adccfcf3c446ab1932e68961663a.png" 
          alt="Prime 2.0 Karambit" 
          style={{ width: '250px', height: '120px' }} 
        />
        <iframe
        src = "https://www.youtube.com/embed/Tu0O9tb5-k"
        alt = "Prime 2.0 Karambit Video"
        allowFullScreen/>
</div>
</div>,

<div key="glitchpop-vandal" className="flex justifiy-content flex-col items-center py-4">
<h2 className="flex justify-center text-red-500">Glitchpop Vandal</h2>
     <div className="flex flex-col items-center gap-8 py-4">
     <img 
          src="https://vgraphs.com/images/weapons/valorant-glitchpop-ep-2-vandal-profile-icon.png" 
          alt="Glitchpop Vandal" 
          style={{ width: '400px', height: '150px' }} 
        />
        <iframe
        src = "https://www.youtube.com/embed/WyOLM_ODzDw"
        alt = "Glitchpop Vandal Video"
        allowFullScreen/>
</div>
</div>,

<div key="prime-odin" className="flex justifiy-content flex-col items-center py-4">
<h2 className="flex justify-center text-red-500">Prime Odin</h2>
     <div className="flex flex-col items-center gap-8 py-4">
     <img 
          src="https://valorantinfo.com/images/us/prime20-odin-level-4variant-1-gold_valorant_full_skin_154245.webp" 
          alt="Prime Odin" 
          style={{ width: '500px', height: '150px' }} 
        />
        <iframe
        src = "https://www.youtube.com/embed/nO7WlBbe440"
        alt = "Prime Odin Video"
        allowFullScreen/>
</div>
</div>,
   ];
return (
  <AliceCarousel
  items={items}
autoPlay
autoPlayInterval={3000}/>
)

}

export default bestskins;