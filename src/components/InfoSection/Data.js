import img1 from "../../images/svg-1.svg";
import img2 from "../../images/svg-2.svg";
import img3 from "../../images/svg-3.svg";
import img4 from "../../images/svg-4.svg";
import img5 from "../../images/svg-5.svg";
import img6 from "../../images/svg-6.svg";

export const homeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "continuous improvement",
  headLine: "Striving for excellence",
  description:
    "Hi there! I live in Dallas, Texas. I'm passionate about coding, math and science.",
  buttonLabel: "Contact me!",
  imgStart: false,
  img: img3,
  alt: "Car",
  dark: true,
  primary: true,
  darkText: false,
  desc2:
    "This website shows the progress I've made during my early career in the Tech Industry. I have not reached my potential yet. There is still room for growth. I live by the principle of continuous improvement.",
};

export const homeObjTwo = {
  id: "contact",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Do you want to stay in touch?",
  headLine: "Feel free to contact me!",
  description: "Send me a 'Hello', an 'Hola', or a '你好' ",
  buttonLabel: "Contact me!",
  imgStart: true,
  img: img2,
  alt: "piggy",
  dark: false,
  primary: false,
  darkText: true,
  to: "mailto:jxm210075@utdallas.edu?subject=Hey Jose",
};
