import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import IdoEvent from "./components/IdoEvent";
import Tokenomics from "./components/Tokenomics";
import RoadMap from "./components/RoadMap";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative text-white bg-black">
      <Navbar/>
      <Hero/>
      <IdoEvent/>
      <Tokenomics/>
      <RoadMap/>
      <Faq/>
      <Footer/>
    </main>
  );
}