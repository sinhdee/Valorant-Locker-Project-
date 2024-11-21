import React from "react"

const About = () => {
    return (
        <div className="flex flex-col justify-center text-center space-y-8 text-white">
            <div className="width-300">
             <img src= "https://freight.cargo.site/w/3840/q/75/i/a17dfc0b27e50cb1c75dcd8fcd13a2d11783729f60265d9a00d184bc5a8d9296/VALORANT_1.png"/>
             </div>
             <h2>Valorant is a first person shooter game that was created by Riot Games in 2020. The game has multiple characters that have abilites that can be used in game. Valorant has over 10 maps that are on rotatation and new seaons to try them all! </h2>
            
             <h1 className="text-[30px]">AGENTS</h1>
           <img src="https://i.etsystatic.com/46703847/r/il/d36936/5926563334/il_570xN.5926563334_abq0.jpg"/>
             <h1 className="text-[30px]">ABILITIES</h1>
             <img src="https://i.etsystatic.com/40718192/r/il/cbf1ac/6397306237/il_570xN.6397306237_8wfd.jpg"/>
             <h1 className="text-[30px]">MAPS</h1>
             <div className="width-300p">
             <img src="https://www.zleague.gg/theportal/wp-content/uploads/2023/06/All-Valorant-maps-ranked.png"/>
             <h2 className="text-[40px] mt-3 ">SIGN UP NOW</h2>
             <a className='text-[22px] bg-red-500 px-3 mb-6'href="https://playvalorant.com/en-us">PLAY FOR FREE HERE</a>
             </div>
        </div>
       
    )
}

export default About