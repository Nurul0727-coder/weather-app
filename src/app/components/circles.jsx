export default function Circle({ size = 140, borderColor = "gray" }) {
  return (
    <div
      className={`absolute top-1/2 left-1/2  rounded-full tranform -translate-x-1/2  -translate-y-1/2 border-2 opacity-[40%] border-${borderColor}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
}
