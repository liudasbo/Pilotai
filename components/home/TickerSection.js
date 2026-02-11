export default function TickerSection() {
  const tickerText =
    "Pilotai Program positioning Lithuania as the premier luxury aviation hub in the world";

  return (
    <div className="w-full bg-darkslategray-200 py-[13px] px-0 box-border overflow-hidden">
      <div className="w-full overflow-hidden">
        <div className="ticker-track flex w-max items-center gap-8 desktop:gap-14 whitespace-nowrap">
          {Array.from({ length: 6 }).map((_, index) => (
            <i
              key={`ticker-${index}`}
              className="relative leading-num-25 inline-block shrink-0"
            >
              {tickerText}
            </i>
          ))}
        </div>
      </div>
    </div>
  );
}
