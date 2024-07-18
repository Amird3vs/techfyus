"use client";
import EmailCard from "@/app/components/ContactCards/Email";
import FacebookCard from "@/app/components/ContactCards/Facebook";
import PhoneCard from "@/app/components/ContactCards/Phone";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section
      id="contact"
      className="mx-auto max-w-screen-xl px-4 pb-10 sm:px-6 lg:px-32 lg:pt-12"
    >
      <div className="flex flex-row items-center gap-7">
        <h1 className="font-black text-[#191919] dark:text-[#f3f3f3] text-[2.5rem] whitespace-nowrap">
          Contact<span className="text-sky-500">.</span>
        </h1>
        <div className="header_line__AkXvu flex-grow"></div>
      </div>
      <p className="text-[#ADB7BE] mb-12 mt-2">
        You can reach us through the provided contact information below:
      </p>
      <ul className="contact-links grid gap-x-8 gap-y-12">
        <EmailCard />
        <PhoneCard />
        <FacebookCard />
      </ul>
    </section>
  );
};

export default ContactSection;
