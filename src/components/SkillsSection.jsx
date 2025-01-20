import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython, FaGithub } from "react-icons/fa";
import {IoLogoJavascript} from "react-icons/io5";
import { DiMongodb } from "react-icons/di";
import { SiPostman, SiTailwindcss } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";


import { motion } from "framer-motion";

  export default function SkillsSection() {

    const containerVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: "easeOut",
          staggerChildren: 0.3,
        },
      },
    };
    const skills = [
      { name: "HTML", icon: FaHtml5, percentage: 95 },
      { name: "CSS", icon: FaCss3Alt, percentage: 90 },
      { name: "JavaScript", icon: IoLogoJavascript, percentage: 95 },
      { name: "React", icon: FaReact, percentage: 90 },
      { name: "Node.js", icon: FaNodeJs, percentage: 80 },
      { name: "Express", icon: FaNodeJs, percentage: 80 },
      { name: "MongoDB", icon: DiMongodb, percentage: 75 },
      { name: "Python", icon: FaPython, percentage: 80 },
      { name: "Github", icon: FaGithub, percentage: 100 },
      { name: "Tailwind", icon: SiTailwindcss, percentage: 90 },
      { name: "GraphQL", icon: GrGraphQl, percentage: 100 },
      { name: "Postman", icon: SiPostman, percentage: 80 },
    ]
  
    return (
      <section className="px-6 py-20" id="skills">
         <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
        Tech Stack
      </h2>
      <motion.div
        className="space-y-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
      <div className="h-1 w-20 mb-8 bg-white"></div>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {skills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center p-8 backdrop-blur-3xl p-4 bg-green-600/10 rounded-3xl">
                <div className="relative w-16 h-16 mb-4">
                  <skill.icon className="w-full h-full text-gray-700" strokeWidth={1.5} />
                </div>
                <div className="text-4xl mb-2">{skill.percentage}%</div>
                <div className="text-gray-600">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
        </motion.div>
      </section>
    )
  }
  
  