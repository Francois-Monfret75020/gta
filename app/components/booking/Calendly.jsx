"use client";
import React, { useEffect } from "react";
import { InlineWidget } from "react-calendly";

const Calendly = () => {
  useEffect(() => {
    const handleScriptError = (event) => {
      if (event.target.src.includes("fbevents.js")) {
        console.error("Facebook events script blocked by client.");
      }
    };

    window.addEventListener("error", handleScriptError, true);

    return () => {
      window.removeEventListener("error", handleScriptError, true);
    };
  }, []);

  return (
    <div
      id="calendy-container"
      className="flex flex-col h-full items-center justify-center"
    >
      <div className="flex items-center justify-center">
        <h2 className="neon-text p-8 py-8 mt-4 font-bold tracking-tight text-xl neon-title-green ">
          Reserver un rendez-vous
        </h2>
      </div>

      <div className="w-full calendly:w-[1000px] mt-12">
        <InlineWidget
          url="https://calendly.com/monfret-f/30min"
          styles={{
            height: "900px",
          }}
        />
      </div>
    </div>
  );
};

export default Calendly;