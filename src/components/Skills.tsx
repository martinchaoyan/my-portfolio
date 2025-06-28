'use client';

import { motion } from 'framer-motion';
import { Code, Database, Cloud, Smartphone, Palette, Settings } from 'lucide-react';

const skillCategories = [
  {
    id: 1,
    name: "Frontend Development",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "Next.js", level: 88 },
      { name: "JavaScript", level: 90 },
      { name: "HTML5/CSS", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Material UI", level: 85 },
      { name: "Redux", level: 88 }
    ]
  },
  {
    id: 2,
    name: "Backend Development",
    icon: Database,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 88 },
      { name: "Java", level: 85 },
      { name: "Spring Boot", level: 82 },
      { name: "Python", level: 80 },
      { name: "GraphQL", level: 75 },
      { name: "REST APIs", level: 92 }
    ]
  },
  {
    id: 3,
    name: "Databases & Cloud",
    icon: Cloud,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "MySQL", level: 88 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 82 },
      { name: "Redis", level: 80 },
      { name: "AWS (S3, ECS)", level: 85 },
      { name: "Docker", level: 88 },
      { name: "GitHub Actions", level: 82 }
    ]
  },
  {
    id: 4,
    name: "Testing & Tools",
    icon: Smartphone,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Jest", level: 88 },
      { name: "React Testing Library", level: 85 },
      { name: "Supertest", level: 80 },
      { name: "Chai", level: 75 },
      { name: "Postman", level: 90 },
      { name: "Swagger", level: 82 }
    ]
  },
  {
    id: 5,
    name: "Design & UI/UX",
    icon: Palette,
    color: "from-indigo-500 to-purple-500",
    skills: [
      { name: "Figma", level: 80 },
      { name: "Responsive Design", level: 92 },
      { name: "User Experience", level: 85 },
      { name: "Material Design", level: 88 },
      { name: "CSS/Sass", level: 90 }
    ]
  },
  {
    id: 6,
    name: "Other Technologies",
    icon: Settings,
    color: "from-gray-500 to-slate-500",
    skills: [
      { name: "Git", level: 92 },
      { name: "Jira", level: 85 },
      { name: "Agile/Scrum", level: 90 },
      { name: "OAuth", level: 80 },
      { name: "Webpack", level: 75 },
      { name: "COBOL", level: 70 }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and expertise across various domains of software development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.name}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Additional Skills & Certifications
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">20+</div>
              <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">25+</div>
              <div className="text-gray-600 dark:text-gray-400">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">3</div>
              <div className="text-gray-600 dark:text-gray-400">Certifications</div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-600">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
              Certifications
            </h4>
            <div className="flex flex-wrap justify-center gap-4">
              {/* AWS Cloud Practitioner */}
              <div className="flex flex-col items-center">
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium text-center">AWS Cloud Practitioner</span>
              </div>
              {/* Azure AI Fundamentals */}
              <div className="flex flex-col items-center">
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium text-center">Azure AI Fundamentals</span>
              </div>
              {/* PMP */}
              <div className="flex flex-col items-center">
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium text-center">Project Management Professional (PMP)</span>
              </div>
              {/* MySQL 8.0 Database Administrator */}
              <div className="flex flex-col items-center">
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium text-center">MySQL 8.0 Database Administrator (1Z0-908) certification</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 