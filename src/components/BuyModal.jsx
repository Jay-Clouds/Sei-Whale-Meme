import { motion, AnimatePresence } from "framer-motion";

import { CloseIcon } from "../assets/icons/CloseIcon";
import { SeiWhaleLogo } from "../assets/logos/SeiWhaleLogo";

export const BuyModal = ({ setIsOpen }) => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0, zIndex: 50 }}
      animate={{ opacity: 1, zIndex: 50 }}
      transition={{ duration: 0.1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className="w-full h-full  bg-customDarkBgTransparentDarker fixed top-0 left-0 flex  z-50 justify-center items-center"
        onClick={() => setIsOpen(false)}
      >
        <div
          className="w-full h-screen sm:h-auto sm:w-3/4 md:w-3/5 lg:w-[1000px] xl:w-[1100px] sm:rounded-2xl bg-customDarkBgTransparentLighter custom-border-gray-darker py-12 px-8 sm:px-16 backdrop-blur-xl sm:mb-8 fixed mx-auto z-50"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex relative justify-center">
            <div className="w-1/2 lg:inline hidden flex-col items-center pt-2">
              <h2 className="mt-6 mb-4 text-5xl font-bold tracking-normal text-white">
                Buy Now!
              </h2>
              <h2 className="text-5xl font-bold tracking-normal text-customSecondary">
                Tides Are Rising
              </h2>
            </div>
            <div className="w-full lg:w-1/2 flex items-center flex-col justify-center">
              <div className="inline-flex lg:hidden justify-start items-center grow basis-0 mb-8 pr-6">
                <div className="text-white mr-2 text-8xl">
                  <SeiWhaleLogo />
                </div>
                <div className="text-white font-['Inter'] font-bold text-3xl">
                  Sei Whale
                </div>
              </div>
              <div className="flex flex-wrap -m- justify-center">
              <div className="w-full sm:w-4/5 p-2 mt-4 mx-auto">
              <a
                href="https://coinhall.org/sei/sei10zr25ev9etv6kme8w0fqjplmnlxgrl5lpcphckp206s8e8x87chs4p8jgh"
                target="_blank"
                className="py-4 px-10 w-full text-center text-white font-semibold rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-customPrimary hover:bg-[#48a6bd] transition ease-in-out duration-200"
                type="button"
             >
                Coinhall
              </a>
                </div>
                <div className="w-full sm:w-4/5 p-2 mt-4 mx-auto">
                  <a
                    href="https://sei.astroport.fi/swap?to=sei19u0lgmeykqxq4vwmtvcm3jt20txsjvy4e92t6qxpea5u7j82t6pq4zfg0j"
                    target="_blank"
                    className="py-4 px-10 w-full text-center text-white font-semibold rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-customPrimary hover:bg-[#48a6bd] transition ease-in-out duration-200"
                    type="button"
                  >
                    Astroport
                  </a>
                </div>
              </div>
            </div>
            <div
              className="fixed top-6 right-6 z-50 w-5 h-5 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <CloseIcon />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </AnimatePresence>
);
