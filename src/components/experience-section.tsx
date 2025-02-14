import { motion } from "framer-motion";
import { EXPERIENCE } from "../constants";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-green-400 to-blue-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Professional Experience
        </motion.h2>

        <div className="space-y-8">
          {EXPERIENCE.map((job, index) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="overflow-hidden border-2 border-border hover:border-emerald-400 transition-all duration-300">
                  <CardHeader className="bg-muted/50">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <motion.h3
                          className="text-xl font-bold"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          {job.company}
                        </motion.h3>
                        <p className="text-lg text-muted-foreground">
                          {job.role}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{job.period}</p>
                        <p className="text-muted-foreground">{job.location}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="mt-4">
                    <ul className="list-disc ml-6 space-y-2 mb-4">
                      {job.details.map((detail, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + i * 0.1 }}
                          className="text-muted-foreground"
                        >
                          {detail}
                        </motion.li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {job.tech.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + techIndex * 0.05 }}
                        >
                          <Badge
                            variant="secondary"
                            className="hover:bg-primary/20 transition-colors duration-300"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
