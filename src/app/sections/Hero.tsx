"use client";
import { Stars } from "@react-three/drei";
import { FlipWords } from "../components/ui/flip-words";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";

import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

const COLORS_TOP = ["#1E67C6"];

const HeroSection = () => {
  const color = useMotionValue(COLORS_TOP[0]);
  const words = ["better", "cute", "modern"];

  const backgroundImage = useMotionTemplate`radial-gradient(160% 160% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative xl:h-[calc(100dvh-4rem)] px-4 pb-32 py-14 md:py-4 text-gray-200"
    >
      <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 sm:py-10 lg:px-8 z-40">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img
              alt=""
              src="/imgs/Saly-10.png"
              className="absolute inset-0 h-full w-full object-contain"
            />
          </div>

          <div className="lg:py-24 text-center md:text-start">
            <h2 className="text-3xl font-bold sm:text-5xl leading-snug sm:leading-snug">
              Build
              <FlipWords words={words} />
              projects
              <br />
              with <span className="text-sky-500">TechFusion</span>
            </h2>

            <p className="mt-4 text-gray-400 text-center md:text-left">
              A small crew of creative, young individuals based in Metro Manila
              who work on turning ideas for capstone projects into reality.
            </p>

            <a href="#services">
              <motion.button
                style={{
                  border,
                  boxShadow,
                }}
                whileHover={{
                  scale: 1.015,
                }}
                whileTap={{
                  scale: 0.985,
                }}
                className="mt-8 mx-auto md:mx-0 group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
              >
                Services
                <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
              </motion.button>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
};

export default HeroSection;
