import HeroSection from "./components/hero-section";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="relative h-[300vh]">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full object-cover h-screen"
        autoPlay
        loop
        muted
      >
        {/* Corrected the video path */}
        <source src="/background_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay content */}
      <div className="relative z-10 md:mx-14 mx-8">
        <Navbar />
        <HeroSection />
      </div>

      {/* Optional: Add a dark overlay over the video*/}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
    </div>
  );
}