"use client";
import Image from "next/image";
import Pic1 from "@/public/images/1.jpg";
import Pic2 from "@/public/images/2.jpeg";
import { useEffect } from "react";
import Lenis from "lenis";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="relative h-[200vh]">
      <Section1 />
      <Section2 />
    </main>
  );
}

const Section1 = () => {
  return (
    <div className="  h-screen bg-[#C72626] text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh]">
      <p>Scroll Perspective</p>
      <div className="flex gap-4">
        <p>Section</p>
        <div className="relative w-[12.5vw]">
          <Image src={Pic1} alt="img" placeholder="blur" fill />
        </div>
        <p>Transition</p>
      </div>
    </div>
  );
};

const Section2 = () => {
  return (
    <div className="relative h-screen">
      <Image src={Pic2} alt="img" placeholder="blur" fill />
    </div>
  );
};
