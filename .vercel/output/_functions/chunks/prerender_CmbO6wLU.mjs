/* empty css                         */
import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, i as renderHead, j as renderSlot, k as renderComponent } from './astro_bIMeGSqA.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description" content="Official website of Sei The Whale 🐳 meme coin on SEI chain - $SEI"><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])}  </body> </html>`;
}, "/Users/theowezel/Desktop/Coding/SeiWhale/SeiWhaleWeb/src/layouts/Layout.astro", void 0);

const SeiWhale = "/_astro/SeiWhale.2JjrgyvZ.png";

const SeiWhaleLogo = () => /* @__PURE__ */ jsx("img", { src: SeiWhale, alt: "Sei Whale", width: "50", height: "50" });

const DiscordIcon = () => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "-1 0 26 24",
    className: "w-6 h-6 fill-gray-400",
    children: /* @__PURE__ */ jsx("path", { d: "M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03M8.02 15.33c-1.182 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418m7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418" })
  }
);

const TwitterIcon = () => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    className: "w-6 h-6 fill-gray-400",
    children: /* @__PURE__ */ jsx("path", { d: "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" })
  }
);

const TelegramIcon = () => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    className: "w-6 h-6 fill-gray-400",
    children: /* @__PURE__ */ jsx("path", { d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" })
  }
);

const navbarLinks = [
  { label: "About", href: "#about", ariaLabel: "About" },
  { label: "Chart", href: "#chart", ariaLabel: "Chart" },
  { label: "Memes", href: "#memes", ariaLabel: "Memes" }
];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return /* @__PURE__ */ jsxs("nav", { className: "w-full h-20 flex flex-col justify-center items-center fixed bg-customDarkBg1 lg:bg-customDarkBgTransparent z-40 lg:backdrop-blur-xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "2xl:w-[1280px] xl:w-10/12 w-11/12 flex justify-between items-center relative", children: [
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.3 },
          exit: { opacity: 0 },
          children: /* @__PURE__ */ jsx("a", { className: "navbar-link", href: "#home", "aria-label": "Home", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-start items-center grow basis-0", children: [
            /* @__PURE__ */ jsx("div", { className: "text-white mr-3 text-6xl", children: /* @__PURE__ */ jsx(SeiWhaleLogo, {}) }),
            /* @__PURE__ */ jsx("div", { className: "text-customSecondary font-['Inter'] font-bold text-xl", children: "Sei Whale" })
          ] }) })
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.3 },
          exit: { opacity: 0 },
          children: /* @__PURE__ */ jsx("div", { className: "hidden lg:flex h-full pb-2", children: navbarLinks.map(({ href, label, ariaLabel }) => /* @__PURE__ */ jsx(
            "a",
            {
              className: "navbar-link",
              href,
              "aria-label": ariaLabel,
              children: label
            },
            label
          )) })
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.3 },
          exit: { opacity: 0 },
          children: /* @__PURE__ */ jsxs("div", { className: "grow basis-0 justify-end hidden lg:flex", children: [
            /* @__PURE__ */ jsx(
              "a",
              {
                className: "text-white custom-border-gray rounded-xl bg-customDarkBg2 hover:bg-customDarkBg3 border-gray-700 pl-3 pr-3 pt-2 pb-2 mr-2",
                href: "https://twitter.com/SeiTheWhale",
                target: "_blank",
                "aria-label": "X",
                children: /* @__PURE__ */ jsx(TwitterIcon, {})
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                className: "text-white custom-border-gray rounded-xl bg-customDarkBg2 hover:bg-customDarkBg3 border-gray-700 pl-3 pr-3 pt-2 pb-2 mr-2",
                href: "https://t.me/seithewhale",
                target: "_blank",
                "aria-label": "Telegram",
                children: /* @__PURE__ */ jsx(TelegramIcon, {})
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                className: "text-white custom-border-gray rounded-xl bg-customDarkBg2 hover:bg-customDarkBg3 border-gray-700 pl-3 pr-3 pt-2 pb-2",
                href: "https://discord.gg/seithewhale",
                target: "_blank",
                "aria-label": "Discord",
                children: /* @__PURE__ */ jsx(DiscordIcon, {})
              }
            )
          ] })
        }
      ),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "lg:hidden flex flex-col  px-2 py-3 border-solid border border-gray-600 rounded-md cursor-pointer hover:bg-customDarkBg2",
          onClick: () => setIsOpen(!isOpen),
          children: [
            /* @__PURE__ */ jsx("div", { className: "w-5 h-0.5 bg-gray-500  mb-1" }),
            /* @__PURE__ */ jsx("div", { className: "w-5 h-0.5 bg-gray-500  mb-1" }),
            /* @__PURE__ */ jsx("div", { className: "w-5 h-0.5 bg-gray-500 " })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.3 },
        exit: { opacity: 0 },
        children: /* @__PURE__ */ jsxs(
          "div",
          {
            className: "flex flex-col mt-16 lg:hidden absolute top-4 left-0  bg-customDarkBg1 z-50 w-full \n        items-center gap-10 pb-10 border-y border-solid border-customDarkBg3 pt-10\n        ",
            children: [
              navbarLinks.map(({ label, href, ariaLabel }) => /* @__PURE__ */ jsx(
                "a",
                {
                  className: "navbar-link",
                  href,
                  onClick: () => setIsOpen(false),
                  "aria-label": ariaLabel,
                  children: label
                },
                href
              )),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-center space-x-4", children: [
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    className: "text-white custom-border-gray rounded-xl\n           bg-customDarkBg2 hover:bg-customDarkBg3  border-gray-700 pl-3 pr-3 pt-2 pb-2",
                    href: "https://twitter.com/SeiTheWhale",
                    target: "_blank",
                    children: /* @__PURE__ */ jsx(TwitterIcon, {})
                  }
                ),
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    className: "text-white custom-border-gray rounded-xl\n           bg-customDarkBg2 hover:bg-customDarkBg3  border-gray-700 pl-3 pr-3 pt-2 pb-2",
                    href: "https://t.me/seithewhale",
                    target: "_blank",
                    children: /* @__PURE__ */ jsx(TelegramIcon, {})
                  }
                ),
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    className: "text-white custom-border-gray rounded-xl\n           bg-customDarkBg2 hover:bg-customDarkBg3  border-gray-700 pl-3 pr-3 pt-2 pb-2",
                    href: "https://discord.gg/seithewhale",
                    target: "_blank",
                    children: /* @__PURE__ */ jsx(DiscordIcon, {})
                  }
                )
              ] })
            ]
          }
        )
      }
    ) })
  ] });
};

