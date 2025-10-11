import React from "react";
import { Github, ExternalLink, Code } from "lucide-react";

const ProjectCard = ({ project }) => {
    return (
        <div className="group bg-white border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
            <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                {project.image ? (
                    <img
                        loading="lazy"
                        src={project.image}
                        alt={`${project.title} preview`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="text-6xl font-bold text-gray-300">
                        {project.title.charAt(0)}
                    </div>
                )}
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-gray-600 transition-colors">
                    {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                        <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex space-x-4 mt-auto">
                    <a
                        href={project.github}
                        className="flex items-center text-gray-600 hover:text-black transition-colors text-sm"
                    >
                        <Github className="w-4 h-4 mr-1" /> Code
                    </a>
                    <a
                        href={project.demo}
                        className="flex items-center text-gray-600 hover:text-black transition-colors text-sm"
                    >
                        <ExternalLink className="w-4 h-4 mr-1" /> Demo
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
