"use client";
import React from "react";
import Heading from "./ui/Heading";
import { experienceCardData } from "@/lib/constants";
import { experienceCardType } from "@/lib/constants";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedItem } from "@/components/ui/AnimatedItem";

function ExperienceCard({
  logo,
  position,
  type,
  date,
  location,
  description,
  tags,
}: experienceCardType) {
  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-300 hover:shadow-xl">
      <div className="flex flex-col text-center lg:text-start   lg:flex-row gap-8">
        {/* Company Logo */}
        <div className="flex justify-center sm:flex-shrink-0  ">
          <div className=" bg-gray-50 text-[36px] text-primary  font-bold dark:text-white dark:bg-gray-700 p-6 rounded-xl shadow-md w-40 h-20 flex items-center justify-center">
            {logo}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold  text-gray-700 dark:text-gray-200 mb-2">
            {position}
          </h3>
          <p className="text:lg sm:text-xl font-normal  text-gray-600 dark:text-gray-400 mb-4">
            {type}
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6 text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <span>📅</span>
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span className="font-['Poppins']">{location}</span>
            </div>
          </div>
          <p className="text-base font-normal font-['Poppins'] text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            {description}
          </p>

          {/* Tags */}
          <AnimatedSection className="flex flex-wrap justify-center lg:justify-start space-y-5 gap-2">
            {tags.map((tag, index) => (
              <AnimatedItem key={tag} type="slideUp" index={index}>
                <span className="px-4 py-2 bg-gradient-to-t from-blue-600 to-violet-500 text-white rounded-full text-sm font-medium font-['Poppins']">
                  {tag}
                </span>
              </AnimatedItem>
            ))}
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}

function Experience() {
  return (
    <section
      id="experience"
      className="bg-white dark:bg-[#0d1117] py-16 lg:py-20 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Heading
          gradientHeading="Experience"
          paragraph="A collection of my work experience and the roles I have taken in this organization"
        />

        {/* Experience Cards */}
        <AnimatedSection className="space-y-6">
          {experienceCardData.map((data, index) => (
            <AnimatedItem key={index} type="slideLeft">
              <ExperienceCard {...data} />
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}

export default Experience;