const CloseIcon = () => /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512", className: "fill-[rgb(255,255,255,0.7)]", children: /* @__PURE__ */ jsx("path", { d: "M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" }) });

const BuyModal = ({ setIsOpen }) => /* @__PURE__ */ jsx(AnimatePresence, { children: /* @__PURE__ */ jsx(
  motion.div,
  {
    initial: { opacity: 0, zIndex: 50 },
    animate: { opacity: 1, zIndex: 50 },
    transition: { duration: 0.1 },
    exit: { opacity: 0 },
    children: /* @__PURE__ */ jsx(
      "div",
      {
        className: "w-full h-full bg-customDarkBgTransparentDarker fixed top-0 left-0 flex z-50 justify-center items-center",
        onClick: () => setIsOpen(false),
        style: { display: "flex", alignItems: "center", justifyContent: "center" },
        children: /* @__PURE__ */ jsx(
          "div",
          {
            className: "w-full h-full sm:h-auto sm:w-3/4 md:w-3/5 lg:w-[1000px] xl:w-[1100px] sm:rounded-2xl bg-customDarkBgTransparentLighter custom-border-gray-darker py-12 px-8 sm:px-16 backdrop-blur-xl sm:mb-8 fixed mx-auto z-50",
            onClick: (e) => e.stopPropagation(),
            children: /* @__PURE__ */ jsxs("div", { className: "flex relative justify-center", children: [
              /* @__PURE__ */ jsxs("div", { className: "w-1/2 lg:inline hidden flex-col items-center pt-2", children: [
                /* @__PURE__ */ jsx("h2", { className: "mt-6 mb-4 text-5xl font-bold tracking-normal text-white", children: "Buy Now!" }),
                /* @__PURE__ */ jsx("h2", { className: "text-5xl font-bold tracking-normal text-customSecondary", children: "Tides Are Rising" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "w-full lg:w-1/2 flex items-center flex-col justify-center", children: [
                /* @__PURE__ */ jsxs("div", { className: "inline-flex lg:hidden justify-start items-center grow basis-0 mb-8 pr-6", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-white mr-2 text-8xl", children: /* @__PURE__ */ jsx(SeiWhaleLogo, {}) }),
                  /* @__PURE__ */ jsx("div", { className: "text-white font-['Inter'] font-bold text-3xl", children: "Sei Whale" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap -m- justify-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-full sm:w-4/5 p-2 mt-4 mx-auto", children: /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: "https://coinhall.org/sei/sei10zr25ev9etv6kme8w0fqjplmnlxgrl5lpcphckp206s8e8x87chs4p8jgh",
                      target: "_blank",
                      className: "py-4 px-10 w-full text-center text-white font-semibold rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-customPrimary hover:bg-[#48a6bd] transition ease-in-out duration-200",
                      type: "button",
                      children: "Coinhall"
                    }
                  ) }),
                  /* @__PURE__ */ jsx("div", { className: "w-full sm:w-4/5 p-2 mt-4 mx-auto", children: /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: "https://sei.astroport.fi/swap?to=sei19u0lgmeykqxq4vwmtvcm3jt20txsjvy4e92t6qxpea5u7j82t6pq4zfg0j",
                      target: "_blank",
                      className: "py-4 px-10 w-full text-center text-white font-semibold rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-customPrimary hover:bg-[#48a6bd] transition ease-in-out duration-200",
                      type: "button",
                      children: "Astroport"
                    }
                  ) })
                ] })
              ] }),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "fixed top-6 right-6 z-50 w-5 h-5 cursor-pointer",
                  onClick: () => setIsOpen(false),
                  children: /* @__PURE__ */ jsx(CloseIcon, {})
                }
              )
            ] })
          }
        )
      }
    )
  }
) });

