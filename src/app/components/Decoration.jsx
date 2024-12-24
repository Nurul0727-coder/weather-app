


// // import { AiOutlineSearch } from "react-icons/ai";
// // import { CiHome, CiLocationOn, CiHeart } from "react-icons/ci";
// // import { IoPersonOutline } from "react-icons/io5";

  

// // export const Search = ({ visible = true, search, onChangeText, onPressEnter }) => {
// //   return (
// //     <div
// //       className={`${
// //         visible ? "block" : "invisible"
// //       } w-[400px] h-[55px] bg-white rounded-3xl flex items-center ml-10 mt-10 z-40 absolute`}
// //     >
// //       <AiOutlineSearch className="text-2xl ml-5" />
// //       <input
// //         className="p-3 text-xl text-black border-none focus:outline-none"
// //         placeholder="Search"
// //         value={search}
// //         onChange={onChangeText}
// //         onKeyDown={onPressEnter}
// //       />
// //     </div>
// //   );
// // };

// // export default function Logo(){
// //   return(
// //    <div className="absolute z-30 flex justify-center items-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 space-x-5">
// //       <img src='/logoLeft.png' width='43' height='86' layout="responsive"/>
// //       <img src='/logoRight.png' width='43' height='86' layout="responsive"/>
// //     </div>
// //   )
// // }

// // // }
// // export function Icons({ iconColor = 'black' }) {
// //   const iconClass = iconColor === 'white' ? 'text-white' : 'text-black';
 
// //   return (
// //     <div className="absolute ml-[120px] mt-[770px] h-32 w-[360px] flex justify-around z-40 overflow-visible">
// //       <CiHome className={`text-xl ${iconClass} hover:text-black`} />
// //       <CiLocationOn className={`text-xl ${iconClass} hover:text-black`} />
// //       <CiHeart className={`text-xl ${iconClass} hover:text-black`} />
// //       <IoPersonOutline className={`text-xl ${iconClass} hover:text-black`} />
// //     </div>
// //   );
// // }	 

// // export function YellowCircle() {
// //   return (
// //     <div className="absolute ml-[60px] mt-[140px]">
// //       <svg width="150" height="150" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 176 176">
// //         <circle cx="88" cy="88" r="88" fill="#FF8E27" />
// //         <circle cx="88" cy="88" r="88" fill="url(#paint0_radial)" fillOpacity="0.35" style={{ mixBlendMode: "overlay" }} />
// //       </svg>
// //     </div>
// //   );
// // }
// // export function BlueCircle() {	 	 	 
// //   return (	 	 	  	 	 
// //     <div className="absolute ml-[400px] mt-[880px]">	 	 	 
// //       <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">	 	 	 
// //         <circle cx="64" cy="64" r="64" fill="#6E72C9" />	 	 	 
// //         <circle cx="64" cy="64" r="64" fill="url(#paint0_radial_139_563)" fillOpacity="0.35" style={{ mixBlendMode: 'overlay' }} />			

// //       </svg>
// //     </div>
// //   );
// // }
"use client"
 
// import WeatherCard from './components/WeatherCard';
// import Circle from './components/circle';
// import Logo from './components/decorations';
// import { Search } from './components/decorations';
// import { Icons } from './components/decorations';
// import { CiLocationOn } from "react-icons/ci";
// import { YellowCircle } from './components/decorations';
// import { BlueCircle } from './components/decorations';
// import { useState, useEffect } from 'react';
 
// const API_KEY='5bf8f7f6f1ac4ed1ae772612241312'
 
// export default function Home() {
//   const [search, setSearch ]=useState('');
//   const [city, setCity] =useState('Ulaanbaatar');
//   const [dayWeather,setDayWeather]=useState({})
 
//   const onChangeText=(e) => {
//    const value=e.target.value
//    setSearch(value)
//   };
 
//   const onPressEnter=(e)=>{
//     if(e.code==='Enter'){
//       setCity(search);
//     }
//   }
//      useEffect(()=>{
//       fetch(`http://api.weatherapi.com/v1/forecast.json?key=5bf8f7f6f1ac4ed1ae772612241312&q=${city}&days=1&aqi=no&alerts=no`)
//       .then((response)=> response.json())
//       .then((data)=>{
//       setDayWeather({
//         temperature : data.forecast.forecastday[0].day.maxtemp_c,
//         nightTemp: data.forecast.forecastday[0].day.mintemp_c,
//         condition: data.forecast.forecastday[0].day.condition.text,
//         date: data.forecast.forecastday[0].date
//         }
//        )      
//       })
//      },[city]);
 
