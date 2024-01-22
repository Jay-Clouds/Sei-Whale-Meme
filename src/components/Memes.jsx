import { motion } from "framer-motion";

import swgoodchain from "../assets/images/swgoodchain.png?url";
import swexpress from "../assets/images/swexpress.png?url";
import swcook from "../assets/images/swcook.png?url";
import swboom from "../assets/images/swboom.png?url";
import sweatmoney from "../assets/images/sweatmoney.png?url";
import swesendit from "../assets/images/swsendit.png?url";
import swslurpingdips from "../assets/images/swslurpingdips.png?url";
import swreadyfortakeoff from "../assets/images/swreadyfortakeoff.png?url";
import swwork from "../assets/images/swwork.png?url";

export const Memes = () => (
  <section className="w-full bg-customDarkBg2 mt-12 sm:mt-20 mb-10 lg:my-20 pt-4"
  id="memes"
  >
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
        <div className="w-full mb-12 lg:mb-0 justify-center">
          <div className="mx-auto lg:mx-auto">
            <h2 className="text-customSecondary text-center mt-6 mb-16 lg:text-5xl text-4xl xl:text-5xl font-bold tracking-normal">
              Memes
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 justify-center items-center">
          <div className="flex justify-center">
            <img className="h-48 max-w-xs rounded-lg" src={swexpress} alt="Sei Whale Express"/>
          </div>
          <div className="flex justify-center">
            <img className="h-48 max-w-xs rounded-lg" src={swgoodchain} alt="Red Chain Good Chain"/>
          </div>
          <div className="flex justify-center">
            <img className="h-48 max-w-xs rounded-lg" src={swcook} alt="Sei Whale Cook"/>
          </div>
          <div className="flex justify-center">
            <img className="h-48 max-w-xs rounded-lg" src={swboom} alt="Boom Sei Whale"/>
          </div>
          <div className="flex justify-center">
            <img className="h-48 max-w-xs rounded-lg" src={sweatmoney} alt="Sei Whale Eats Money"/>
          </div>
          <div className="flex justify-center">
            <img className="h-48 max-w-xs rounded-lg" src={swesendit} alt="Sei Whale Send It"/>
          </div>
          <div className="flex justify-center">
            <img className="h-48 max-w-xs rounded-lg" src={swslurpingdips} alt="Sei Whale Slurping Dips"/>
          </div>
          <div className="flex justify-center">
            <img className="h-48 max-w-xs rounded-lg" src={swreadyfortakeoff} alt="Sei Whale Ready For Take Off"/>
          </div>
          <div className="flex justify-center">
            <img className="h-48 max-w-xs rounded-lg" src={swwork} alt="Sei Whale Work For Your Bag"/>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);