const CopyIcon = () => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    className: "w-4 h-4 fill-gray-400",
    children: /* @__PURE__ */ jsx("path", { d: "M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" })
  }
);

const CopyToClipboard = ({ content, copyText }) => {
  const [isCopied, setIsCopied] = useState(false);
  const copyToClipboard = async (event) => {
    event.stopPropagation();
    try {
      await navigator.clipboard.writeText(content);
      setIsCopied(true);
    } catch (err) {
      console.error("Failed to copy content: ", err);
    }
  };
  return /* @__PURE__ */ jsx("span", { onClick: copyToClipboard, className: "cursor-pointer flex items-center", children: isCopied ? "Copied!" : /* @__PURE__ */ jsxs(Fragment, { children: [
    copyText,
    /* @__PURE__ */ jsx("span", { className: "ml-2", children: /* @__PURE__ */ jsx(CopyIcon, {}) })
  ] }) });
};

const JayXpost = "/_astro/jayxswpost.xgsglkhK.png";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return /* @__PURE__ */ jsxs(
    "section",
    {
      className: "w-screen flex justify-center items-center bg-customDarkBg1 mb-[3.75vw] md:mb-[2.5vw] lg:mb-[2vw] xl:mb-[1.5vw] 2xl:mb-7.5 hero-bg-gradient pb-32 sm:pb-36 md:pb-44 lg:pb-0",
      id: "home",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "w-screen md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center pt-16 md:pt-16 lg:pt-20 text-center", children: [
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5 },
              children: /* @__PURE__ */ jsx("div", { className: "text-customPrimary text-sm sm:text-base  mb-6 sm:mt-16 mt-8  font-bold", children: "🤑 Ticker $SEI" })
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: 0.05 },
              children: [
                /* @__PURE__ */ jsx("div", { className: "text-5xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide  text-white  px-8 sm:px-8 md:px-20 lg:px-4", children: /* @__PURE__ */ jsx("span", { className: "inline", children: "Sei Whale 🐳" }) }),
                /* @__PURE__ */ jsx("div", { className: "justify-center items-center flex flex-col sm:flex-row gap-2 sm:gap-4 mt-10", children: /* @__PURE__ */ jsx("img", { src: SeiWhale, alt: "Sei Whale", width: "300", height: "300" }) }),
                /* @__PURE__ */ jsx("div", { className: "mt-10 sm:mt-10 text-1xl sm:text-1xl lg:text-2xl xl:text-3xl font-bold tracking-wide  text-customSecondary  px-8 sm:px-20 md:px-24 lg:px-24", children: "Contract" })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: 0.1 },
              children: /* @__PURE__ */ jsx("div", { className: "flex items-center text-customGrayText text-2xs lg:text-sm xl:text-base sm:text-sm mt-1", children: /* @__PURE__ */ jsx(
                CopyToClipboard,
                {
                  content: "sei19u0lgmeykqxq4vwmtvcm3jt20txsjvy4e92t6qxpea5u7j82t6pq4zfg0j",
                  copyText: "sei19u0lgmeykqxq4vwmtvcm3jt20txsjvy4e92t6qxpea5u7j82t6pq4zfg0j"
                }
              ) })
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              id: "about",
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: 0.15 },
              children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 sm:flex-row mt-14 mb-12 sm:mb-12 justify-center", children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "custom-button-colored w-64 sm:w-52 h-12 mr-0 sm:mr-4 lg:mr-6 mb-2 sm:mb-0",
                    onClick: () => setIsModalOpen(true),
                    children: "🚀 Buy Now"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "#chart",
                    className: "w-64 sm:w-52 h-12 rounded-xl font-bold text-white border border-solid flex justify-center items-center cursor-pointer bg-customDarkBg2 hover:bg-customDarkBg3 border-customPrimary transition",
                    children: "📈 Chart"
                  }
                )
              ] })
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 10, zIndex: 20 },
              animate: { opacity: 1, y: 0, zIndex: 20 },
              transition: { duration: 0.5, delay: 0.15 },
              children: [
                /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center mb-16", children: /* @__PURE__ */ jsx("img", { src: JayXpost, alt: "Jay X Post", className: "max-w-xs sm:max-w-md rounded-lg" }) }),
                /* @__PURE__ */ jsx("div", { className: "text-customPrimary font-bold text-xs lg:text-sm xl:text-base sm:text-sm mt-8 px-3 sm:px-6 flex justify-center", children: /* @__PURE__ */ jsxs("div", { className: "flex space-x-8", children: [
                  /* @__PURE__ */ jsx("a", { href: "https://www.seiscan.app/pacific-1/txs/38AFAE34037A604C6ADD67AC33C47269305D7D29CFC5EC90B64B9200F536A8E7", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx("span", { children: "100% LP Burned" }) }),
                  /* @__PURE__ */ jsx("a", { href: "https://www.seiscan.app/pacific-1/txs/D4CFE033B4FE2A2F370848088BC1CC1F3CAA0EDF6695F9C1A06718B9FE7B8A43", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx("span", { children: "Admin Cleared" }) }),
                  /* @__PURE__ */ jsx("a", { href: "https://www.seiscan.app/pacific-1/txs/38AFAE34037A604C6ADD67AC33C47269305D7D29CFC5EC90B64B9200F536A8E7", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx("span", { children: "Minter Renounced" }) })
                ] }) }),
                /* @__PURE__ */ jsx("div", { className: "text-customSecondary font-bold text-xs lg:text-sm xl:text-base mt-12 -mb-20 sm:text-sm px-3 sm:px-6 flex justify-center", children: "📦 Total Supply = 1,000,000,000" })
              ]
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "relative w-screen flex justify-center", children: /* @__PURE__ */ jsx("div", { className: "custom-shape-divider-bottom-1665343298 mt-4 sm:mt-8 md:mt-26 hidden lg:block", children: /* @__PURE__ */ jsx(
            "svg",
            {
              "data-name": "Layer 1",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 1200 120",
              preserveAspectRatio: "none",
              className: " bg-customDarkBg2",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  d: "M1200 0L0 0 598.97 114.72 1200 0z",
                  className: "shape-fill custom-bg-dark1"
                }
              )
            }
          ) }) })
        ] }),
        isModalOpen && /* @__PURE__ */ jsx(BuyModal, { isOpen: isModalOpen, setIsOpen: setIsModalOpen })
      ]
    }
  );
};

