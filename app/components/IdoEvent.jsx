// import Introduction from "./Introduction";

// const IdoEvent = () => {
//   return (
//     <section className="relative h-[1145px]">
//       <div className="absolute inset-0 bg-[url('/assets/section3_bg_img.png')] bg-center"></div>
//       <div className="relative z-10 h-full w-full">
//         <Introduction />

//         <div className="padding-x">
//           <h1 className="text-5xl">Participate in our IDO Event</h1>
//           <div className="flex items-start justify-center w-full">
//             <div className="flex flex-col items-center w-[50%]">
//               <p className="text-base text-center leading-8">
//                 During our IDO event, you will gain early access to our
//                 revolutionary ecosystem, designed to empower everyone to share
//                 wealth and achieve success.
//               </p>
//               <div className="flex flex-col items-center justify-center">
//                 <div className="bg-[#ED0137] flex justify-center items-center w-32 h-20 translate-y-14 rounded-xl">
//                   <p className="text-2xl">
//                     Token Info
//                   </p>
//                 </div>
//                 <div className="flex flex-col justify-center items-center gap-y-3 border-2 border-[#EF490F] rounded-[20px] p-20 pb-8">
//                   <table className="w-full">
//                     <tbody className=" text-2rem flex flex-col gap-4 w-full">
//                       <tr className="w-full">
//                         <td className="w-full">Total Token Supply</td>
//                         <td className="text-[#DF180A] w-full text-left text-nowrap">
//                           20%
//                         </td>
//                       </tr>
//                       <tr className="w-full">
//                         <td className="w-full">Soft Cap</td>
//                         <td className="text-[#DF180A] text-left w-full text-nowrap">
//                           200 BNB
//                         </td>
//                       </tr>
//                       <tr className="w-full">
//                         <td className="w-full">Initial exchange rate</td>
//                         <td className="text-[#DF180A] text-left w-full text-nowrap">
//                           1 BNB
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                   <p className=" text-2rem ml-[-1.5rem] mr-[-1.5rem]">
//                     Recommended Referral Commission
//                   </p>
//                   <table className="w-full">
//                     <tbody className=" text-2rem flex flex-col gap-[1.2rem] w-full">
//                       <tr className="w-full">
//                         <td className="w-full">1st Generation</td>
//                         <td className="text-[#DF180A] text-left w-full text-nowrap">
//                           5%
//                         </td>
//                       </tr>
//                       <tr className="w-full">
//                         <td className="w-full">2nd Generation</td>
//                         <td className="text-[#DF180A] text-left w-full">2%</td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//               <button className="bg-gradient-to-r from-smurai-grade-red to-smurai-grade-orange rounded-[16.21px] p-[10px_12px] text-[xl]  mt-[3.5rem] h-[45px] w-[145px] hover:scale-105 transition-all duration-300">
//                 Connect Wallet
//               </button>
//               <p className="text-xl text-center m-16">
//                 Become an affiliate &amp; Earn 7% as Commission!
//               </p>
//               <div className="flex justify-center items-center gap-[1.5rem] w-[95%]">
//                 <div className="flex justify-between h-[5.5rem] w-full border-[1px] border-[#C4110C] rounded-[20px] ">
//                   <input
//                     className="h-fill w-full bg-transparent text-1.6rem placeholder:text-[#808181] text-white  p-[0px_2.4rem] border-none outline-none"
//                     type="text"
//                     placeholder="Generate a unique referral link"
//                   />
//                   <button className="h-fill p-[0px_1.5rem] text-1.5rem  m-[2px] bg-samurai-red rounded-[2rem] hover:scale-105 transition-all duration-300">
//                     Generate
//                   </button>
//                 </div>
//                 <div className="cursor-pointer">
//                   <img
//                     alt="copy"
//                     loading="lazy"
//                     width="25"
//                     height="30"
//                     decoding="async"
//                     data-nimg="1"
//                     style={{ color: "transparent" }}
//                     src="/assets/icons/copy.svg"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="flex-1/2">
//               <div className="flex justify-center translate-y-[35px]">
//                 <div className="flex gap-[0.6rem]">
//                   <div className="w-[5.175rem] h-[8.006rem] flex items-center justify-center p-[0.5%] bg-black rounded-[0.323rem] border-[1px]">
//                     <p className="text-[6.469rem] font-mono font-bold">
//                       0
//                     </p>
//                   </div>
//                   <div className="w-[5.175rem] h-[8.006rem] flex items-center justify-center p-[0.5%] bg-black rounded-[0.323rem] border-[1px]">
//                     <p className="text-[6.469rem] font-mono font-bold">
//                       0
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-center justify-center w-[3rem] h-[8.006rem] p-[0.5%] rounded-[0.323rem]">
//                   <span className="text-[7rem] font-mono font-bold">
//                     :
//                   </span>
//                 </div>
//                 <div className="flex gap-[0.6rem]">
//                   <div className="w-[5.175rem] h-[8.006rem] flex items-center justify-center p-[0.5%] bg-black rounded-[0.323rem] border-[1px]">
//                     <p className="text-[6.469rem] font-mono font-bold">
//                       0
//                     </p>
//                   </div>
//                   <div className="w-[5.175rem] h-[8.006rem] flex items-center justify-center p-[0.5%] bg-black rounded-[0.323rem] border-[1px]">
//                     <p className="text-[6.469rem] font-mono font-bold">
//                       0
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex flex-col gap-5 border-[#C4110C] border-[2px] items-center justify-center rounded-[20px] p-[8rem] max-w-[600px] p-[6rem]">
//                 <p className="text-4.8rem">
//                   PRESALE 1
//                 </p>
//                 <p className=" text-3.2rem">1 Saviour = 0.657 USDT</p>
//                 <p className=" text-2.4rem">
//                   Next Stage Price = 0.723 USDT
//                 </p>
//                 <p className=" text-2.4rem">
//                   Sold - $34,56,56,764/$50,00,00,000
//                 </p>
//                 <p className=" text-2.4rem">
//                   Raised - $34,56,56,764/$40,00,00,000
//                 </p>
//                 <div className="flex flex-col gap-1.9rem w-full mt-2rem">
//                   <input
//                     className="h-6rem bg-transparent rounded-20px text-1.6rem placeholder:text-[#808181] text-white  border-[1px] border-[#C4110C] p-0px_2.4rem outline-none"
//                     type="text"
//                     placeholder="Enter the amount (BNB)"
//                   />
//                   <input
//                     className="h-6rem bg-transparent rounded-20px text-1.6rem placeholder:text-[#808181] text-white  border-[1px] border-[#C4110C] p-0px_2.4rem outline-none"
//                     type="text"
//                     placeholder="Minimum Quantity to Buy"
//                   />
//                   <input
//                     className="h-6rem bg-transparent rounded-20px text-1.6rem placeholder:text-[#808181] text-white  border-[1px] border-[#C4110C] p-0px_2.4rem outline-none"
//                     type="text"
//                     placeholder="Maximum Quantity of Tokens"
//                   />
//                 </div>
//                 <div className="flex justify-center gap-2rem mt-1rem">
//                   <button className="bg-gradient-to-r from-smurai-grade-red to-smurai-grade-orange rounded-16.21px p-[10px_3.5rem] text-1.408rem  mt-4rem h-45px hover:scale-105 transition-all duration-300">
//                     Buy
//                   </button>
//                   <button className="bg-gradient-to-r from-smurai-grade-red to-smurai-grade-orange rounded-16.21px p-[10px_12px] text-1.408rem  mt-4rem h-45px w-145px hover:scale-105 transition-all duration-300">
//                     Claim Drop
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default IdoEvent;

// import Introduction from "./Introduction";
// import { BiSolidCopy } from "react-icons/bi";

// const IdoEvent = () => {
//   return (
//     <section className="relative h-[1300px]">
//       <div className="absolute inset-0 bg-[url('/assets/section3_bg_img.png')] bg-center opacity-10"></div>
//       <div className="relative z-10 h-full w-full">
//         <Introduction />
//         <div className="padding-x">
//           <h1 className="text-5xl text-center text-[#EF490F]">Participate in our IDO Event</h1>
//           <div className="flex flex-col md:flex-row items-start justify-center w-full">
//             <div className="flex flex-col items-center w-[50%] mt-2">
//               <p className="text-base">
//                 During our IDO event, you will gain early access to our
//                 revolutionary ecosystem, designed to empower everyone to share
//                 wealth and achieve success.
//               </p>
//               <div className="flex flex-col items-center justify-center">
//                 <div className="bg-[#EF490F] flex justify-center items-center w-32 h-20 rounded-xl">
//                   <p className="text-2xl">
//                     Token Info
//                   </p>
//                 </div>
//                 <div className="flex flex-col justify-center items-center gap-y-3 border-2 border-[#EF490F] rounded-[20px] p-10">
//                   <table className="w-full">
//                     <tbody className="text-xl flex flex-col gap-4 w-full">
//                       <tr className="w-full">
//                         <td className="w-full">Total Token Supply</td>
//                         <td className="text-[#EF490F] w-full text-left text-nowrap">
//                           20%
//                         </td>
//                       </tr>
//                       <tr className="w-full">
//                         <td className="w-full">Soft Cap</td>
//                         <td className="text-[#EF490F] text-left w-full text-nowrap">
//                           200 BNB
//                         </td>
//                       </tr>
//                       <tr className="w-full">
//                         <td className="w-full">Initial exchange rate</td>
//                         <td className="text-[#EF490F] text-left w-full text-nowrap">
//                           1 BNB
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                   <p className=" text-xl ml-6 mr-6">
//                     Recommended Referral Commission
//                   </p>
//                   <table className="w-full">
//                     <tbody className=" text-2rem flex flex-col gap-[1.2rem] w-full">
//                       <tr className="w-full">
//                         <td className="w-full">1st Generation</td>
//                         <td className="text-[#EF490F] text-left w-full text-nowrap">
//                           5%
//                         </td>
//                       </tr>
//                       <tr className="w-full">
//                         <td className="w-full">2nd Generation</td>
//                         <td className="text-[#EF490F] text-left w-full">2%</td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//               <button className="bg-[#EF490F] rounded-2xl p-3 text-lg mt-5 h-10 w-40 text-wrap">
//                 Connect Wallet
//               </button>
//               <p className="text-xl text-center m-16">
//                 Become an affiliate &amp; Earn 7% as Commission!
//               </p>
//               <div className="flex justify-center items-center gap-[1.5rem] w-[95%]">
//                 <div className="flex justify-between h-10 w-full border-[1px] border-[#EF490F] rounded-[20px] ">
//                   <input
//                     className="w-full bg-transparent text-lg placeholder:text-[#808181] p-4 border-none outline-none"
//                     type="text"
//                     placeholder="Generate a unique referral link"
//                   />
//                   <button className="bg-[#EF490F] p-[0px_1.5rem] text-lg m-[2px] rounded-2xl hover:scale-105 transition-all duration-300">
//                     Generate
//                   </button>
//                 </div>
//                 <div className="cursor-pointer">
//                 <BiSolidCopy className="text-xl" />
//                 </div>
//               </div>
//             </div>
//             <div>
//               <div className="flex justify-center translate-y-[35px]">
//                 <div className="flex gap-[0.6rem]">
//                   <div className="w-[5.175rem] h-[8.006rem] flex items-center justify-center p-[0.5%] bg-black rounded-[0.323rem] border-[1px]">
//                     <p className="text-[6.469rem] font-mono font-bold">
//                       0
//                     </p>
//                   </div>
//                   <div className="w-[5.175rem] h-[8.006rem] flex items-center justify-center p-[0.5%] bg-black rounded-[0.323rem] border-[1px]">
//                     <p className="text-[6.469rem] font-mono font-bold">
//                       0
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-center justify-center w-[3rem] h-[8.006rem] p-[0.5%] rounded-[0.323rem]">
//                   <span className="text-[7rem] font-mono font-bold">
//                     :
//                   </span>
//                 </div>
//                 <div className="flex gap-[0.6rem]">
//                   <div className="w-[5.175rem] h-[8.006rem] flex items-center justify-center p-[0.5%] bg-black rounded-[0.323rem] border-[1px]">
//                     <p className="text-[6.469rem] font-mono font-bold">
//                       0
//                     </p>
//                   </div>
//                   <div className="w-[5.175rem] h-[8.006rem] flex items-center justify-center p-[0.5%] bg-black rounded-[0.323rem] border-[1px]">
//                     <p className="text-[6.469rem] font-mono font-bold">
//                       0
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex flex-col gap-3 border-[#EF490F] border-[2px] items-center justify-center rounded-[20px]  max-w-[600px] p-[6rem]">
//                 <p className="text-5xl font-bold text-[#EF490F]">
//                   PRESALE 1
//                 </p>
//                 <p className="text-2xl">1 Saviour = 0.657 USDT</p>
//                 <p className="text-2.4rem">
//                   Next Stage Price = 0.723 USDT
//                 </p>
//                 <p className="text-2.4rem">
//                   Sold - $34,56,56,764/$50,00,00,000
//                 </p>
//                 <p className="text-2.4rem">
//                   Raised - $34,56,56,764/$40,00,00,000
//                 </p>
//                 <div className="flex flex-col gap-4 w-full mt-3">
//                   <input
//                     className="h-10 bg-transparent rounded-xl text-lg placeholder-[#808181] border p-1 border-[#EF490F] outline-none"
//                     type="text"
//                     placeholder="Enter the amount (BNB)"
//                   />
//                   <input
//                     className="h-10 bg-transparent rounded-xl text-lg placeholder-[#808181] border p-1 border-[#EF490F] outline-none"
//                     type="text"
//                     placeholder="Minimum Quantity to Buy"
//                   />
//                   <input
//                     className="h-10 bg-transparent rounded-xl text-lg placeholder-[#808181] border p-1 border-[#EF490F] outline-none"
//                     type="text"
//                     placeholder="Maximum Quantity of Tokens"
//                   />
//                 </div>
//                 <div className="flex justify-center gap-2 mt-2">
//                   <button className="rounded-xl text-lg bg-[#EF490F] w-[136px] h-[36px] p-auto">
//                     Buy
//                   </button>
//                   <button className="rounded-xl text-lg bg-[#EF490F] w-[136px] h-[36px] p-auto">
//                     Claim Drop
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default IdoEvent;

import Introduction from "./Introduction";
import { BiSolidCopy } from "react-icons/bi";

const IdoEvent = () => {
  return (
    <section className="relative h-auto md:h-[1300px]">
      <div className="absolute inset-0 bg-[url('/assets/section3_bg_img.png')] bg-center opacity-10"></div>
      <div className="relative z-10">
        <Introduction />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl text-center text-[#EF490F]">
            Participate in our IDO Event
          </h1>
          <div className="flex flex-col md:flex-row items-start justify-center">
            <div className="w-full md:w-1/2 flex flex-col items-center mt-2">
              <p className="text-base text-center md:text-left">
                During our IDO event, you will gain early access to our
                revolutionary ecosystem, designed to empower everyone to share
                wealth and achieve success.
              </p>
              <div className="flex flex-col items-center justify-center mt-4">
                <div className="bg-[#EF490F] flex justify-center items-center w-32 h-20 rounded-xl">
                  <p className="text-2xl">Token Info</p>
                </div>
                <div className="border-2 border-[#EF490F] rounded-[20px] p-5 mt-4 w-full">
                  <table className="w-full">
                    <tbody>
                      <tr>
                        <td>Total Token Supply</td>
                        <td className="text-[#EF490F] text-right">20%</td>
                      </tr>
                      <tr>
                        <td>Soft Cap</td>
                        <td className="text-[#EF490F] text-right">200 BNB</td>
                      </tr>
                      <tr>
                        <td>Initial exchange rate</td>
                        <td className="text-[#EF490F] text-right">1 BNB</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-xl mt-4">
                    Recommended Referral Commission
                  </p>
                  <table className="w-full">
                    <tbody>
                      <tr>
                        <td>1st Generation</td>
                        <td className="text-[#EF490F] text-right">5%</td>
                      </tr>
                      <tr>
                        <td>2nd Generation</td>
                        <td className="text-[#EF490F] text-right">2%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <button className="bg-[#EF490F] rounded-2xl p-3 text-lg mt-5">
                  Connect Wallet
                </button>
                <p className="text-xl text-center md:text-left my-10 text-[#EF490F] font-bold">
                  Become an affiliate &amp; Earn 7% as Commission!
                </p>
                <div className="flex justify-center items-center gap-3 w-full">
                  <div className="flex flex-1 border-[1px] border-[#EF490F] rounded-[20px]">
                    <input
                      className="w-full bg-transparent text-lg placeholder-[#808181] p-4 border-none outline-none"
                      type="text"
                      placeholder="Generate a unique referral link"
                    />
                    <button className="bg-[#EF490F] p-[0px_1.5rem] text-lg m-[2px] rounded-2xl hover:scale-105 transition-all duration-300">
                      Generate
                    </button>
                  </div>
                  <div className="cursor-pointer">
                    <BiSolidCopy className="text-xl" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 my-10">
              <div className="flex justify-center md:translate-y-[35px]">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-14 md:w-20 md:h-32 flex items-center justify-center bg-black rounded-[0.323rem] border-[1px]">
                    <p className="text-[6.469rem] font-mono font-bold">0</p>
                  </div>
                  <div className="w-10 h-14 md:w-20 md:h-32 flex items-center justify-center bg-black rounded-[0.323rem] border-[1px]">
                    <p className="text-[6.469rem] font-mono font-bold">0</p>
                  </div>
                </div>
                <div className="flex items-center justify-center w-[3rem] h-14 md:w-12 md:h-32">
                  <span className="text-[7rem] font-mono font-bold">:</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-14 md:w-20 md:h-32 flex items-center justify-center bg-black rounded-[0.323rem] border-[1px]">
                    <p className="text-[6.469rem] font-mono font-bold">0</p>
                  </div>
                  <div className="w-10 h-14 md:w-20 md:h-32 flex items-center justify-center bg-black rounded-[0.323rem] border-[1px]">
                    <p className="text-[6.469rem] font-mono font-bold">0</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 border-[#EF490F] border-[2px] items-center justify-center rounded-[20px] p-6 mt-6 md:mt-0">
                <p className="text-4xl font-bold text-[#EF490F]">PRESALE 1</p>
                <p className="text-xl">1 Saviour = 0.657 USDT</p>
                <p className="text-xl">Next Stage Price = 0.723 USDT</p>
                <p className="text-xl">Sold - $34,56,56,764/$50,00,00,000</p>
                <p className="text-xl">Raised - $34,56,56,764/$40,00,00,000</p>
                <div className="flex flex-col gap-4 w-full mt-6">
                  <input
                    className="h-10 bg-transparent rounded-xl text-lg placeholder-[#808181] border p-1 border-[#EF490F] outline-none"
                    type="text"
                    placeholder="Enter the amount (BNB)"
                  />
                  <input
                    className="h-10 bg-transparent rounded-xl text-lg placeholder-[#808181] border p-1 border-[#EF490F] outline-none"
                    type="text"
                    placeholder="Minimum Quantity to Buy"
                  />
                  <input
                    className="h-10 bg-transparent rounded-xl text-lg placeholder-[#808181] border p-1 border-[#EF490F] outline-none"
                    type="text"
                    placeholder="Maximum Quantity of Tokens"
                  />
                </div>
                <div className="flex justify-center gap-2 mt-4">
                  <button className="rounded-xl text-lg bg-[#EF490F] w-[136px] h-[36px]">
                    Buy
                  </button>
                  <button className="rounded-xl text-lg bg-[#EF490F] w-[136px] h-[36px]">
                    Claim Drop
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdoEvent;
