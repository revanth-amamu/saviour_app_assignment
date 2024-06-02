// import Link from "next/link";
// import { BiChevronDown } from "react-icons/bi";
// import { BiAlignLeft } from "react-icons/bi";

// const Navbar = () => {
//   return (
//     <header className="padding-x py-8 absolute z-10 w-full">
//         <nav className="flex justify-between items-center">
//         {/* hamburger memu */}
//           <div>
//             <BiAlignLeft className="text-3xl" />
//           </div>
//           {/* logo */}
//           <div className="flex items-center">
//             <img className="w-20" src="/assets/logo_image.png" alt="logo" />
//             <h1 className="text-3xl font-bold">Saviour</h1>
//           </div>

//           {/* links */}
//           <div className="flex items-center bg-black text-white gap-6 p-4 rounded-2xl text-lg">
//             <Link href="/">Home</Link>
//             <Link href="/">100</Link>
//             <Link href="/">Tokenomics</Link>
//             <Link href="/">Roadmap</Link>
//             <div className="flex items-center">
//               <Link href="/">Coming Soon</Link>
//               <BiChevronDown className="text-2xl" />
//             </div>
//           </div>

//           {/* button */}
//           <div>
//             <button className="bg-[#F05733] text-white p-4 rounded-3xl text-sm">
//               Connect Wallet
//             </button>
//           </div>

//         </nav>
//     </header>
//   );
// };

// export default Navbar;

'use client'
import Link from "next/link";
import { BiChevronDown, BiAlignLeft } from "react-icons/bi";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="px-4 py-4 md:py-8 absolute z-10 w-full md:px-8">
      <nav className="flex justify-between items-center">
        {/* Hamburger menu */}
        <div className="md:hidden">
          <BiAlignLeft className="text-3xl cursor-pointer" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
        </div>
        {/* Logo */}
        <div className="flex items-center">
          <img className="w-16 md:w-20" src="/assets/logo_image.png" alt="logo" />
          <h1 className="text-xl md:text-3xl md:font-bold ">Saviour</h1>
        </div>

        {/* Links for larger screens */}
        <div className="hidden md:flex items-center bg-black text-white gap-6 p-4 rounded-2xl text-lg">
          <Link href="/" className="hover:text-[#F05733]">Home</Link>
          <Link href="/" className="hover:text-[#F05733]">100</Link>
          <Link href="/" className="hover:text-[#F05733]">Tokenomics</Link>
          <Link href="/" className="hover:text-[#F05733]">Roadmap</Link>
          <div className="flex items-center">
            <Link href="/" className="hover:text-[#F05733]">Coming Soon</Link>
            <BiChevronDown className="text-2xl" />
          </div>
        </div>

        {/* Button */}
        <div>
          <button className="bg-[#F05733] px-3 py-2 md:px-4 md:py-2 rounded-3xl text-sm md:text-base">
            Connect Wallet
          </button>
        </div>
      </nav>

      {/* Links for smaller screens */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col bg-black text-white gap-4 p-4 rounded-2xl text-base">
          <Link href="/" className="hover:text-[#F05733]">Home</Link>
          <Link href="/" className="hover:text-[#F05733]">100</Link>
          <Link href="/" className="hover:text-[#F05733]">Tokenomics</Link>
          <Link href="/" className="hover:text-[#F05733]">Roadmap</Link>
          <div className="flex items-center">
            <Link href="/" className="hover:text-[#F05733]">Coming Soon</Link>
            <BiChevronDown className="text-xl" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
