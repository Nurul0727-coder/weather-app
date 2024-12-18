		 	 
export default function WeatherCard({
  bgcolor,
  date,
  stat,
  weatherType,
  textColor = 'white',
  statColor,
  temperature, 
}) {
  const dayGradient = 'bg-gradient-to-b from-[#111827] to-[#6B7280]';
  const nightGradient = 'bg-gradient-to-b from-[#F9FAFB] to-[#F9FAFB00]';
  const gradientClass = weatherType === 'day' ? dayGradient : nightGradient;

  const statColorBright = '#FF8E27';
  const statColorClear = '#777CCE';

  const dynamicStatColor =
    bgcolor === 'black' ? statColorClear : bgcolor === 'white' ? statColorBright : statColor;

  return (
    <div
      className={`w-[345px] h-[750px] px-7 py-10 rounded-3xl absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${gradientClass}`}
      style={{ color: textColor }}
    >
      <div className="text-8xl mt-7 font-[800]">{temperature}</div>

      <div className="text-xl mt-3">{date}</div>

      <div className="text-2xl mt-8" style={{ color: dynamicStatColor }}>
        {stat}
      </div>
    </div>
  );
}


