import React from "react";
import { IconCategoryMinus } from "@tabler/icons-react";

const Footer = () => {
  return (
    <footer className="">
      <div className="relative mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-32 lg:pt-10">
        <div className="absolute end-4 top-20 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
          <a
            className="inline-block rounded-full bg-sky-500 p-2 text-white shadow transition hover:bg-sky-700 sm:p-3 lg:p-4"
            href="#"
          >
            <span className="sr-only">Back to top</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>

        <div className="lg:flex lg:items-end lg:justify-between border-t-[2px] border-[#fff1] pt-10">
          <div>
            <div className="flex items-center text-sky-500">
              <IconCategoryMinus className="h-14 w-14 mr-2" />
              <h1 className="font-black text-[#191919] dark:text-[#f3f3f3] text-[1.5rem] whitespace-wrap">
                TechFusion Solutions
              </h1>
            </div>

            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
              A small crew of creative, young individuals based in Metro Manila
              who work on turning ideas for capstone projects into reality.
            </p>
          </div>

          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
            <li>
              <a
                className="text-gray-700 transition hover:text-sky-700/75"
                href="#team"
              >
                {" "}
                Team{" "}
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-sky-700/75"
                href="#services"
              >
                {" "}
                Services{" "}
              </a>
            </li>
          </ul>
        </div>

        <p className="mt-12 text-center text-sm text-gray-500">
          &copy; TechFusion Solutions 2024. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
