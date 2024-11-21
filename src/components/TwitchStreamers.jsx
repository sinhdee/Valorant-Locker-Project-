import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const TwitchStream = () => {
const items = [
  <div key="tenz" className="flex justifiy-content flex-col items-center">
    <h2 className="text-red-500 mb-4">TenZ</h2>
    <div className="flex justify-content space-x-4">
    <iframe
        src="https://player.twitch.tv/?channel=tenz&parent=valorant101.netlify.app&muted=true"
        width="<width>"
        allowfullscreen
        />
        <iframe
        src="https://player.twitch.tv/?video=2300275570&parent=valorant101.netlify.app"
        height="<height>"
        width=""
        allowFullScreen
        title="Valorant Clip"
      />
    </div>
  </div>,

<div key="pokimane" className="flex justifiy-content flex-col items-center">
<h2 className="text-red-500 mb-4">Pokimane</h2>
<div className="flex justify-content space-x-4">
<iframe
        src="https://player.twitch.tv/?channel=pokimane&parent=valorant101.netlify.app&muted=true"
        height=""
        width=""
        allowfullscreen
        />
      <iframe
        src="https://player.twitch.tv/?video=2271749009&parent=valorant101.netlify.app"
        height=""
        width=""
        allowFullScreen
        title="Valorant Clip"
      />
</div>
</div>,

<div key="kyedae" className="flex justifiy-content flex-col items-center">
<h2 className="text-red-500 mb-4">Kyedae</h2>
<div className="flex justify-content space-x-4">
<iframe
        src="https://player.twitch.tv/?channel=kyedae&parent=valorant101.netlify.app&muted=true"
        height="<height>"
        width="<width>"
        allowfullscreen
        />
    <iframe
        src="https://player.twitch.tv/?video=2299974813&parent=valorant101.netlify.app"
        height="<height>"
        width=""
        allowFullScreen
        title="Valorant Clip"
      />
</div>
</div>,

<div key="tarik" className="flex justifiy-content flex-col items-center">
<h2 className="text-red-500 mb-4">Tarik</h2>
<div className="flex justify-content space-x-4">
<iframe
        src="https://player.twitch.tv/?channel=tarik&parent=valorant101.netlify.app=true"
        height="<height>"
        width="<width>"
        allowfullscreen
        />
          <iframe
        src="https://player.twitch.tv/?video=2301125646&parent=valorant101.netlify.app"
        height="<height>"
        width=""
        allowFullScreen
        title="Valorant Clip"
      />
</div>
</div>,

<div key="subroza" className="flex justifiy-content flex-col items-center">
<h2 className="text-red-500 mb-4">Subroza</h2>
<div className="flex justify-content space-x-4">
         <iframe
        src="https://player.twitch.tv/?channel=subroza&parent=valorant101.netlify.app&muted=true"
        height="<height>"
        width="<width>"
        allowfullscreen
        />
       <iframe
        src="https://player.twitch.tv/?video=2294337508&parent=valorant101.netlify.app"
        height="<height>"
        width=""
        allowFullScreen
        title="Valorant Clip"
      />
</div>
</div>,
];
return ( <AliceCarousel
 items={items}
autoPlay
autoPlayInterval={3000}
/>
);
};

export default TwitchStream