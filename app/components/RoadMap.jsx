



const Roadmap = () => {
  const arr = [
    {
      title: "Phase 1",
      deg: "scaleX(-1)",
      top: "50%",
      src: `${'assets/RoadmapCard1.png'}`,
      description: "Technical Readiness and Smart Contract Audit",
    },
    {
      title: "Phase 2",
      deg: "scaleX(-1)",
      top: "57%",
      src: `${'assets/RoadmapCard2.png'}`,
      description: "Increase Liquidity and Trading Volume",
    },
    {
      title: "Phase 3",
      deg: "scaleX(-1)",
      top: "57%",
      src: `${'assets/RoadmapCard3.png'}`,
      description: "Community Building and Marketing",
    },
    {
      title: "Phase 4",
      deg: "scaleX(-1)",
      top: "57%",
      src: `${'assets/RoadmapCard4.png'}`,
      description: "Ecosystem Expansion and Partnerships",
    },
  ];
  return (
    <div
      className="w-full h-[588px] bg-center bg-no-repeat bg-cover opacity-10"
      style={{ backgroundImage: `url(${'assets/roadmap_bg_img.png'})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full"></div>

      <div className="flex justify-center mb-8">
        <h1 className="mt-12 text-red-600 font-shojumaru text-4xl md:text-5xl relative z-10">
          Road Map
        </h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center pl-9 md:pl-10 pr-6 md:pr-12">
        {arr.map((item, index) => (
          <div
            key={index}
            className={`relative z-10 w-32 md:w-60 h-48 md:h-88 bg-black border-2 border-red-600 rounded-lg mx-2 ${
              index >= 2 ? "hidden md:block" : ""
            }`}
            data-aos="fade-up"
          >
            <div
              className="absolute top-0 left-0 w-full h-full opacity-60 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url('${item.src}')`,
              }}
            />
            <div className="absolute w-full top-1/2 transform -translate-y-1/2 text-white p-2 md:p-5">
              <div className="flex flex-col pr-5 space-y-1 md:space-y-2">
                <h2 className="text-sm md:text-xl font-medium">{item.title}</h2>
                <p className="text-xs md:text-lg font-light text-gray-400">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
