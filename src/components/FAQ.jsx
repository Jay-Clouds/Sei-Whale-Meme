import { useState } from "react";
import { motion } from "framer-motion";

import { CopyToClipboard } from './CopyToClipboard';


const FAQData = [
  {
    question: "💼 What wallets to use?",
    answer: (
      <>
        <span className="text-customPrimary">● </span><a href="https://compasswallet.io/" className="hover:text-[#48a6bd] transition duration-200">Compass</a>
        <br />
        <span className="text-customPrimary">● </span><a href="https://www.leapwallet.io/cosmos" className="hover:text-[#48a6bd] transition duration-200">Leap</a>
        <br />
        <span className="text-customPrimary">● </span><a href="https://www.keplr.app/" className="hover:text-[#48a6bd] transition duration-200">Keplr</a>
      </>
    ),
  },
  {
    question: "💸 Move funds to SEI wallet?",
    answer: (
      <>
        You can purchase $SEI directly from a CEX like Coinbase and Binance and send them directly to your wallet
        <br />
        <br />
        <span className="font-semibold">Bridge funds through SEI dApp</span>
        <br />
        <span className="text-customPrimary">● </span><a href="https://simpleswap.io/" className="hover:text-[#48a6bd] transition duration-200">Simpleswap</a>
        <br />
        <span className="text-customPrimary">● </span><a href="https://changenow.io/?from=sol&to=sei" className="hover:text-[#48a6bd] transition duration-200">Changenow</a>
        <br />
        <span className="text-customPrimary">● </span><a href="https://app.sei.io/bridge" className="hover:text-[#48a6bd] transition duration-200">Sei Bridge</a>
        <br />
        <span className="text-customPrimary">● </span><a href="https://app.rocketx.exchange/swap" className="hover:text-[#48a6bd] transition duration-200">RocketX</a>
        <br />
        <span className="text-customPrimary">● </span><a href="https://swapspace.co/" className="hover:text-[#48a6bd] transition duration-200">Swapspace</a>
        <br />
        <span className="text-customPrimary">● </span><a href="https://portalbridge.com/" className="hover:text-[#48a6bd] transition duration-200">Portal</a>
      </>
    ),
  },
  {
    question: "🪙 How to view Sei Whale tokens in wallet?",
    answer: (
      <>
        <div className="flex items-center cursor-pointer">
          <span className="text-customPrimary">●&nbsp;</span>
          <span>Copy CA:&nbsp;</span>
          <span className="text-sm cursor-pointer text-customPrimary hover:text-customSecondary">
            <CopyToClipboard content="sei19u0lgmeykqxq4vwmtvcm3jt20txsjvy4e92t6qxpea5u7j82t6pq4zfg0j" copyText="Click to copy" />
          </span>
        </div>
        <span className="text-customPrimary">● </span>Select manage tokens or add tokens
        <br />
        <span className="text-customPrimary">● </span>Paste CA and toggle on to display token (cw20)
      </>
    ),
  },
];

export const FAQ = () => (
  <section className="relative pt-16 pb-16 bg-blueGray-50 overflow-hidden">
    <div className="absolute -top-10" id="FAQ" />
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full">
        <div className="md:max-w-4xl mx-auto">
          <p className="mb-7 custom-block-subtitle text-center">
            Have any questions?
          </p>
          <h2 className="mb-16 custom-block-big-title text-center">
            Frequently Asked Questions
          </h2>
          <div className="mb-11 flex flex-wrap -m-1">
            {FAQData.map((item, index) => (
              <div className="w-full p-1">
                <FAQBox
                  title={item.question}
                  content={item.answer}
                  key={`${item.question}-${item.answer}`}
                  defaultOpen={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

const FAQBox = ({ defaultOpen, title, content }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const handleBoxClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="pt-2 sm:pt-6 pb-2 px-3 sm:px-8  rounded-3xl bg-customDarkBg3 custom-border-gray-darker mb-4 relative hover:bg-customDarkBg3Hover cursor-pointer"
      onClick={handleBoxClick}
    >
      <div className="flex flex-col p-2  justify-center items-start">
        <h3 className=" custom-content-title pt-3 sm:pt-0 pr-8 sm:pr-0">
          {title}
        </h3>
        <p
          className={`text-customGrayText pt-4 transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          {content}
        </p>
      </div>
      <div className="absolute top-6 right-4 sm:top-8 sm:right-8">
        <svg
          width="28px"
          height="30px"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-500  ${
            isOpen ? "rotate-[180deg]" : "rotate-[270deg]"
          }`}
        >
          <path
            d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
            stroke="rgb(79, 180, 203)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  );
};