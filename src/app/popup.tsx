"use client";
import Lottie from "lottie-react";
import animationData from "./Animation - 1736268207260.json";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
export default function Popup() {
  const date1 = new Date();
  const date2 = new Date("2025-01-31");
  date1.toLocaleString("en", { timeZone: "Asia/Kolkata" });
  date2.toLocaleString("en", { timeZone: "Asia/Kolkata" });

  const differenceInMilliseconds = date2.getTime() - date1.getTime();

  const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
  // const differenceInSeconds = Math.floor(differenceInMilliseconds / 1000);
  // const differenceInMinutes = Math.floor(differenceInSeconds / 60);
  // const differenceInHours = Math.floor(differenceInMinutes / 60);
  // const differenceInDays = Math.floor(differenceInHours / 24);

  // console.log(differenceInDays);
  // console.log(differenceInDays >= -1);

  const [isOpen, setIsOpen] = useState(false);
  //   console.log(isOpen);
  const handleOnClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);
    setTimeout(() => {
      setIsOpen(false);
    }, Number(timer) + 10000);
    // console.log(timer);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="flex flex-row min-h-svh justify-center items-center subpixel-antialiased text-lg font-medium tracking-wide">
      {isOpen && (
        <div className="flex flex-col backdrop-blur-3xl bg-white/80 dark:bg-gray-900/80 border-solid border-2 border-black dark:border-white rounded-lg  w-80 h-80 ">
          <button
            className="text-black dark:text-white self-end pr-2 pt-2 z-50 "
            onClick={handleOnClick}
          >
            <AiOutlineCloseCircle size={30} />
          </button>
          <div className=" relative flex flex-col items-center ">
            <Lottie
              animationData={animationData}
              className="flex justify-center items-center h-2/3 w-2/3 -mt-8"
              loop={true}
              autoPlay={true}
            />
            <div className="text-black dark:text-white">
              {differenceInDays >= 0
                ? differenceInDays >= 0 && differenceInDays <= 1
                  ? "Tomorrow is the day"
                  : differenceInDays >= 0 && differenceInDays < 1
                  ? "Today's the day!"
                  : differenceInDays + " days left"
                : "Thanks for joining us."}
              {/* {
                differenceInDays >= 0
                  ? differenceInDays < 1
                    ? "Today's the day!" // Covers 0 <= differenceInDays < 1
                    : differenceInDays <= 1 // Correctly checks for tomorrow.
                    ? "Tomorrow is the day" // differenceInDays ==1
                    : Math.floor(differenceInDays) + " days left" // Handles > 1
                  : "Thanks for joining us." // Handles differenceInDays < 0
              } */}
            </div>
            <div className="text-black dark:text-white">
              <p>
                {differenceInDays >= 0
                  ? "You are invited."
                  : "Hope you enjoyed the party."}
              </p>
            </div>
            <div className="relative flex items-center justify-center">
              <Link
                href="https://maps.app.goo.gl/SZd4JFfkjpb2LdTx9"
                className="underline-offset-3 "
                target="_blank"
              >
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-2"
                >
                  Locate Me
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
