import { motion } from "framer-motion";
import { SKILLS } from "../constants";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-orange-400 to-red-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6">
              Programming Languages
            </h3>
            <div className="space-y-6">
              {SKILLS.languages.map((lang, index) => (
                <div key={lang.name}>
                  <div className="flex justify-between mb-2">
                    <span>{lang.name}</span>
                    <span>{lang.proficiency}%</span>
                  </div>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="relative"
                  >
                    <div className="h-2 bg-gray-200 rounded-full" />
                    <Progress
                      className="h-2 bg-gradient-to-r from-yellow-300 via-red-500 to-purple-500 rounded-full absolute top-0 left-0"
                      style={{ width: `${lang.proficiency}%` }}
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-6">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {SKILLS.tools.map((tool) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Badge variant="secondary" className="text-sm">
                    {tool}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
