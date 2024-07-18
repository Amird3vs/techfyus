"use client";
import React, { useEffect, useRef } from "react";
import Feature from "@/app/components/ui/Feature";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  IconRocket,
  IconTerminal2,
  IconFilters,
  IconNotes,
  IconFile3d,
  IconFileCertificate,
  IconFriends,
  IconHeartHandshake,
  IconPencilPlus,
} from "@tabler/icons-react";
import ServicesItems from "@/prjtData/ServicesItems.json";

const iconMapping = {
  IconRocket: IconRocket,
  IconTerminal2: IconTerminal2,
  IconFilters: IconFilters,
  IconNotes: IconNotes,
  IconFile3d: IconFile3d,
  IconFileCertificate: IconFileCertificate,
  IconFriends: IconFriends,
  IconHeartHandshake: IconHeartHandshake,
  IconPencilPlus: IconPencilPlus,
} as const;

type IconKeys = keyof typeof iconMapping;

const ServiceSection = () => {
  const detailsRefs = useRef<(HTMLDetailsElement | null)[]>([]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });

    const handleToggle = (index: number) => {
      detailsRefs.current.forEach((ref, i) => {
        if (i !== index && ref) {
          ref.removeAttribute("open");
        }
      });
    };

    detailsRefs.current.forEach((ref, i) => {
      if (ref) {
        ref.addEventListener("click", () => handleToggle(i));
      }
    });
  }, []);

  return (
    <section
      id="services"
      className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-32"
      data-aos="fade-right"
    >
      <div className="flex flex-row items-center gap-7">
        <h1 className="font-black text-[#191919] dark:text-[#f3f3f3] text-[2.5rem] whitespace-nowrap">
          Our Services<span className="text-sky-500">.</span>
        </h1>
        <div className="header_line__AkXvu flex-grow"></div>
      </div>
      <p className="text-[#ADB7BE] mb-12 mt-2">
        At TechFusion, we aim to assist college students with thesis or capstone
        projects, offering support in documentation, system development, and
        personalized guidance.
      </p>
      <div className="space-y-4">
        {ServicesItems.map(({ title, items }, index) => (
          <details
            key={title}
            className="group rounded-lg border border-gray-300 p-6 transition-all duration-500"
            ref={(el) => {
              detailsRefs.current[index] = el;
            }}
            open={index === 0}
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-[#f3f3f3]">
              <h2 className="font-medium">{title}</h2>
              <span className="relative size-5 shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 size-5 opacity-100 group-open:opacity-0 transition-opacity duration-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 size-5 opacity-0 group-open:opacity-100 transition-opacity duration-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </summary>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 pt-6 max-w-7xl mx-auto">
              {items.map((feature, index) => {
                const IconComponent = iconMapping[feature.icon as IconKeys];
                return (
                  <Feature
                    key={feature.title}
                    {...feature}
                    index={index}
                    icon={<IconComponent />}
                  />
                );
              })}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
