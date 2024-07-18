"use client";
import React, { useEffect } from "react";
import TeamDetails from "@/prjtData/TeamDetails.json";
import AOS from "aos";
import "aos/dist/aos.css";

const TeamSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section
      id="team"
      className="place-content-center pt-16 pb-4 px-6 md:px-40"
      data-aos="fade-up"
    >
      <div className="flex flex-row items-center gap-7">
        <h1 className="font-black text-[#191919] dark:text-[#f3f3f3] text-[2.5rem] whitespace-nowrap">
          Meet the team<span className="text-sky-500">.</span>
        </h1>
        <div className="header_line__AkXvu flex-grow"></div>
      </div>
      <p className="text-[#ADB7BE] mb-12 mt-2">
        At TechFusion, our core team comprises just three essential members: two
        web developers and a project manager.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {TeamDetails.map((team, index) => (
          <div
            key={index}
            className="group relative block bg-black w-fit h-[450px]"
          >
            <img
              alt=""
              src={team.pic}
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity filter grayscale transition-filter duration-300 ease-in-out group-hover:opacity-50 group-hover:grayscale-0"
            />
            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-sky-500 bg-blue-100 w-fit p-[5px] rounded">
                {team.position}
              </p>
              <p className="text-xl font-bold text-white sm:text-2xl">
                {team.name}
              </p>
              <div className="mt-72 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-[-1rem] group-hover:opacity-100">
                  <p className="text-sm text-white">{team.desc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