const SwMcForms = "/_astro/swmcforms.MtDTtUHN.gif";

const McForms = () => /* @__PURE__ */ jsx(
  "section",
  {
    className: "w-full bg-customDarkBg2 mt-10 mb-10 lg:my-20 justify-center items-center",
    id: "McForms",
    children: /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.5, delay: 0.2 },
        children: /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: SwMcForms,
            alt: "Sei Whale Mc Forms",
            className: "w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"
          }
        ) })
      }
    )
  }
);

const Chart = () => {
  return /* @__PURE__ */ jsx(
    "section",
    {
      className: "w-full bg-customDarkBg2 mt-8 mb-8 sm:mt-8 sm:mb-8 xl:mt-8 xl:mb-8",
      id: "chart",
      children: /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: 0.2 },
          children: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center h-96 sm:h-[800px] 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16 sm:mx-auto px-4", children: [
            /* @__PURE__ */ jsx("iframe", { className: "sm:block hidden", height: "100%", width: "100%", id: "geckoterminal-embed", title: "GeckoTerminal Embed", src: "https://www.geckoterminal.com/sei-network/pools/sei10zr25ev9etv6kme8w0fqjplmnlxgrl5lpcphckp206s8e8x87chs4p8jgh?embed=1&info=1&swaps=0", frameborder: "0", allow: "clipboard-write", allowfullscreen: true }),
            /* @__PURE__ */ jsx("iframe", { className: "sm:hidden block", height: "100%", width: "100%", id: "geckoterminal-embed", title: "GeckoTerminal Embed", src: "https://www.geckoterminal.com/sei-network/pools/sei10zr25ev9etv6kme8w0fqjplmnlxgrl5lpcphckp206s8e8x87chs4p8jgh?embed=1&info=1&swaps=0", frameborder: "0", allow: "clipboard-write", allowfullscreen: true })
          ] })
        }
      )
    }
  );
};

