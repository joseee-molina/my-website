import video1 from "../../images/gitlet-demo-short.mp4";
import video2 from "../../images/byow-demo-fin.mp4";
import video3 from "../../images/erisc-demo-fin.mp4";
import video4 from "../../images/dco-demo-fin.mp4";
import video5 from "../../images/deques-demo-fin.mp4";
import video6 from "../../images/orchata_vid.MP4";
import final_demo from "../../images/final_demo.jpg";
import csmc_logo from "../../images/csmc.png";

export const gitlet = {
  title: "Gitlet",
  p1: "Built using: Java",
  p2: "Functional clone of git, this project will allow you to go back to previous versions of your code, work on different branches, merge them and more. This is one of the biggest projects I've ever coded",
  p3: "This project supports the following commands: init, add, commit, status, rm, log, global-log, find, checkout, branch, rm-branch, reset and merge ",
  p4: "Data structures heavy project, where I had to efficiently traverse trees of commits, save files in hash tables, identify merge splitpoints using sets, and save the information of every file in the history of your work, using encryption. I also applied the test driven development by doing unit and integration testing for every command.",
  video: video1,
};

export const byow = {
  title: "Build Your Own World (BYOW)",
  p1: "Built using: Java",
  p2: "Time to have fun! Every seed will generate a different random playable maze-like game. The challenging part was generating random positions and shapes to create rooms around the world and then connect them using hallways (shortest path and minimum spanning trees)",
  p3: "BYOW allows you to: choose a language to play, load a game, replay a game, create a new game by inserting a seed, save the current game, interact with the other elements, and have fun!",
  p4: "Applied knowledge of graphs, pseudorandomness, debugging and used data structures such as HashMaps, priority queues, and linked lists",
  video: video2,
};

export const erisc = {
  title: "Ectremely Reduced Instruction Set Computer (ERISC)",
  p1: "Built using: C++",
  p2: "How does C++ interpret your code? ERISC comprises a collection of recursive methods designed to parse MIPS-like inputs from a .txt file and execute the condensed instruction set contained within it, ultimately generating an oputput file.",
  p3: "The parser will look for expressions such as: declaration and assignment of variables, addition, subtraction, multiplication, division, modulo, while loops, conditionals (and, or), and methods",
  p4: "I learned about machine architecture, data visualization and logic",
  video: video3,
};

export const deques = {
  title: "Deques",
  p1: "Built using: Java",
  p2: "Two implementations of a Double Ended Queue (deque): using doubly linked Lists (with circular topology) and using arrays implementing the deque API. At the end, we used the Deque interface to implement the Karplus-Strong algorithm, and play Guitar Hero! Listen to this beautiful result",
  p3: "My implementation supports the following methods: addFirst, addLast, isEmpty, printDeque, removeFirst, removeLast and get(int index) ",
  p4: "Applied knowledge of class polymorphism, inheritance and unit testing",
  video: video5,
};

export const dco = {
  title: "2048",
  p1: "Built using: Java",
  p2: "Developed the core logic behind the game: merge two tiles that have the same value, do nothing if they have different values, and lose if you have no available movements!",
  p3: "Worked with classes such as Tile, Board, Side and Model, in order to make the game work.",
  p4: "While implementing the methods with linked lists wasn't particularly challenging, the crucial aspect lay in making well-considered design choices to ensure the code's cleanliness and maintainability",
  video: video4,
};

export const ctg = {
  title: "Call the Guy!",
  p1: "Building using: Swift, Objective C",
  p2: "I've noticed that today, most people own smartphones, why not use them to get jobs? I'm not talking about Linkedin, I'm talking about those who don't have a degree but still have skills in demand that people have to know about",
  p3: "For example: good plumbers in my city, where are them? People may give you recommendations but why not gather them all in a phone app where they can show their past work and people give comments about them? Call The Guy will help you with that.",
};

export const aws = {
  title: "Software Development Engineer at AWS",
  p1: `AWS Lambda Team.
  ▪ Developed an enhancement of the Monitoring Tab of the AWS Lambda console to allow Single Control Over Multiple Dashboards (SCOMD), using Typescript, AWS CloudWatch, DynamoDB and IAM, solving an issue reported by 224 Tickets. Performed unit, integration, acceptance and canary testing on the project.
  ▪ Led Bug Bash (beta testing) sessions with several engineers and debugged emerging issues. Obtained approval from Lead UX Designer and Principal Engineer and deployed to all AWS commercial and government regions.
  ▪ Presented and demoed the project with the entire Lambda Organization - Ajay Nair, General Manager of AWS Lambda, was present.`,
  img: final_demo,
};

export const csmc = {
  title: "Mentor",
  p1: `"At CSMC, we believe in nurturing not just code but the boundless potential of every aspiring computer scientist, lighting the way for innovation and excellence."

  CSMC at UTD is not just a place for learning; it's a community where passion meets guidance, and together, we're unlocking the limitless possibilities of computer science. I am a tutor for the following courses: Programming Fundamentals (C/C++), Computer Science 1 and 2 (Java/C++), Computer Architecture, Discrete Math 1 and 2. I help dozens of engineering and computer science students every day. I have also conducted review sessions and exam-rework sessions.`,
  img: csmc_logo,
};

export const nielseniq = {
  title: "Software Engineer at NielsenIQ",
  p1: `This was my first full-tme job. My team consisted of people from many countries, including the US, Canada, Mexico, Brazil and India. 
  - Deployed a data visualization portal using Angular, Java (Spring Boot REST API), SQL Server and Azure, managing business analytics of hundreds of e-commerces from Latin America (eBit project).
  - Developed a data-collecting web page in React used by thousands of business owners from Mexico.
  - Added functionalities to a Machine Learning ASP.NET Web API and deployed to production.
  - Made changes to a customer-authorization API for the Log In of associates from Mexico of our B2C platform.
  My managers: Roger Leonardis and Alan Bosworth.`,
};

export const orchata = {
  title: "Tech intern at Orchata",
  p1: `I worked closely with Heber Garza (Tech Lead) and Javier Gonzalez (CTO). One of my standout achievements was designing and developing a personalized recommendation algorithm for purchased products, showcased on the left! This feature has increased the average ticket significantly. I used Python, AWS, Ruby on Rails, GraphQL, React Native and PostgreSQL.
  - In addition to this, I played an instrumental role in conceptualizing and deliberating over various technological innovations that could enhance our app's functionality, although time constraints prevented me from bringing these ideas to fruition.
  - Furthermore, I took on the responsibility of conducting an interview for a Software Engineer position, with a focus on evaluating candidates in the algorithmic domain.  My manager: Heber Garza.
  `,
  video: video6,
};

export const hpe = {
  title: "Financial IT Developer Intern at HPE",
  p1: `I was a member of the Financial Planning and Analysis (FP&A) LATAM team.
  - Built data analysis pipelines using Power Automate for the team.
  - Automated financial analysis procedures using AWS Lambda and Python functions. In particular, coded a scheduled task that triggers the execution of a Python program that cleans, organizes and feeds data to different company dashboards (developed using Power BI). These dashboards were later used by the FP&A Team of Latin America to take relevant decisions on HPE businesses in the region.
  My manager: Patricia Tanaka`,
};
