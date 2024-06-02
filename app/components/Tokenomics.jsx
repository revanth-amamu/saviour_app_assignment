import React from "react";

const Tokenomics = () => {
  const data = [
    {
      name: "Name",
      value: "Saviour",
    },
    {
      name: "Symbol",
      value: "SVR",
    },
    {
      name: "Total Supply",
      value: "1000 Trillion",
    },
    {
      name: "Decimals",
      value: "18",
    },
  ];
  return (
    <div className="w-full">
      <div
        className="w-full h-full bg-cover bg-no-repeat padding-x bg-[url('/assets/tokenomics_bg_img.png')] bg-center"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-opacity-90"></div>
        <div className="relative z-10 pt-20">
          <h2 className="font-shojumaru text-4xl font-medium text-red-500 text-center">
            Tokenomics
          </h2>

          <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 mt-10 md:mt-16">
            <div className="w-full md:w-2/5 relative">
              <div className="w-64 h-20 bg-red-500 flex justify-center items-center text-white font-shojumaru text-lg md:text-xl font-medium rounded-xl absolute top-0 left-1/2 transform -translate-x-1/2 z-10">
                Token Details
              </div>

              <div className="w-full mt-10 md:mt-16 h-96 md:h-auto rounded-xl border-2 border-red-500 p-8">
                <div className="grid grid-cols-1 gap-2 md:gap-4 text-white font-zcool text-base md:text-lg">
                  {data.map((item) => (
                    <div key={item.name} className="px-4 md:px-8">
                      <div className="flex justify-between">
                        <span>{item.name}</span>
                        <span className="text-red-600">{item.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full md:w-3/5 overflow-hidden">
              <img
                src="/assets/tokenomics_img.png"
                alt="Tokenomics"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
