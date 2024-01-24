import { motion } from "framer-motion";

import SwMcForms from "../assets/images/swmcforms.gif?url";



export const McForms = () => (
  <section className="w-full bg-customDarkBg2 mt-10 mb-10 lg:my-20 justify-center items-center"
  id="McForms"
  >
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
        <div className="flex justify-center">
          <img 
            src={SwMcForms} 
            alt="Sei Whale Mc Forms" 
            className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"
          />
        </div>
    </motion.div>
  </section>
);
