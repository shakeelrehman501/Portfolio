"use client";

import { projectsCardData, projectsCardType } from "@/lib/constants";
import Heading from "./ui/Heading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedItem } from "@/components/ui/AnimatedItem";

function ProjectCard({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl,
}: projectsCardType) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300  group">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
 
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold  text-gray-900 dark:text-gray-100 mb-3">
          {title}
        </h3>
        <p className="text-sm font-normal  text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium "
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <a
            href={liveUrl}
            className="flex-1 bg-gradient-to-r from-blue-600 to-violet-500 text-white py-2 rounded-lg text-center font-semibold  text-sm hover:shadow-lg hover:shadow-purple-500/50 transition-all"
          >
            Live Demo
          </a>
          <a
            href={githubUrl}
            className="flex-1 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 py-2 rounded-lg text-center font-semibold  text-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      className="bg-gray-50 dark:bg-gray-900 py-16 lg:py-20 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Heading
          heading="Featured"
          gradientHeading="Projects"
          paragraph="A showcase of my recent work and side projects"
        />

        {/* Projects Grid */}
        <AnimatedSection className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projectsCardData.map((project, index) => (
            <AnimatedItem type="slideUp" index={index} key={index}>
              <ProjectCard {...project} />
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}

export default Projects;
