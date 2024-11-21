import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const TwitchStream = () => {
const items = [
     <div className="twitch-streamers">
        <h2 className="flex justify-center text-red-500">TenZ </h2>
        <div key="tenz"className="flex justify-center space-x-4">
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
        <h2 className="flex justify-center text-red-500">Pokimane</h2>
        <div key="pokimane"className="flex justify-center space-x-4">
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
        <h2 className="flex justify-center text-red-500">Kyedae</h2>
        <div key="kyedae" className="flex justify-center space-x-4">     
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
       
        <div key="Tarik" className="flex justify-center space-x-4">
        <h2 className="flex justify-center text-red-500">Tarik</h2>
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
      
             <h2 className="flex justify-center text-red-500">Subroza</h2>
             <div key="Subroza"className="flex justify-center space-x-4">
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
    </div>
]
return (
  <div className="twitch-streamers">
 <AliceCarousel
 items={items}
autoPlay
autoPlayInterval={3000}
/>
</div>
)
}

export default TwitchStream