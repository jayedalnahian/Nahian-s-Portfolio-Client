import React from "react";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 1, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#254D70] text-[#EFE4D2] py-16 px-6 md:px-20"
    >
      <motion.div
        className="max-w-4xl mx-auto text-center mb-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 className="text-4xl font-bold mb-4" variants={itemVariants}>
          Get in Touch
        </motion.h2>
        <motion.p className="text-lg max-w-xl mx-auto" variants={itemVariants}>
          I'm always open to discussing new projects, opportunities, or just
          connecting. Feel free to reach out!
        </motion.p>
      </motion.div>

      <motion.div
        className="max-w-3xl mx-auto grid gap-8 md:grid-cols-3 text-left"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="flex items-center gap-4" variants={itemVariants}>
          <FaEnvelope className="text-3xl text-[#954C2E]" />
          <a
            href="mailto:jnahian752@gmail.com"
            className="text-xl hover:text-[#D9B382] transition"
            aria-label="Send email"
          >
            jnahian752@gmail.com
          </a>
        </motion.div>

        <motion.div className="flex items-center gap-4" variants={itemVariants}>
          <FaPhone className="text-3xl text-[#954C2E]" />
          <a
            href="tel:+880123456789"
            className="text-xl hover:text-[#D9B382] transition"
            aria-label="Call phone number"
          >
            +880 123 456 789
          </a>
        </motion.div>

        <motion.div className="flex items-center gap-4" variants={itemVariants}>
          <FaWhatsapp className="text-3xl text-[#954C2E]" />
          <a
            href="https://wa.me/880123456789"
            target="_blank"
            rel="noreferrer noopener"
            className="text-xl hover:text-[#D9B382] transition"
            aria-label="Chat on WhatsApp"
          >
            WhatsApp Chat
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;