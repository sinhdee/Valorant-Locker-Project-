import TwitchStream from "./TwitchStreamers";
import Bestskins from "./bestskins";

 const Home = () => {
    return (
        <div>
        <h1>MOST POPULAR VALORANT TWITCH STREAMERS</h1>
        <TwitchStream/>
        <div>
        <h1>TOP 5 VALORANT GUNS</h1>
        <Bestskins/>
         </div>
        </div>
    );    
};


export default Home