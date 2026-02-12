export default function RunningTicker({ text }) {
  const repeatsPerGroup = 4;

  return (
    <div className="w-full bg-darkslategray-200 py-[13px] overflow-hidden">
      <div className="ticker-track flex w-max items-center whitespace-nowrap">
        {[0, 1].map((groupIndex) => (
          <div
            key={`ticker-group-${groupIndex}`}
            className="flex items-center gap-8 desktop:gap-14 pr-8 desktop:pr-14"
          >
            {Array.from({ length: repeatsPerGroup }).map((_, index) => (
              <i
                key={`running-ticker-${groupIndex}-${index}`}
                className="text-white text-[25px] leading-[25px] font-jost not-italic inline-block shrink-0"
              >
                {text}
              </i>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
