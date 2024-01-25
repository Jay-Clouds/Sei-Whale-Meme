import { useState } from "react";
import { motion } from "framer-motion";

import { BuyModal } from "./BuyModal";
import { CopyToClipboard } from './CopyToClipboard';
import SeiWhale from "../assets/images/SeiWhale.png?url";
import JayXpost from "../assets/images/jayxswpost.png?url";

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
    className="w-screen flex justify-center items-center bg-customDarkBg1 mb-[3.75vw] md:mb-[2.5vw] lg:mb-[2vw] xl:mb-[1.5vw] 2xl:mb-7.5 hero-bg-gradient pb-32 sm:pb-36 md:pb-44 lg:pb-0"
      id="home"
    >
      <div className="w-screen md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center pt-16 md:pt-16 lg:pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-customPrimary text-sm sm:text-base  mb-6 sm:mt-16 mt-8  font-bold">
           Ticker $SEI
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide  text-white  px-8 sm:px-8 md:px-20 lg:px-4">
            <span className="inline">Sei Whale 🐳</span>
          </div>
          <div className="justify-center items-center flex flex-col sm:flex-row gap-2 sm:gap-4 mt-10">
            <img src={SeiWhale} alt="Sei Whale" width="300" height="300">
            </img>
          </div>
          <div className="mt-10 sm:mt-10 text-1xl sm:text-1xl lg:text-2xl xl:text-3xl font-bold tracking-wide  text-customSecondary  px-8 sm:px-20 md:px-24 lg:px-24">
            Contract
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-center text-customGrayText text-2xs lg:text-sm xl:text-base sm:text-sm mt-1">
            <CopyToClipboard
              content="sei19u0lgmeykqxq4vwmtvcm3jt20txsjvy4e92t6qxpea5u7j82t6pq4zfg0j"
              copyText="sei19u0lgmeykqxq4vwmtvcm3jt20txsjvy4e92t6qxpea5u7j82t6pq4zfg0j" />
          </div>
        </motion.div>
        <motion.div
          id="about"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="flex flex-col gap-2 sm:flex-row mt-14 mb-12 sm:mb-12 justify-center">
            <div
              className="custom-button-colored w-64 sm:w-52 h-12 mr-0 sm:mr-4 lg:mr-6 mb-2 sm:mb-0"
              onClick={() => setIsModalOpen(true)}
            >
              🚀 Buy Now
            </div>
            <a
              href="#chart"
              className="w-64 sm:w-52 h-12 rounded-xl font-bold text-white border border-solid flex justify-center items-center cursor-pointer bg-customDarkBg2 hover:bg-customDarkBg3 border-customPrimary transition"
            >
              📈 Chart
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10, zIndex: 20 }}
          animate={{ opacity: 1, y: 0, zIndex: 20 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {/*<div className="text-customGrayText text-xs lg:text-sm xl:text-base sm:text-sm mt-1 pb-6 px-12 sm:px-22 ">
           Sei the Whale 🐳 is the flagship meme token of the SEI network!
          </div>*/}
          <div className="flex justify-center items-center mb-16">
            <img src={JayXpost} alt="Jay X Post" className="max-w-xs sm:max-w-md rounded-lg"></img>
          </div>
          <div className="text-customPrimary font-bold text-xs lg:text-sm xl:text-base sm:text-sm mt-8 px-3 sm:px-6 flex justify-center">
          <div className="flex space-x-8">
          <a href="https://www.seiscan.app/pacific-1/txs/38AFAE34037A604C6ADD67AC33C47269305D7D29CFC5EC90B64B9200F536A8E7" target="_blank" rel="noopener noreferrer">
            <span>100% LP Burned</span>
          </a>
          <a href="https://www.seiscan.app/pacific-1/txs/D4CFE033B4FE2A2F370848088BC1CC1F3CAA0EDF6695F9C1A06718B9FE7B8A43" target="_blank" rel="noopener noreferrer">
            <span>Admin Cleared</span>
          </a>
          <a href="https://www.seiscan.app/pacific-1/txs/38AFAE34037A604C6ADD67AC33C47269305D7D29CFC5EC90B64B9200F536A8E7" target="_blank" rel="noopener noreferrer">
            <span>Minter Renounced</span>
          </a>
          </div>
        </div>
        <div className="text-customSecondary font-bold text-xs lg:text-sm xl:text-base mt-12 -mb-20 sm:text-sm px-3 sm:px-6 flex justify-center">
            📦 Total Supply = 1,000,000,000
          </div>
        </motion.div>
        <div className="relative w-screen flex justify-center">
          <div className="custom-shape-divider-bottom-1665343298 mt-4 sm:mt-8 md:mt-26 hidden lg:block">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className=" bg-customDarkBg2"
            >
              <path
                d="M1200 0L0 0 598.97 114.72 1200 0z"
                className="shape-fill custom-bg-dark1"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <BuyModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};
