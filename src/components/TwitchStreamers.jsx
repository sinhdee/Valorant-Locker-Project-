import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const TwitchStream = () => {

return (
    <div className="twitch-streamers">
        <h2 className="channel-name">TenZ </h2>
        <div className="flex justify-center space-x-4">
        <iframe
        src="https://player.twitch.tv/?channel=tenz&parent=https://valorant101.netlify.app/home&muted=true"
        height="<height>"
        width="<width>"
        allowfullscreen
        />
        <iframe
        src="https://player.twitch.tv/?video=2300275570&parent=https://valorant101.netlify.app/home"
        height="<height>"
        width=""
        allowFullScreen
        title="Valorant Clip"
      />
      </div>
        <h2 className="channel-name">Pokimane</h2>
        <div className="flex justify-center space-x-4">
             <iframe
        src="https://player.twitch.tv/?channel=pokimane&parent=localhost&muted=true"
        height=""
        width=""
        allowfullscreen
        />
      <iframe
        src="https://player.twitch.tv/?video=2271749009&parent=localhost"
        height=""
        width=""
        allowFullScreen
        title="Valorant Clip"
      />
      </div>
        <h2 className="channel-name">Kyedae</h2>
        <div className="flex justify-center space-x-4">     
            <iframe
        src="https://player.twitch.tv/?channel=kyedae&parent=localhost&muted=true"
        height="<height>"
        width="<width>"
        allowfullscreen
        />
    <iframe
        src="https://player.twitch.tv/?video=2299974813&parent=localhost"
        height="<height>"
        width=""
        allowFullScreen
        title="Valorant Clip"
      />
    </div>
        <h2 className="channel-name">Tarik</h2>
        <div className="flex justify-center space-x-4">
               <iframe
        src="https://player.twitch.tv/?channel=tarik&parent=localhost&muted=true"
        height="<height>"
        width="<width>"
        allowfullscreen
        />
          <iframe
        src="https://player.twitch.tv/?video=2301125646&parent=localhost"
        height="<height>"
        width=""
        allowFullScreen
        title="Valorant Clip"
      />
      </div>
             <h2 className="channel-name">Subroza</h2>
             <div className="flex justify-center space-x-4">
               <iframe
        src="https://player.twitch.tv/?channel=subroza&parent=localhost&muted=true"
        height="<height>"
        width="<width>"
        allowfullscreen
        />
       <iframe
        src="https://player.twitch.tv/?video=2294337508&parent=localhost"
        height="<height>"
        width=""
        allowFullScreen
        title="Valorant Clip"
      />
      </div>
    </div>

)
}

export default TwitchStream