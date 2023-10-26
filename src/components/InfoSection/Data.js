import img2 from "../../images/svg-2.svg";
import img3 from "../../images/svg-3.svg";

export const homeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "continuous improvement",
  headLine: "Striving for excellence",
  description:
    "Hi there! I'm a Computer Science major at UT Dallas, set to graduate in Spring 2024. My academic journey kicked off as a Physics major at Tsinghua University in Beijing, China, where I was honored with a Full-Ride Scholarship. This summer, I completed my internship as an SDE at Amazon, under the AWS Lambda team in Seattle, WA.",
  buttonLabel: "Contact me!",
  imgStart: false,
  img: img3,
  alt: "Car",
  dark: true,
  primary: true,
  darkText: false,
  desc2:
    "Currently, I work at the Computer Science Mentor Center, where I serve as a tutor for several computer science and math courses. Beyond the realm of academics, I have a passion for tennis, dedicating my weekends to volunteering with ACEing Autism, where I impart tennis skills to neurodivergent children. I also hold a 4.0 GPA and two scholarships.",
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
  to: "mailto:jxm210075@utdallas.edu",
};
