const GeneralPoints = ({
  generals,
  mainHeading,
}: {
  generals:
    | Array<string>
    | {
        heading: string;
        content: string;
      }[];
  mainHeading: string;
}) => {
  const isStringArray =
    Array.isArray(generals) &&
    generals.every((item) => typeof item === "string");

  return (
    <main className="flex flex-col gap-5 justify-center items-start">
      <div className="point-head">
        <p className="md:text-[38px] text-[28px] font-medium">{mainHeading}</p>
      </div>
      {isStringArray ? (
        <div className="points flex flex-col md:gap-[22px] gap-3 items-center justify-center">
          {generals.map((p, i) => {
            return (
              <div
                key={i}
                className="flex flex-row gap-5 items-start justify-start w-full"
              >
                <div className="w-1/12 flex justify-center items-center">
                  <div className="flex w-7 h-7 items-center justify-center gap-[10px] px-3 bg-[#f7f7f7] rounded-full max-w-fit pt-1">
                    <p>{i + 1}</p>
                  </div>
                </div>
                <div className="w-11/12">
                  <div className="text-base font-light">
                    <p>{p}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="points flex flex-col gap-[22px] items-center justify-center">
          {(generals as { heading: string; content: string }[]).map((p, i) => {
            return (
              <div
                key={i}
                className="flex gap-5 items-start justify-start w-full"
              >
                <div className="w-1/12 flex justify-center items-center">
                  <div className="flex w-7 h-7 items-center justify-center gap-[10px] px-3 bg-[#f7f7f7] rounded-full">
                    <p>{i + 1}</p>
                  </div>
                </div>
                <div className="w-11/12">
                  <div className="flex flex-col gap-1 items-start justify-center">
                    <div className="text-base font-medium">
                      <p>{p.heading}</p>
                    </div>
                    <div className="text-base font-light">
                      <p>{p.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
};

export default GeneralPoints;
