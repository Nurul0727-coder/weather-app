
import WeatherCard from './components/WeatherCard';
import Circle from './components/circles';
import Logo from './components/decoration';
import {Search} from './components/decoration';
import {Icons} from './components/decoration';
 import { useState, useEffect,  } from 'react'

const API_KEYS="15ce7f6cb50a4224b3672555241312";

export default function Home() {

  const [search, setSearch] = useState("");
  const [cityName , setCity] = useState("");
  const [forecastDate, setForecastDate] = useState("");
  const [dayWeather, setDayWeather] = useState ({
   temperature: 0,
    condition: "",
  });
  const [nightWeather, setNightWeather] = useState ({
    temperature: 0,
    condition: "",
  });

  const onChangeText = (e) => {
    setSearch(e.target.value);
  };
  const onPressEnter = (e) => {
    if (e.code === "Enter" && search.trim())
    setCity(search);
  }
  let dayTemp=0;

  useEffect(()=>{
    fetch ('http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=no&alerts=no'
    )
    .then((response)=>response.json())
    .then((data) => {
      setDayWeather({
        temperature:data.forecast.forecastday[0].day.maxtemp_c,
        condition:data.forecast.forecastday[0].day.condition.text,
      })
    });
  },[city])
  
  
  return (
    <div className="flex h-screen w-full bg-white justify-center relative">
      <div className="w-[1200px] h-full flex relative  font-semibold">
        <div className="w-1/2 h-full bg-[#F3F4F6] relative">
          <Search visible={true} 
          search = {search} 
          onChangeText={onChangeText}
          onPressEnter={onPressEnter} />
          <WeatherCard
            bgcolor="white"
            date="Sep 10, 2024"
            cityName={city}
            temperature={dayTemp}
            stat="Bright"
            weatherType="day"
            textColor="#111827"
            temperatureColor="black"
            statColor="#FF8E27" 
            condition={'data.forecast.forecastday[0].day.condition.text'}
            
          />
          <Icons iconColor="black" />
        </div>
        <div className="w-1/2 h-full bg-[#0F141E] relative">
          <Search visible={false} 
          search = {search} 
          onChangeText={onChangeText}
          onPressEnter={onPressEnter}/>
          <WeatherCard
            bgcolor="#1F2937"
            date="Sep 10, 2024"
            cityName={city}
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