const swgoodchain = "/_astro/swgoodchain.OdIYIc-w.png";

const swexpress = "/_astro/swexpress.guPdihak.png";

const swcook = "/_astro/swcook.mBkNxiWO.png";

const swboom = "/_astro/swboom.9b-vKshQ.png";

const sweatmoney = "/_astro/sweatmoney.VqXLZIBz.png";

const swesendit = "/_astro/swsendit.0kQq2zTx.png";

const swslurpingdips = "/_astro/swslurpingdips.67kjk6ET.png";

const swreadyfortakeoff = "/_astro/swreadyfortakeoff.cXoFAI92.png";

const swwork = "/_astro/swwork.eUjR0nD3.png";

const Memes = () => /* @__PURE__ */ jsx(
  "section",
  {
    className: "w-full bg-customDarkBg2 mt-12 sm:mt-20 mb-10 lg:my-20 pt-4",
    id: "memes",
    children: /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.5, delay: 0.2 },
        children: /* @__PURE__ */ jsxs("div", { className: "w-full mb-12 lg:mb-0 justify-center pb-12", children: [
          /* @__PURE__ */ jsx("div", { className: "mx-auto lg:mx-auto", children: /* @__PURE__ */ jsx("h2", { className: "text-customSecondary text-center mt-6 mb-16 lg:text-5xl text-4xl xl:text-5xl font-bold tracking-normal", children: "Memes" }) }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 justify-center items-center", children: [
            /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("img", { className: "h-48 max-w-xs rounded-lg", src: swexpress, alt: "Sei Whale Express" }) }),
            /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("img", { className: "h-48 max-w-xs rounded-lg", src: swgoodchain, alt: "Red Chain Good Chain" }) }),
            /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("img", { className: "h-48 max-w-xs rounded-lg", src: swcook, alt: "Sei Whale Cook" }) }),
            /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("img", { className: "h-48 max-w-xs rounded-lg", src: swboom, alt: "Boom Sei Whale" }) }),
            /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("img", { className: "h-48 max-w-xs rounded-lg", src: sweatmoney, alt: "Sei Whale Eats Money" }) }),
            /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("img", { className: "h-48 max-w-xs rounded-lg", src: swesendit, alt: "Sei Whale Send It" }) }),
            /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("img", { className: "h-48 max-w-xs rounded-lg", src: swslurpingdips, alt: "Sei Whale Slurping Dips" }) }),
            /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("img", { className: "h-48 max-w-xs rounded-lg", src: swreadyfortakeoff, alt: "Sei Whale Ready For Take Off" }) }),
            /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("img", { className: "h-48 max-w-xs rounded-lg", src: swwork, alt: "Sei Whale Work For Your Bag" }) })
          ] })
        ] })
      }
    )
  }
);

