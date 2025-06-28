'use client';

import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Heart, Coffee, BookOpen } from 'lucide-react';
import Image from 'next/image';

const education = [
  {
    degree: "M.S. Information Technology",
    school: "University of New South Wales",
    year: "2024",
    description: "Specialized in Information Technology and Software Engineering"
  },
  {
    degree: "B.S. Information Science And Technology",
    school: "Sanda University",
    year: "2012",
    description: "Major in Information Science and Technology"
  }
];

const interests = [
  {
    icon: Coffee,
    title: "Road Trip",
    description: "Love exploring new places and experiencing different cultures through travel"
  },
  {
    icon: BookOpen,
    title: "Cultural Explorations",
    description: "Passionate about learning about different cultures and traditions"
  },
  {
    icon: Heart,
    title: "International Food",
    description: "Enthusiastic about trying and exploring international cuisines"
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know me better - my background, education, and what drives my passion for technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Personal Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-600">
                  <Image
                    src="/avatar.jpg"
                    alt="Chao Yan"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Personal Information
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">Software Engineer</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="text-blue-600 dark:text-blue-400" size={20} />
                  <div>
                    <span className="text-gray-600 dark:text-gray-400 text-sm">Location</span>
                    <p className="text-gray-900 dark:text-white font-medium">Sydney, Australia</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div>
                    <span className="text-gray-600 dark:text-gray-400 text-sm"></span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <GraduationCap className="text-blue-600 dark:text-blue-400" size={20} />
                  <div>
                    <span className="text-gray-600 dark:text-gray-400 text-sm">Education</span>
                    <p className="text-gray-900 dark:text-white font-medium">Master's Degree</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                My Story
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  I&apos;m a passionate software engineer with hands-on experience spanning from traditional banking technology to modern full-stack development. 
                  My journey began in the banking sector where I led technology transformation projects and managed development lifecycles.
                </p>
                <p>
                  I completed my Master&apos;s degree in Information Technology at the University of New South Wales, where I developed several comprehensive 
                  projects including a car space rental platform, interactive learning system, and social networking application. These projects showcased my expertise 
                  in React, TypeScript, Node.js, and cloud technologies.
                </p>
                <p>
                  I believe in writing clean, maintainable code and staying current with the latest technologies. When I&apos;m not coding, you can find me exploring 
                  new places through road trips, discovering international cuisines, or playing tennis. I&apos;m always eager to learn new technologies and take on challenging projects.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Education & Interests */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Education */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="border-l-4 border-blue-600 pl-4"
                  >
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {edu.school}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      {edu.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Interests & Hobbies
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <interest.icon className="text-blue-600 dark:text-blue-400" size={24} />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {interest.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {interest.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Values */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
              <h3 className="text-2xl font-bold mb-4">My Values</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Continuous Learning & Growth</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Clean Code & Best Practices</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>User-Centered Design</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Collaboration & Teamwork</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 