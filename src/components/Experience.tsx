'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Building } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: "Project Management Officer",
    company: "Bank of Communications",
    location: "China",
    period: "Sep 2012 - Jun 2022",
    description: "Led technology transformation as Scrum Master for 20+ banking projects, implementing Agile methodologies and DevOps practices.",
    technologies: ["Agile/Scrum", "DevOps", "Project Management", "Stakeholder Management", "COBOL"],
    achievements: [
      "Led technology transformation as Scrum Master for 20+ banking projects, reducing production defects by 20%",
      "Architected enterprise-wide development lifecycle management platform with version control and multi-environment workflows",
      "Engaged with internal and external stakeholders, including global clients, to gather requirements and drive optimal outcomes",
      "Improved bug resolution speed and enhanced cross-team collaboration through effective project management"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey in technology, from traditional banking to modern software development.
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row gap-8 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Timeline */}
              <div className="lg:w-1/3">
                <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg">
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-2">
                    <Building size={20} />
                    <span className="font-semibold">{experience.company}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {experience.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-2">
                    <Calendar size={16} />
                    <span className="text-sm">{experience.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
                    <MapPin size={16} />
                    <span className="text-sm">{experience.location}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-2/3">
                <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg">
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    {experience.description}
                  </p>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                          <span className="text-gray-700 dark:text-gray-300 text-sm">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 