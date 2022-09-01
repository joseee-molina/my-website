import video1 from "../../images/gitlet-demo-short.mp4";
import video2 from "../../images/byow-demo-fin.mp4";
import video3 from "../../images/erisc-demo-fin.mp4";
import video4 from "../../images/dco-demo-fin.mp4";
import video5 from "../../images/deques-demo-fin.mp4";
import video6 from "../../images/orchata_vid.MP4";

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
  p2: "Time to have fun! You give me a seed, I give you a completely random world. The challenging part of the project was generating random positions and shapes to create rooms around the world and then connect them using hallways (using shortest path and minnimum spanning trees)",
  p3: "BYOW allows you to: choose a language to play, load a previous game, replay a previous game, create a new game by inserting a seed, save the current game, interact with the other elements, and have fun!",
  p4: "Applied knowledge of graphs, pseudorandomness, debugging and used data sctructures such as HashMaps, priority queues, and linked lists",
  video: video2,
};

export const erisc = {
  title: "Ectremely Reduced Instruction Set Computer (ERISC)",
  p1: "Built using: C++",
  p2: "Have you ever wondered how does C++ read your code? ERISC is a set of recursive methods that parse inputs from a .txt file and execute the reduced inscrution set inside it, outputing another .txt file",
  p3: "The ERISC code will read line by line looking for expressions, such as: declaration and assignment of variables, addition, subtraction, multiplication, division, modulo, while loops, conditionals (and, or), and declaring and executing methods",
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
  p2: "Developed the core logic behind the game: merge two tiles that have the same value, do nothing if they have different values, and lose if you have no available movements! The GUI code, handle key-presses and other methods were already implemented",
  p3: "Connected the pieces of multiple massive classes such as Tile, Board, Side and Model, in order to make the game work. This is a valuable skill when you get to work in a giant code that you didn't write, but that you have to understand in order to work with it.",
  p4: "The methods were not very hard to implement using linked lists, however, the design decisions were very important to make the code clean and maintainable",
  video: video4,
};

export const ctg = {
  title: "Call the Guy!",
  p1: "Building using: Swift, Objective C",
  p2: "I've noticed that today, most people own smartphones, why not use them to get jobs? I'm not talking about Linkedin, I'm talking about those who don't have a degree but still have skills in demand that people have to know about",
  p3: "For example: good plumbers in my city, where are them? People may give you recommendations but why not gather them all in a phone app where they can show their past work and people give comments about them? Call The Guy will help you with that.",
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
  p1: `I worked closely with Heber Garza (Tech Lead) and Javier Gonzalez (CTO) on the development of new features for the app, and tech innovation within the company. I got to develop my own feature from scratch which is the personalized recommendation algorithm for the products you buy, which you can see on the left! This feature has increased the average ticket significantly. I achieved this using Python, AWS, Ruby on Rails, GraphQL, React Native, PostgreSQL, and a lot of mentorship and feedback.
  - I designed and discussed other technological innovations that would be interesting to implement within the app, but didn't have time to develop them.
  - I also interviewed one candidate for the position of Software Engineer. I was in charge of interviewing for the algorithmic section. 
  My manager: Heber Garza.
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
