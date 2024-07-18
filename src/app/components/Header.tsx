"use client";
import React, { useState } from "react";
import { IconCategoryMinus } from "@tabler/icons-react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="backdrop-blur bg-slate-900/75 border-b border-slate-600 sticky top-0 z-50">
      <div className="container px-6 py-2 mx-auto">
        <div className="lg:flex lg:items-center">
          <div className="flex items-center justify-between">
            <a
              className="inline-flex items-center gap-x-2 text-xl font-semibold text-sky-500"
              href="#"
            >
              <IconCategoryMinus className="h-12 w-12" />
              TechFusion
            </a>

            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                {!isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div
            className={`${
              isOpen
                ? "translate-x-0 opacity-100 top-full backdrop-blur bg-slate-900/75"
                : "opacity-0 -translate-x-full"
            } absolute inset-x-0 z-20 flex-1 w-full px-6 py-4 transition-all duration-300 ease-in-out lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-between`}
          >
            <div className="flex flex-col text-gray-600 capitalize dark:text-gray-300 lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center">
              <a
                href="#team"
                className="mt-2 text-slate-400 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-sky-900 dark:hover:text-sky-400"
              >
                Team
              </a>
              <a
                href="#services"
                className="mt-2 text-slate-400 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-sky-900 dark:hover:text-sky-400"
              >
                Services
              </a>
              <a
                href="#contact"
                className="mt-2 text-slate-400 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-sky-900 dark:hover:text-sky-400"
              >
                Contact
              </a>
            </div>

            <div className="flex justify-center mt-6 lg:flex lg:mt-0 lg:-mx-2">
              <a
                href="https://www.facebook.com/julia.corrales.758"
                target="_blank"
                rel="noreferrer"
                className="mx-2 text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22.5 12C22.5 6.20101 17.799 1.5 12 1.5C6.20101 1.5 1.5 6.20101 1.5 12C1.5 16.9915 5.229 21.1365 10.062 22.299V14.625H7.19702V12H10.062V9.71398C10.062 6.84548 11.6655 5.43798 14.249 5.43798C15.4828 5.43798 16.7805 5.66748 16.7805 5.66748V8.50248H15.346C13.9365 8.50248 13.5 9.39498 13.5 10.312V12H16.6425L16.1175 14.625H13.5V22.299C18.333 21.1365 22.5 16.9915 22.5 12Z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
