import { motion } from "framer-motion";
import { RESEARCH } from "../constants";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

export default function ResearchSection() {
  return (
    <section id="research" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Research Publication
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="overflow-hidden border-2 border-border hover:border-cyan-400 transition-all duration-300">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-start gap-4 flex-wrap">
                    <motion.h3
                      className="text-xl font-bold"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {RESEARCH.title}
                    </motion.h3>
                    <Badge variant="secondary" className="shrink-0">
                      {RESEARCH.period}
                    </Badge>
                  </div>

                  <p className="text-muted-foreground">
                    {RESEARCH.description}
                  </p>

                  <div className="flex justify-between items-center flex-wrap gap-4">
                    <p className="text-sm text-muted-foreground">
                      {RESEARCH.conference}
                    </p>

                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 hover:bg-primary/10 transition-colors duration-300"
                      onClick={() => window.open(RESEARCH.link, "_blank")}
                    >
                      View Paper
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
