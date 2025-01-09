"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  let items = [
    "Monday - 7th",
    "Tuesday - 8th",
    "Wensday - 9th",
    "Thursday - 10th",
    "Friday - 11th",
  ];

  const [showMore, setShowMore] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setShowMore((prev) => (prev === index ? null : index));
  };

  return (
    <>
      {items.length === 0 && <p>No items to display</p>}
      <ul className="flex text-center justify-center px-5">
        {items.map((item, index) => (
          <li key={index} className="w-4/5 px-2">
            <div className="border-2 border-gray-300 rounded-lg p-5 flex flex-col items-center my-5">
              <p className="font-bold">{item}</p>
              <img className="max-w-60" src="/icons/09d@2x.png" alt="weather" />
              <p>9:00AM 80 80</p>

              <button
                key={index}
                onClick={() => toggleDropdown(index)}
                className="bg-blue-400 text-white px-4 py-2 rounded-lg mt-4"
              >
                Show More
              </button>
            </div>
            {showMore === index && (
              <ul className="border-2 border-gray-300 rounded-lg flex flex-col items-center">
                <li className="flex flex-row text-center items-center justify-center w-4/5 bg-black">
                  <img src="/icons/09d@2x.png" className="w-16" />
                  <p>9:00AM 80 80</p>
                </li>
                <li className="flex flex-row text-center items-center justify-center">
                  <img src="/icons/09d@2x.png" className="w-16" />
                  <p>9:00AM 80 80</p>
                </li>
                <li className="flex flex-row text-center items-center justify-center">
                  <img src="/icons/09d@2x.png" className="w-16" />
                  <p>9:00AM 80 80</p>
                </li>
                <li className="flex flex-row text-center items-center justify-center">
                  <img src="/icons/09d@2x.png" className="w-16" />
                  <p>9:00AM 80 80</p>
                </li>
                <li className="flex flex-row text-center items-center justify-center">
                  <img src="/icons/09d@2x.png" className="w-16" />
                  <p>9:00AM 80 80</p>
                </li>
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
