import {useEffect, useState} from "react";
import Background  from "./Components/Background/Background.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";

const App = () => {
  let heroData = [
    {text1:"hi, this is",text2:"a website beta of myself"},
    {text1:"im in first year of",text2:"informatic engineering"},
    {text1:"projects with typescript, react, C++",text2:"mongoDB"},
    {text1:"languages",text2:"English Level B2"},
    {text1:"brent faiyaz x nemzzz ",text2:"pls"},
  ]

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  //animacion cambio de imagen

  /*useEffect(()=>{
    setInterval(() => {
      setHeroCount((count)=>{return count===2?0:count+1})
    }, 3000);
  },[])
*/

return (
    <div>
     <Background playStatus={playStatus} heroCount={heroCount}/>
     <Navbar/>

     <Hero
      setPlayStatus={setPlayStatus}
      heroData={heroData[heroCount]}
      heroCount={heroCount}
      setHeroCount={setHeroCount}
      playStatus={playStatus}
     />

    </div>
  )
}
export default App
