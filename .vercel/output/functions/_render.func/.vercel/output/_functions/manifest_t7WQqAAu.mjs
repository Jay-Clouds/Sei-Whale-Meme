import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro_bIMeGSqA.mjs';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.u0qpNxxm.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/theowezel/Desktop/Coding/SeiWhale/SeiWhaleWeb/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_VJCQPc3A.mjs","/src/pages/index.astro":"chunks/prerender_XgC3Kihb.mjs","\u0000@astrojs-manifest":"manifest_t7WQqAAu.mjs","/Users/theowezel/Desktop/Coding/SeiWhale/SeiWhaleWeb/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_3wEZly-Z.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_T0NEKtIo.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_47dfVuxk.mjs","/Users/theowezel/Desktop/Coding/SeiWhale/SeiWhaleWeb/src/components/Chart.jsx":"_astro/Chart.YeunklNg.js","/Users/theowezel/Desktop/Coding/SeiWhale/SeiWhaleWeb/src/components/Brands.jsx":"_astro/Brands.DvvyDlSB.js","/Users/theowezel/Desktop/Coding/SeiWhale/SeiWhaleWeb/src/components/FAQ.jsx":"_astro/FAQ.Aw_D1-8S.js","/Users/theowezel/Desktop/Coding/SeiWhale/SeiWhaleWeb/src/components/Memes.jsx":"_astro/Memes.Q3nQPNLD.js","/Users/theowezel/Desktop/Coding/SeiWhale/SeiWhaleWeb/src/components/Navbar.jsx":"_astro/Navbar.i8tkiNIz.js","/Users/theowezel/Desktop/Coding/SeiWhale/SeiWhaleWeb/src/components/Hero.jsx":"_astro/Hero.E68f3ctN.js","/Users/theowezel/Desktop/Coding/SeiWhale/SeiWhaleWeb/src/components/ScrollUpButton":"_astro/ScrollUpButton.l_rJVq9E.js","astro:scripts/page.js":"_astro/page.u0qpNxxm.js","@astrojs/react/client.js":"_astro/client.2wOxL1Aq.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/seigma.9gfaeIN-.png","/_astro/seipex.RKVa6Knq.png","/_astro/THSEI.kvCXXss4.png","/_astro/swexpress.guPdihak.png","/_astro/swgoodchain.OdIYIc-w.png","/_astro/swboom.9b-vKshQ.png","/_astro/swsendit.0kQq2zTx.png","/_astro/swslurpingdips.67kjk6ET.png","/_astro/sweatmoney.VqXLZIBz.png","/_astro/swreadyfortakeoff.cXoFAI92.png","/_astro/swcook.mBkNxiWO.png","/_astro/swwork.eUjR0nD3.png","/_astro/jayxswpost.xgsglkhK.png","/_astro/SeiWhale.2JjrgyvZ.png","/_astro/inter-greek-ext-500-normal.LkEerDnY.woff2","/_astro/inter-cyrillic-500-normal.OapWSxmy.woff2","/_astro/inter-cyrillic-ext-500-normal.kCe6jWgL.woff2","/_astro/inter-greek-500-normal.yvdboTvw.woff2","/_astro/inter-cyrillic-400-normal.EPgtxUdt.woff2","/_astro/inter-latin-ext-500-normal.S18JeFer.woff2","/_astro/inter-latin-500-normal.31-RSPRF.woff2","/_astro/inter-cyrillic-ext-400-normal.hbwVqd76.woff2","/_astro/inter-greek-ext-400-normal.Ofy3y2SD.woff2","/_astro/inter-greek-400-normal.YZIAb8Pm.woff2","/_astro/inter-cyrillic-ext-600-normal.-ydZwtiJ.woff2","/_astro/inter-cyrillic-600-normal.CAfDcajv.woff2","/_astro/inter-greek-ext-600-normal.oA3PzxaB.woff2","/_astro/inter-latin-400-normal.GLYHyz0Z.woff2","/_astro/inter-latin-ext-400-normal.94UIUsAk.woff2","/_astro/inter-greek-600-normal.Mu_tY1hz.woff2","/_astro/inter-latin-600-normal.bznh0S3M.woff2","/_astro/inter-cyrillic-ext-800-normal.Q5mQ5BwU.woff2","/_astro/inter-cyrillic-800-normal.0cMBpR8Y.woff2","/_astro/inter-greek-ext-800-normal.Zt9QiRxI.woff2","/_astro/inter-latin-ext-600-normal.-8p2D9KW.woff2","/_astro/inter-greek-800-normal.HUkpWqiU.woff2","/_astro/inter-latin-ext-800-normal.BuQ78FdR.woff2","/_astro/inter-cyrillic-700-normal.WjK-gRow.woff2","/_astro/inter-latin-800-normal.XcuJQDGm.woff2","/_astro/inter-cyrillic-ext-700-normal.rc5oWlJP.woff2","/_astro/inter-greek-700-normal.hSEF9VNm.woff2","/_astro/inter-greek-ext-700-normal.Ck4W3Q6w.woff2","/_astro/inter-latin-ext-700-normal.CN7A-HjB.woff2","/_astro/inter-greek-ext-900-normal.Ggzznq3l.woff2","/_astro/inter-cyrillic-900-normal.FXj3SOqI.woff2","/_astro/inter-latin-700-normal.Y9QfVihh.woff2","/_astro/inter-cyrillic-ext-900-normal.eBkXdnSy.woff2","/_astro/inter-greek-900-normal.qc8gHYLz.woff2","/_astro/inter-latin-ext-900-normal.NRUEfleu.woff2","/_astro/inter-latin-900-normal.jIGvudgd.woff2","/_astro/inter-all-500-normal.xKcDwDi9.woff","/_astro/inter-all-400-normal.aTkQBzfv.woff","/_astro/inter-all-600-normal.OscRs15h.woff","/_astro/inter-all-800-normal.TU5F3j6G.woff","/_astro/inter-all-700-normal.w8d0EwWo.woff","/_astro/inter-all-900-normal.lj8yi_e5.woff","/_astro/swmcforms.MtDTtUHN.gif","/_astro/index.JstcvSCe.css","/favicon.svg","/_astro/Brands.DvvyDlSB.js","/_astro/Chart.YeunklNg.js","/_astro/CopyToClipboard.AZ39pDsH.js","/_astro/FAQ.Aw_D1-8S.js","/_astro/Hero.E68f3ctN.js","/_astro/Memes.Q3nQPNLD.js","/_astro/Navbar.i8tkiNIz.js","/_astro/ScrollUpButton.l_rJVq9E.js","/_astro/SeiWhaleLogo.CK3K2jcK.js","/_astro/client.2wOxL1Aq.js","/_astro/index.UCAuQZPX.js","/_astro/jsx-runtime.G4i-1Giy.js","/_astro/motion.j5wMBtoh.js","/_astro/page.u0qpNxxm.js","/_astro/page.u0qpNxxm.js","/index.html"],"buildFormat":"directory"});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