const FAQData = [
  {
    question: "💼 What wallets to use?",
    answer: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("span", { className: "text-customPrimary", children: "● " }),
      /* @__PURE__ */ jsx("a", { href: "https://compasswallet.io/", className: "hover:text-[#48a6bd] transition duration-200", children: "Compass" }),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("span", { className: "text-customPrimary", children: "● " }),
      /* @__PURE__ */ jsx("a", { href: "https://www.leapwallet.io/cosmos", className: "hover:text-[#48a6bd] transition duration-200", children: "Leap" }),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("span", { className: "text-customPrimary", children: "● " }),
      /* @__PURE__ */ jsx("a", { href: "https://www.keplr.app/", className: "hover:text-[#48a6bd] transition duration-200", children: "Keplr" })
    ] })
  },
  {
    question: "💸 Move funds to SEI wallet?",
    answer: /* @__PURE__ */ jsxs(Fragment, { children: [
      "You can purchase $SEI directly from a CEX like Coinbase and Binance and send them directly to your wallet",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Bridge funds through SEI dApp" }),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("span", { className: "text-customPrimary", children: "● " }),
      /* @__PURE__ */ jsx("a", { href: "https://simpleswap.io/", className: "hover:text-[#48a6bd] transition duration-200", children: "Simpleswap" }),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("span", { className: "text-customPrimary", children: "● " }),
      /* @__PURE__ */ jsx("a", { href: "https://changenow.io/?from=sol&to=sei", className: "hover:text-[#48a6bd] transition duration-200", children: "Changenow" }),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("span", { className: "text-customPrimary", children: "● " }),
      /* @__PURE__ */ jsx("a", { href: "https://app.sei.io/bridge", className: "hover:text-[#48a6bd] transition duration-200", children: "Sei Bridge" }),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("span", { className: "text-customPrimary", children: "● " }),
      /* @__PURE__ */ jsx("a", { href: "https://app.rocketx.exchange/swap", className: "hover:text-[#48a6bd] transition duration-200", children: "RocketX" }),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("span", { className: "text-customPrimary", children: "● " }),
      /* @__PURE__ */ jsx("a", { href: "https://swapspace.co/", className: "hover:text-[#48a6bd] transition duration-200", children: "Swapspace" }),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("span", { className: "text-customPrimary", children: "● " }),
      /* @__PURE__ */ jsx("a", { href: "https://portalbridge.com/", className: "hover:text-[#48a6bd] transition duration-200", children: "Portal" })
    ] })
  },
  {
    question: "🪙 How to view Sei Whale tokens in wallet?",
    answer: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center cursor-pointer", children: [
        /* @__PURE__ */ jsx("span", { className: "text-customPrimary", children: "● " }),
        /* @__PURE__ */ jsx("span", { children: "Copy CA: " }),
        /* @__PURE__ */ jsx("span", { className: "text-sm cursor-pointer text-customPrimary hover:text-customSecondary", children: /* @__PURE__ */ jsx(CopyToClipboard, { content: "sei19u0lgmeykqxq4vwmtvcm3jt20txsjvy4e92t6qxpea5u7j82t6pq4zfg0j", copyText: "Click to copy" }) })
      ] }),
      /* @__PURE__ */ jsx("span", { className: "text-customPrimary", children: "● " }),
      "Select manage tokens or add tokens",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("span", { className: "text-customPrimary", children: "● " }),
      "Paste CA and toggle on to display token (cw20)"
    ] })
  }
];
const FAQ = () => /* @__PURE__ */ jsxs("section", { className: "relative pt-16 pb-16 bg-blueGray-50 overflow-hidden", children: [
  /* @__PURE__ */ jsx("div", { className: "absolute -top-10", id: "FAQ" }),
  /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      viewport: { once: true },
      transition: { duration: 0.5, delay: 0.2 },
      children: /* @__PURE__ */ jsx("div", { className: "relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full", children: /* @__PURE__ */ jsxs("div", { className: "md:max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsx("p", { className: "mb-7 custom-block-subtitle text-center", children: "Have any questions?" }),
        /* @__PURE__ */ jsx("h2", { className: "mb-16 custom-block-big-title text-center", children: "Frequently Asked Questions" }),
        /* @__PURE__ */ jsx("div", { className: "mb-11 flex flex-wrap -m-1", children: FAQData.map((item, index) => /* @__PURE__ */ jsx("div", { className: "w-full p-1", children: /* @__PURE__ */ jsx(
          FAQBox,
          {
            title: item.question,
            content: item.answer,
            defaultOpen: index === 0
          },
          `${item.question}-${item.answer}`
        ) })) })
      ] }) })
    }
  )
] });
const FAQBox = ({ defaultOpen, title, content }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const handleBoxClick = () => {
    setIsOpen(!isOpen);
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "pt-2 sm:pt-6 pb-2 px-3 sm:px-8  rounded-3xl bg-customDarkBg3 custom-border-gray-darker mb-4 relative hover:bg-customDarkBg3Hover cursor-pointer",
      onClick: handleBoxClick,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col p-2  justify-center items-start", children: [
          /* @__PURE__ */ jsx("h3", { className: " custom-content-title pt-3 sm:pt-0 pr-8 sm:pr-0", children: title }),
          /* @__PURE__ */ jsx(
            "p",
            {
              className: `text-customGrayText pt-4 transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96" : "max-h-0"}`,
              children: content
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-6 right-4 sm:top-8 sm:right-8", children: /* @__PURE__ */ jsx(
          "svg",
          {
            width: "28px",
            height: "30px",
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: `transition-all duration-500  ${isOpen ? "rotate-[180deg]" : "rotate-[270deg]"}`,
            children: /* @__PURE__ */ jsx(
              "path",
              {
                d: "M4.16732 12.5L10.0007 6.66667L15.834 12.5",
                stroke: "rgb(79, 180, 203)",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              }
            )
          }
        ) })
      ]
    }
  );
};

