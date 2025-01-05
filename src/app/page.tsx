"use client";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { useEffect, useRef, useState } from "react";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

import "@react-pdf-viewer/core/lib/styles/index.css";
import Image from "next/image";
import mobileImage from "./b_mob_2.png";
import Link from "next/link";
import { FaMapLocationDot } from "react-icons/fa6";

export default function Home() {
  // const audioRef = useRef<HTMLAudioElement>(null);
  // const [canPlay, setCanPlay] = useState(false);

  // useEffect(() => {
  //   const handleUserInteraction = () => {
  //     setCanPlay(true);
  //   };

  //   window.addEventListener("click", handleUserInteraction);
  //   window.addEventListener("touchstart", handleUserInteraction);

  //   return () => {
  //     window.removeEventListener("click", handleUserInteraction);
  //     window.removeEventListener("touchstart", handleUserInteraction);
  //   };
  // }, []);

  // const playSong = () => {
  //   if (audioRef.current && canPlay) {
  //     audioRef.current.play();
  //   }
  // };

  // useEffect(() => {
  //   if (canPlay) {
  //     setTimeout(() => {
  //       playSong();
  //     }, 10); // Play after 2 seconds
  //   }
  // }, [canPlay]);

  const [state, setState] = useState(40);
  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      if (state === 40) setState(50);
      else setState(40);
    }, 1000);

    //Clearing the interval
    return () => {
      clearInterval(interval);
    };
  }, [state]);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const tryToPlayAudio = () => {
      if (audioRef.current) {
        audioRef.current
          .play()
          .then(() => {
            console.log("Audio started successfully");
            // Remove the listener after successful playback
            window.removeEventListener("click", tryToPlayAudio);
            window.removeEventListener("touchstart", tryToPlayAudio);
          })
          .catch((error) => {
            console.error("Audio playback failed:", error);
          });
      }
    };

    // Attach minimal interaction handlers
    window.addEventListener("click", tryToPlayAudio);
    window.addEventListener("touchstart", tryToPlayAudio);

    return () => {
      window.removeEventListener("click", tryToPlayAudio);
      window.removeEventListener("touchstart", tryToPlayAudio);
    };
  }, []);

  // const defaultLayoutPluginInstance = defaultLayoutPlugin({
  //   toolbarPlugin: {
  //     fullScreenPlugin: {
  //       // Zoom to fit the screen after entering and exiting the full screen mode
  //       onEnterFullScreen: (zoom) => {
  //         zoom(SpecialZoomLevel.PageFit);
  //       },
  //       onExitFullScreen: (zoom) => {
  //         zoom(SpecialZoomLevel.PageFit);
  //       },
  //     },
  //   },
  // });

  return (
    <div>
      <div className="hidden sm:flex">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
          <div
            style={{
              width: "100%",
              height: "auto",
              border: "1px solid rgba(0, 0, 0, 0)",
            }}
          >
            {/* <div className=""> */}
            <Viewer
              fileUrl="./example.pdf"
              // plugins={[defaultLayoutPluginInstance]}
              theme="dark"
              defaultScale={1.7}
            />
            {/* <button hidden onClick={playSong}>
              {" "}
              </button>
              <audio ref={audioRef} src="/happy_birthday_song.mp3" /> */}
            {/* </div> */}
          </div>
        </Worker>
      </div>
      <div className="flex-col sm:hidden">
        {/* <button hidden onClick={playSong}>
          {" "}
        </button> */}
        <Image src={mobileImage} fill alt="text" />
        <button className="text-green-900 fixed bottom-0 right-0 z-50 p-4">
          <Link
            href="https://maps.app.goo.gl/SZd4JFfkjpb2LdTx9"
            className="underline-offset-3 "
            target="_blank"
          >
            <FaMapLocationDot size={state} />
          </Link>
        </button>
      </div>
      <audio ref={audioRef} src="/happy_birthday_song.mp3" />
    </div>
  );
}
