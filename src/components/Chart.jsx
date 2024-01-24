import { motion } from "framer-motion";

export const Chart = () => {
  return (
    <section
      className="w-full bg-customDarkBg2 mt-10 mb-8 sm:mt-8 sm:mb-16 xl:mt-0 xl:m pt-[2rem] md:pt-[12vw] lg:pt-0"
      id="chart"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
<div className="flex flex-wrap items-center h-96 sm:h-[800px] 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16 sm:mx-auto px-4">
          <iframe className="sm:block hidden" height="100%" width="100%" id="geckoterminal-embed" title="GeckoTerminal Embed" src="https://www.geckoterminal.com/sei-network/pools/sei10zr25ev9etv6kme8w0fqjplmnlxgrl5lpcphckp206s8e8x87chs4p8jgh?embed=1&info=1&swaps=0" frameborder="0" allow="clipboard-write" allowfullscreen></iframe>
          <iframe className="sm:hidden block" height="100%" width="100%" id="geckoterminal-embed" title="GeckoTerminal Embed" src="https://www.geckoterminal.com/sei-network/pools/sei10zr25ev9etv6kme8w0fqjplmnlxgrl5lpcphckp206s8e8x87chs4p8jgh?embed=1&info=1&swaps=0" frameborder="0" allow="clipboard-write" frameborder="0" allow="clipboard-write" allowfullscreen></iframe>
        </div>
      </motion.div>
    </section>
  );
};
