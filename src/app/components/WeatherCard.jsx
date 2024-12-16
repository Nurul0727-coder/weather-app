
// export default function WeatherCard({
//   bgcolor,
//   date,
//   cityName,
//   temperature,
//   stat,
//   weatherType,
//   textColor = 'white',
//   temperatureColor = 'white',
//   statColor = 'red',
// }) {
//   const getStatColor = () => {
//     if (stat === 'Bright') return '#FF8E27';
//     if (stat === 'Clear') return '#777CCE'; 
//     return statColor; 
//   };

//   return (
//     <div className={`w-[345px] h-[750px] px-7 py-10 rounded-3xl absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${bgcolor === "white" ? "bg-white" : "bg-black"}`}>
//       <div className='text-gray-500 text-xl'>{date}</div>
//       <div className={`text-[48px]`} style={{ color: textColor }}>{cityName}</div>

//       <div className='flex justify-center mt-10'>
//         {weatherType === "day" ? (
//           <img src="/sun.png" alt="Sun" width="262" height="262" />
//         ) : (
//           <img src="/moon.png" alt="Moon" width="262" height="262" />
//         )}
//       </div>

//       <div className={`text-9xl mt-7`} style={{ color: temperatureColor }}>{temperature}</div>
//       <div className={`text-2xl mt-5`} style={{ color: getStatColor() }}>{stat}</div> 
//     </div>
//   );
// }
export default function WeatherCard({
  bgcolor,
  date,
  cityName,
  temperature,
  stat,
  weatherType,
  textColor = 'white',
  statColor = 'red',
}) {
  
  const dayGradient = 'bg-gradient-to-b from-[#111827] to-[#6B7280]';
  const nightGradient = 'bg-gradient-to-b from-[#F9FAFB] to-[#F9FAFB00]';
  const gradientClass = weatherType === 'day' ? dayGradient : nightGradient;
  const statColorBright = '#FF8E27';
  const statColorClear = '#777CCE';
  const dynamicStatColor = stat === 'Bright' ? statColorBright : stat === 'Clear' ? statColorClear : statColor;
 
  return (
    <div
      className={`w-[345px] h-[750px] px-7 py-10 rounded-3xl absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
        bgcolor === 'white' ? 'bg-white backdrop-blur-md' : 'bg-gradient-to-b from-[#1F2937] to-[#11182700] backdrop-blur-md'
      }`}
    >
      <div className="text-gray-500 text-xl">{date}</div>
      <div className={`text-[48px] text-${textColor}`}>{cityName}</div>
 
      <div className="flex justify-center mt-10">
        {weatherType === 'day' ? (
          <img src="/sun.png" alt="Sun" width="262" height="262" />
        ) : (
          <img src="/moon.png" alt="Moon" width="262" height="262" />
        )}
      </div>
 
      <div
        className={`text-9xl mt-7 ${gradientClass} text-transparent bg-clip-text`}
      >
        {temperature}
      </div>
      <div className={`text-2xl mt-5`} style={{ color: dynamicStatColor }}>
        {stat}
      </div>
    </div>
  );
}
