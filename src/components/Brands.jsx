import { motion } from "framer-motion";

import Seigma from "../assets/logos/Seigma.png?url";
import Seipex from "../assets/logos/Seipex.png?url";
import THSEI from "../assets/logos/THSEI.png?url";

export const Brands = () => (
  <section className="py-12 sm:py-24 bg-customDarkBg1 w-full mt-16 mb-16">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container px-4 mx-auto 2xl:w-[1200px] xl:w-[1100px] lg:w-[1000px] md:w-4/5">
        <div className="flex lg:flex-row flex-col items-center -mx-4 justify-center lg:text-left text-center">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="flex flex-col">
              <h2 className="mb-2  text-4xl sm:text-5xl 2xl:text-6xl font-bold tracking-normal text-white">
                Partners
              </h2>
              <h2 className=" text-4xl  sm:text-5xl 2xl:text-6xl font-bold tracking-normal text-customSecondary">
                with Sei Whale
              </h2>
            </div>
          </div>
          <div className="w-full sm:w-[640px] lg:w-1/2 mx-2 sm:mx-auto lg:mx-0 lg:pl-10 flex flex-wrap -m-4 justify-center">
          <div className="sm:w-1/3 py-6 px-4 flex justify-center">
            <a href="https://seigma.xyz/" target="_blank">
              <img src={Seigma} alt="Seigma" className="w-24 sm:w-auto object-contain h-24" />
            </a>
          </div>
          <div className="sm:w-1/3 py-6 px-4 flex justify-center">
            <a href="https://seipex.fi/" target="_blank">
              <img src={Seipex} alt="Seipex" className="w-24 sm:w-auto object-cover h-24" />
            </a>
          </div>
          <div className="sm:w-1/3 py-6 px-4 flex justify-center">
            <a href="https://thsei.xyz/" target="_blank">
              <img src={THSEI} alt="THSEI" className="w-24 sm:w-auto object-cover h-24" />
            </a>
          </div>
        </div>
      </div>
    </div>
    </motion.div>
  </section>
);
