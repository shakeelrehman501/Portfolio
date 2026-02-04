import Navbar from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full font-poppins">
      <Navbar/>
      <Hero/>
    </div>
  );
}