const Seigma = "/_astro/seigma.9gfaeIN-.png";

const Seipex = "/_astro/seipex.RKVa6Knq.png";

const THSEI = "/_astro/THSEI.kvCXXss4.png";

const Brands = () => /* @__PURE__ */ jsx("section", { className: "py-12 sm:py-24 bg-customDarkBg1 w-full mt-16 mb-16", children: /* @__PURE__ */ jsx(
  motion.div,
  {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.5, delay: 0.2 },
    children: /* @__PURE__ */ jsx("div", { className: "container px-4 mx-auto 2xl:w-[1200px] xl:w-[1100px] lg:w-[1000px] md:w-4/5", children: /* @__PURE__ */ jsxs("div", { className: "flex lg:flex-row flex-col items-center -mx-4 justify-center lg:text-left text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "w-full lg:w-1/2 px-4 mb-12 lg:mb-0", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-2  text-4xl sm:text-5xl 2xl:text-6xl font-bold tracking-normal text-white", children: "Partners" }),
        /* @__PURE__ */ jsx("h2", { className: " text-4xl  sm:text-5xl 2xl:text-6xl font-bold tracking-normal text-customSecondary", children: "with Sei Whale" })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "w-full sm:w-[640px] lg:w-1/2 mx-2 sm:mx-auto lg:mx-0 lg:pl-10 flex flex-wrap -m-4 justify-center", children: [
        /* @__PURE__ */ jsx("div", { className: "sm:w-1/3 py-6 px-4 flex justify-center", children: /* @__PURE__ */ jsx("a", { href: "https://seigma.xyz/", target: "_blank", children: /* @__PURE__ */ jsx("img", { src: Seigma, alt: "Seigma", className: "w-24 sm:w-auto object-contain h-24" }) }) }),
        /* @__PURE__ */ jsx("div", { className: "sm:w-1/3 py-6 px-4 flex justify-center", children: /* @__PURE__ */ jsx("a", { href: "https://seipex.fi/", target: "_blank", children: /* @__PURE__ */ jsx("img", { src: Seipex, alt: "Seipex", className: "w-24 sm:w-auto object-cover h-24" }) }) }),
        /* @__PURE__ */ jsx("div", { className: "sm:w-1/3 py-6 px-4 flex justify-center", children: /* @__PURE__ */ jsx("a", { href: "https://thsei.xyz/", target: "_blank", children: /* @__PURE__ */ jsx("img", { src: THSEI, alt: "THSEI", className: "w-24 sm:w-auto object-cover h-24" }) }) })
      ] })
    ] }) })
  }
) });

const Divider = () => /* @__PURE__ */ jsx("div", { className: "w-full lg:w-3/5 mx-auto", children: /* @__PURE__ */ jsx("div", { className: "border-t border-customGrayBorder" }) });

