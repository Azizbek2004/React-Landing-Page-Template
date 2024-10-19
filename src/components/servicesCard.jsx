import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Product Engineering",
    icon: "🔧",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Big Data & Analytics",
    icon: "📊",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Creative Solutions",
    icon: "📝",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const ServicesCards = () => {
  return (
    <div className="card-container">
      {services.map((service, index) => (
        <motion.div
          key={index}
          className="card"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="icon">{service.icon}</div>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="arrow-btn"
          >
            →
          </motion.button>
        </motion.div>
      ))}
    </div>
  );
};

export default ServicesCards;
