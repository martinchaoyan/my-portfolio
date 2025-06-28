'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Car Space Renting Platform",
    description: "A comprehensive car space rental platform with React frontend, Java microservices, MySQL database, and AWS integration. Features location intelligence with Google Maps API, authentication system, and real-time booking capabilities.",
    image: "/api/placeholder/400/250",
    technologies: ["React", "TypeScript", "Java", "Spring Boot", "MySQL", "Redis", "AWS", "Material UI", "Docker"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    type: "University Project"
  },
  {
    id: 2,
    title: "Interactive Learning Platform",
    description: "Real-time interactive learning platform with quiz synchronization, AI chat features using OpenAI API, and WebSocket integration. Built with React, Node.js, and MongoDB for scalable educational experiences.",
    image: "/api/placeholder/400/250",
    technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "TypeScript", "WebSocket", "OpenAI API"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    type: "University Project"
  },
  {
    id: 3,
    title: "PetPals Meetup",
    description: "Social networking platform for pet owners with Redux state management, PostgreSQL database, and AWS S3 integration for pet image uploads. Features responsive design with Tailwind CSS.",
    image: "/api/placeholder/400/250",
    technologies: ["React", "Redux Toolkit", "PostgreSQL", "Tailwind CSS", "AWS S3", "Node.js"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    type: "University Project"
  },
  {
    id: 4,
    title: "Authentication System",
    description: "Centralized authentication system using React Context and JWT with role-based access control and user preferences management. Integrated with microservices architecture.",
    image: "/api/placeholder/400/250",
    technologies: ["React Context", "JWT", "Role-based Access", "OAuth", "Microservices"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    type: "University Project"
  },
  {
    id: 5,
    title: "Location Intelligence System",
    description: "Geospatial location intelligence system with Google Places and Maps APIs integration. Features Polygon Query optimization, geospatial indexing, and search caching for improved booking conversion.",
    image: "/api/placeholder/400/250",
    technologies: ["Google Maps API", "Google Places API", "Geospatial Indexing", "Polygon Query", "Search Caching"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    type: "University Project"
  },
  {
    id: 6,
    title: "Database Optimization System",
    description: "Advanced database optimization system with strategic indexing, connection pooling, and caching mechanisms. Implemented for high-performance data operations.",
    image: "/api/placeholder/400/250",
    technologies: ["MySQL", "PostgreSQL", "Redis", "Database Indexing", "Connection Pooling", "Caching"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    type: "University Project"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Project Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of university projects that showcase my skills in modern web development, 
            full-stack applications, and cloud technologies.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-lg font-medium">{project.title}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Other Projects
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="aspect-video bg-gradient-to-br from-green-500 to-blue-600 relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-medium">{project.title}</span>
                </div>
              </div>
              
              <div className="p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 