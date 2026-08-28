import d9Wira from "../assets/DRACONIS9-AUG20-WIRA.png";
import d9Infrared from "../assets/D9-INFRARED.jpg";

/**
 * Every transmission entry, in order.
 *
 * This is the only place an entry needs to exist: the route in App.jsx and the
 * prev/next footer both read from this list. To add an entry, append one object.
 *
 * `body` is one string per paragraph. A React element works in place of a
 * string if a paragraph ever needs a link or emphasis inside it.
 *
 * `images` is optional and renders after the body. Give each one its intrinsic
 * width/height so the browser reserves the right box before it loads.
 */
export const transmissions = [
  {
    path: "/transmission",
    heading: "entry 001 — feb 9 2026",
    body: ["something was received here. we are still decoding."],
  },
  {
    path: "/transmission2",
    heading: "entry 002 — feb 10 2026",
    body: [
      "yesterday, an extraterrestrial signal was intercepted at the WIRA observatory.",
      "spectral analysis indicates a high-density metallic core. its doppler profile suggests a direct intercept course with inner solar system. .",
      "the object's velocity and trajectory indicate a potential deep-impact event timeframe of less than 365 days. further communications will remain on this secure NASA intranet channel.",
    ],
  },
  {
    path: "/transmission3",
    heading: "entry 003 — july 14 2026",
    body: [
      "after 6 months of intense observation, our team has been able to confirm the object - dubbed DRACONIS 9 or D9 - is on a clear trajectory towards earth. efforts are underway to divert its path however the size of D9 has cast doubts on our ability to make an impact. we estimate only months left until impact.",
      "some are more hopeful than others. many of us cannot leave the observatory for what we know. but there is still so much we dont know. we do not fully understand what d9 is made of. infrared radar shows it is pulsating with a multi-colored glow.",
      "we estimate impact sometime during EARLY OCTOBER 2026---during the draconoid meteor shower. we are one of the few who know, but word will get out soon.",
    ],
  },
  {
    path: "/transmission4",
    heading: "entry 004 — august 20 2026",
    body: [
      "we have our first imaging of D9. the object is a massive and metallic solid body. infrared imaging confirms a pulsating multi-colored glow.",
    ],
    images: [
      {
        src: d9Wira,
        alt: "Six greyscale WIRA observation frames of DRACONIS 9, an irregular rocky body captured at successive rotations against a noisy black field.",
        width: 850,
        height: 378,
      },
      {
        src: d9Infrared,
        alt: "Two infrared panels of DRACONIS 9, at roughly 1.2 and 4.5 microns. The longer wavelength shows a bright multi-coloured hotspot beside a smaller green source.",
        width: 959,
        height: 581,
      },
    ],
  },
  {
    path: "/transmission5",
    heading: "entry 005 — august 27 2026",
    body: [
      "impact is imminent. october 3, 2026. D9 is now visible to the naked eye. efforts to eliminate it have failed, and word is getting out. we are doomed and i cant sleep",
    ],
  },
];
