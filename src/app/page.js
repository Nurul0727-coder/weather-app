
import WeatherCard from './components/WeatherCard';
import Circle from './components/circles';
import Logo from './components/decoration';
import {Search} from './components/decoration';
import {Icons} from './components/decoration';
 

export default function Home() {
  return (
    <div className="flex h-screen w-full bg-white justify-center relative">
      <div className="w-[1200px] h-full flex relative  font-semibold">
        <div className="w-1/2 h-full bg-[#F3F4F6] relative">
          <Search visible={true} />
          <WeatherCard
            bgcolor="white"
            date="Sep 10, 2024"
            cityName="Kraków"
            temperature="12°"
            stat="Bright"
            weatherType="day"
            textColor="#111827"
            temperatureColor="black"
            statColor="#FF8E27" 
            
          />
          <Icons iconColor="black" />
        </div>
        <div className="w-1/2 h-full bg-[#0F141E] relative">
          <Search visible={false} />
          <WeatherCard
            bgcolor="#1F2937"
            date="Sep 10, 2024"
            cityName="Kraków"
            temperature="-2°"
            stat="Clear"
            weatherType="night"
            textColor="white"
            statColor="#777CCE"
          />
          <Icons iconColor="white" />
        </div>
        <Circle size={140} />
        <Circle size={340} />
        <Circle size={540} />
        <Circle size={940} />
        <Circle size={1340} />
      </div>
      <Logo />
    </div>
  );
}
