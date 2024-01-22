import { SeiWhaleLogo } from "../assets/logos/SeiWhaleLogo";
import { TwitterIcon } from "../assets/icons/TwitterIcon";
import { TelegramIcon } from "../assets/icons/TelegramIcon";
import { DiscordIcon } from "../assets/icons/DiscordIcon";

const footerData = [
  {
    title: "Utility",
    items: ["Token Holder Bot", "Coming Soon 👀", "Coming Soon 👀", "Coming Soon 👀"],
  },
  //add more sections here if needed (maybe privacy policy for when we build utility that generates revenue)
];

export const Footer = () => {
  return (
    <footer>
      <div className="pt-10  lg:pt-20 lg:pb-12 bg-customDarkBg1 radius-for-skewed ">
        <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3 mb-16 lg:mb-0">
              <div className="flex justify-center lg:justify-start items-center grow basis-0">
                <div className="text-white mr-3 text-6xl">
                  <SeiWhaleLogo />
                </div>
                <div className="text-customSecondary font-['Inter'] font-bold text-xl">
                  Sei Whale
                </div>
              </div>
              <p className="mb-10 mt-4 sm:w-[22rem] lg:w-[20rem] xl:w-[24rem] text-gray-400 leading-loose text-center lg:text-left mx-auto lg:mx-0">
                Sei Whale is open for collaboration 🎉  Send any quesstions or inquiries you might have
                <a
                  href="mailto:jay@seiwhale.meme"
                  target="_blank"
                  className="text-gray-100 ml-1.5 "
                  aria-label="Sei Whale Email"
                >
                  here
                </a>
              </p>
              <div className="w-36 mx-auto lg:mx-0">
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                  href="https://twitter.com/SeiTheWhale"
                >
                  <TwitterIcon />
                </a>
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                  href="https://t.me/seithewhale"
                >
                  <TelegramIcon />
                </a>
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                  href="https://discord.gg/5Q5qjX6Z"
                >
                  <DiscordIcon />
                </a>
              </div>
            </div>
            <div className="w-full lg:w-2/3  lg:pl-16 hidden lg:flex flex-wrap justify-end pr-5">
              <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <h3 className="mb-6 text-2xl font-bold text-white">Utility</h3>
                <ul>
                  {footerData[0].items.map((item, i) => (
                    <li key={i} className="mb-4">
                      <a
                        className="text-gray-400 hover:text-gray-300"
                        href="#"
                        aria-label=""
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <p className="lg:text-center text-sm text-gray-400 border-t border-[rgb(255,255,255,0.2)] pt-12 mt-16 hidden lg:block">
            &copy; 2024 Sei Whale
          </p>
        </div>
      </div>
    </footer>
  );
};
