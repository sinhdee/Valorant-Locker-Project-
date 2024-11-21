import TwitchStream from "./TwitchStreamers";
import Bestskins from "./bestskins";

 const Home = () => {
    return (
        <div className="font-semibold space-y-8">
        <h1 className="flex justify-center bg-[#fffbf5]">MOST POPULAR VALORANT TWITCH STREAMERS</h1>
        <TwitchStream/>
        <div>
        <h1 className="flex justify-center bg-[#fffbf5]">TOP 5 VALORANT GUNS</h1>
        <Bestskins/>
         </div>
        </div>
    );    
};


export default Home