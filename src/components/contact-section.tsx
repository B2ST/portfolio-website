import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground">
            Feel free to reach out if you'd like to connect or discuss
            opportunities!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center gap-4"
        >
          <Button
            variant="outline"
            className="w-full max-w-md gap-2 hover:bg-purple-200"
            onClick={() =>
              (window.location.href = "mailto:108.arnav@gmail.com")
            }
          >
            <Mail className="h-4 w-4" />
            108.arnav@gmail.com
          </Button>

          <Button
            variant="outline"
            className="w-full max-w-md gap-2 hover:bg-purple-200"
            onClick={() =>
              window.open(
                "https://linkedin.com/in/arnav-singh-a91528137",
                "_blank"
              )
            }
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn Profile
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