const footerData = [
  {
    title: "Utility",
    items: ["Token Holder Bot", "Coming Soon 👀", "Coming Soon 👀", "Coming Soon 👀"]
  }
  //add more sections here if needed (maybe privacy policy for when we build utility that generates revenue)
];
const Footer = () => {
  return /* @__PURE__ */ jsx("footer", { children: /* @__PURE__ */ jsx("div", { className: "pt-10  lg:pt-20 lg:pb-12 bg-customDarkBg1 radius-for-skewed ", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-full lg:w-1/3 mb-16 lg:mb-0", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-center lg:justify-start items-center grow basis-0", children: [
          /* @__PURE__ */ jsx("div", { className: "text-white mr-3 text-6xl", children: /* @__PURE__ */ jsx(SeiWhaleLogo, {}) }),
          /* @__PURE__ */ jsx("div", { className: "text-customSecondary font-['Inter'] font-bold text-xl", children: "Sei Whale" })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "mb-10 mt-4 sm:w-[22rem] lg:w-[20rem] xl:w-[24rem] text-gray-400 leading-loose text-center lg:text-left mx-auto lg:mx-0", children: [
          "Sei Whale is open for collaboration! Send any quesstions or inquiries you might have",
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "mailto:jay@seiwhale.meme",
              target: "_blank",
              className: "text-gray-100 ml-1.5 ",
              "aria-label": "Sei Whale Email",
              children: "here"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-36 mx-auto lg:mx-0", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              className: "inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl",
              href: "https://twitter.com/SeiTheWhale",
              children: /* @__PURE__ */ jsx(TwitterIcon, {})
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              className: "inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl",
              href: "https://t.me/seithewhale",
              children: /* @__PURE__ */ jsx(TelegramIcon, {})
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              className: "inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl",
              href: "https://discord.gg/5Q5qjX6Z",
              children: /* @__PURE__ */ jsx(DiscordIcon, {})
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "w-full lg:w-2/3  lg:pl-16 hidden lg:flex flex-wrap justify-end pr-5", children: /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/3 lg:w-auto mb-16 md:mb-0", children: [
        /* @__PURE__ */ jsx("h3", { className: "mb-6 text-2xl font-bold text-white", children: "Utility" }),
        /* @__PURE__ */ jsx("ul", { children: footerData[0].items.map((item, i) => /* @__PURE__ */ jsx("li", { className: "mb-4", children: /* @__PURE__ */ jsx(
          "a",
          {
            className: "text-gray-400 hover:text-gray-300",
            href: "#",
            "aria-label": "",
            children: item
          }
        ) }, i)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "lg:text-center text-sm text-gray-400 border-t border-[rgb(255,255,255,0.2)] pt-12 mt-16 hidden lg:block", children: "© 2024 Sei Whale" })
  ] }) }) });
};

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, []);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setIsVisible(true);
    } else if (scrolled <= 300) {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return /* @__PURE__ */ jsx(Fragment, { children: isVisible && /* @__PURE__ */ jsx(
    "div",
    {
      className: "w-12 h-12 fixed bottom-6 right-6 custom-border-gray rounded-xl  bg-customDarkBg2 hover:bg-customDarkBg3 cursor-pointer flex justify-center items-center transition z-50",
      onClick: scrollToTop,
      children: /* @__PURE__ */ jsx(
        "svg",
        {
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          width: "35px",
          height: "35px",
          viewBox: "0 0 20 20",
          children: /* @__PURE__ */ jsx(
            "path",
            {
              d: "M4.16732 12.5L10.0007 6.66667L15.834 12.5",
              stroke: "rgb(79, 180, 203)",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          )
        }
      )
    }
  ) });
};

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sei Whale" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", Navbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/theowezel/Desktop/Coding/SeiWhale/SeiWhaleWeb/src/components/Navbar.jsx", "client:component-export": "Navbar" })} ${renderComponent($$result2, "Hero", Hero, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/theowezel/Desktop/Coding/SeiWhale/SeiWhaleWeb/src/components/Hero.jsx", "client:component-export": "Hero" })} ${renderComponent($$result2, "McForms", McForms, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/theowezel/Desktop/Coding/SeiWhale/SeiWhaleWeb/src/components/McForms", "client:component-export": "McForms" })} ${renderComponent($$result2, "Divider", Divider, {})} ${renderComponent($$result2, "Chart", Chart, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/theowezel/Desktop/Coding/SeiWhale/SeiWhaleWeb/src/components/Chart.jsx", "client:component-export": "Chart" })} ${renderComponent($$result2, "Divider", Divider, {})} ${renderComponent($$result2, "Memes", Memes, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/theowezel/Desktop/Coding/SeiWhale/SeiWhaleWeb/src/components/Memes.jsx", "client:component-export": "Memes" })} ${renderComponent($$result2, "Brands", Brands, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/theowezel/Desktop/Coding/SeiWhale/SeiWhaleWeb/src/components/Brands.jsx", "client:component-export": "Brands" })} ${renderComponent($$result2, "FAQ", FAQ, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/theowezel/Desktop/Coding/SeiWhale/SeiWhaleWeb/src/components/FAQ.jsx", "client:component-export": "FAQ" })} ${renderComponent($$result2, "Footer", Footer, {})} ${renderComponent($$result2, "ScrollUpButton", ScrollUpButton, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/theowezel/Desktop/Coding/SeiWhale/SeiWhaleWeb/src/components/ScrollUpButton", "client:component-export": "ScrollUpButton" })} ` })}`;
}, "/Users/theowezel/Desktop/Coding/SeiWhale/SeiWhaleWeb/src/pages/index.astro", void 0);

const $$file = "/Users/theowezel/Desktop/Coding/SeiWhale/SeiWhaleWeb/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
