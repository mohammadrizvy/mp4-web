import React, { useState, useRef } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaGlobe,
  FaEnvelope,
  FaPhone,
  FaVolumeUp,
  FaVolumeMute,
} from "react-icons/fa";
import "./App.css";
// import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Loading text */}
      {isLoading ? (
        <div className="absolute top-4 left-4 z-30">
          <p className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent animate-pulse">
            Loading amazing experience...
          </p>
        </div>
      ) : (
        <div className="absolute top-4 left-4 z-30 animate-fade-in">
          <p className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent animate-pulse">
            
          </p>
        </div>
      )}

      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted={false}
        src="/UntitledProject.mp4"
        onLoadedData={() => setIsLoading(false)}
        onPlay={() => setIsLoading(false)}
        onError={(e) => console.error("Error loading video:", e)}
      >
        <source src="/UntitledProject.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient overlay - reduced opacity */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40"></div>

      {/* Details section */}

      <div className="relative z-10  h-screen flex flex-col items-center justify-center text-white px-4 space-y-8 ">
        <div className="text-center  space-y-6 animate-fade-in">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
            MD EHSANUL HAQUE RIZVY
          </h1>
          <h2 className="text-4xl font-semibold tracking-wide animate-slide-up">
            Full-Stack Web Developer
          </h2>

          <div className="flex space-x-8 justify-center mt-6 animate-slide-up delay-300">
            <a href="#" className="social-icon-link">
              <FaLinkedin className="text-2xl hover:text-blue-500 transform hover:scale-125 transition-all" />
            </a>
            <a href="#" className="social-icon-link">
              <FaGithub className="text-2xl hover:text-purple-500 transform hover:scale-125 transition-all" />
            </a>
            <a href="#" className="social-icon-link">
              <FaGlobe className="text-2xl hover:text-green-500 transform hover:scale-125 transition-all" />
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={handleMuteToggle}
        className="absolute bottom-4 right-4 z-20 
          bg-gradient-to-r from-blue-500/30 to-purple-500/30
          hover:from-blue-500/40 hover:to-purple-500/40
          text-white px-6 py-3 rounded-full 
          backdrop-blur-md transition-all duration-300 
          hover:scale-105 flex items-center space-x-3 
          border border-white/10 shadow-lg"
      >
        {isMuted ? (
          <FaVolumeMute className="text-xl" />
        ) : (
          <div className="flex items-center space-x-2">
            <FaVolumeUp className="text-xl" />
            <span className="flex space-x-1">
              <span className="h-3 w-1 bg-white animate-sound-wave-1"></span>
              <span className="h-4 w-1 bg-white animate-sound-wave-2"></span>
              <span className="h-2 w-1 bg-white animate-sound-wave-3"></span>
            </span>
          </div>
        )}
      </button>

      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-20 bg-black">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}
    </div>
  );
};

export default App;