//   return (
//     <div className="flex h-screen w-full bg-white justify-center relative ">
//       <div className="w-[1200px] h-full flex relative font-semibold">
  
//         <div className="w-1/2 h-full bg-[#F3F4F6] relative">
//           <YellowCircle/>
//           <Search
//            visible={true}
//            search={search}
//            onChangeText={onChangeText}
//            onPressEnter={onPressEnter}
//           />
//           <WeatherCard
//             bgcolor="white"
//             date={dayWeather.date}
//             cityName={city}
//             temperature={`${dayWeather.temperature}°`}
//             stat={dayWeather.condition}
//             weatherType="day"
//             textColor="black"
//             temperatureColor="black"
//           />
//           <Icons iconColor="#D1D5DB" />
//           <CiLocationOn className="absolute text-xl text-black z-40 ml-[405px] my-[270px]" />
//         </div>
 
//         <div className="w-1/2 h-full bg-[#0F141E] relative">
//           <BlueCircle/>
//           <Search visible={false} />
//           <WeatherCard
//             bgcolor="black"
//             date={dayWeather.date}
//             cityName={city}
//             temperature={`${dayWeather.nightTemp}°`}
//             stat={dayWeather.condition}
//             weatherType="night"
//             textColor="white"
//             statColor="green"
//           />
//           <Icons iconColor="white" />
//           <CiLocationOn className="absolute text-xl text-white z-40 ml-[405px] my-[270px]" />
//         </div>
 
//         <Circle size={140} />
//         <Circle size={340} />
//         <Circle size={540} />
//         <Circle size={940} />
//       </div>
//       <Logo />
//     </div>
//   );
// }
import { AiOutlineSearch } from 'react-icons/ai';
import { CiHome, CiLocationOn, CiHeart } from 'react-icons/ci';
import { IoPersonOutline } from 'react-icons/io5';

export function Search({ visible = true, search, onChangeText, onPressEnter }) {
  return (
    <div className={`${visible ? 'block' : 'invisible'} w-[400px] h-[55px] bg-white rounded-3xl flex items-center ml-10 mt-10 z-40 absolute`}>
      <AiOutlineSearch className="text-2xl ml-5" />
      <input
        className="p-3 text-xl text-black border-none focus:outline-none"
        placeholder="Search"
        value={search}
        onChange={onChangeText}
        onKeyDown={onPressEnter}
      />
    </div>
  );
}

export function Icons({ iconColor = 'black' }) {
  const iconClass = iconColor === 'white' ? 'text-white' : 'text-black';
  return (
    <div className="absolute text-${iconColor} ml-[120px] my-[900px] h-32 w-[360px] flex justify-around z-40 overflow-visible">
      <CiHome className={`text-xl ${iconClass}`} />
      <CiLocationOn className={`text-xl ${iconClass}`} />
      <CiHeart className={`text-xl ${iconClass}`} />
      <IoPersonOutline className={`text-xl ${iconClass}`} />
    </div>
  );
}

export function YellowCircle() {
  return (
    <div className="absolute ml-[60px] mt-[140px]">
      <svg width="150" height="150" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 176 176">
        <circle cx="88" cy="88" r="88" fill="#FF8E27" />
        <circle cx="88" cy="88" r="88" fill="url(#paint0_radial)" fillOpacity="0.35" style={{ mixBlendMode: 'overlay' }} />
        <defs>
          <radialGradient id="paint0_radial" cx="50%" cy="50%" r="50%" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="white" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

export function BlueCircle() {
  return (
    <div className="absolute ml-[400px] mt-[880px]">
      <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="64" cy="64" r="64" fill="#6E72C9" />
        <circle cx="64" cy="64" r="64" fill="url(#paint0_radial_139_563)" fillOpacity="0.35" style={{ mixBlendMode: 'overlay' }} />
        <defs>
          <radialGradient id="paint0_radial_139_563" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(64 64) rotate(90) scale(64)">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
