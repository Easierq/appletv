"use client";

// import { Button } from "../components/button";
// import { Container } from "../components/container";
import { Header } from "../components/header";
import { Hero } from "../components/section/hero";
import { Usps } from "../components/section/usps";
import { VideoCarousel } from "../components/section/video-carousel";

export default function MainPage() {
  return (
    <>
      <Header />
      <main>
        <div className="relative z-10 bg-background">
          <Hero />
          <Usps />
        </div>
        <VideoCarousel />
        {/* <div className="h-[300vh]" /> */}
      </main>
    </>
  );
}
