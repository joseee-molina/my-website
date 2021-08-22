import video1 from '../../images/gitlet-demo-short.mp4'
import video2 from '../../images/byow-demo-fin.mp4'
import video3 from '../../images/erisc-demo-fin.mp4'
import video4 from '../../images/dco-demo-fin.mp4'
import video5 from '../../images/deques-demo-fin.mp4'


export const gitlet =  {
    title:"Gitlet",
    p1: "Built using: Java",
    p2: "Functional clone of git, this project will allow you to go back to previous versions of your code, work on different branches, merge them and more. This is one of the biggest projects I've ever coded",
    p3: "This project supports the following commands: init, add, commit, status, rm, log, global-log, find, checkout, branch, rm-branch, reset and merge ",
    p4: "Data structures heavy project, where I had to efficiently traverse trees of commits, save files in hash tables, identify merge splitpoints using sets, and save the information of every file in the history of your work, using encryption. I also applied the test driven development by doing unit and integration testing for every command.",
    video: video1
}

export const byow = {
    title: "Build Your Own World (BYOW)",
    p1: "Built using: Java",
    p2: "Time to have fun! You give me a seed, I give you a completely random world. The challenging part of the project was generating random positions and shapes to create rooms around the world and then connect them using hallways (using shortest path and minnimum spanning trees)",
    p3: "BYOW allows you to: choose a language to play, load a previous game, replay a previous game, create a new game by inserting a seed, save the current game, interact with the other elements, and have fun!",
    p4: "Applied knowledge of graphs, pseudorandomness, debugging and used data sctructures such as HashMaps, priority queues, and linked lists",
    video: video2

}

export const erisc = {
    title: "Ectremely Reduced Instruction Set Computer (ERISC)",
    p1: "Built using: C++",
    p2: "Have you ever wondered how does C++ read your code? ERISC is a set of recursive methods that parse inputs from a .txt file and execute the reduced inscrution set inside it, outputing another .txt file",
    p3: "The ERISC code will read line by line looking for expressions, such as: declaration and assignment of variables, addition, subtraction, multiplication, division, modulo, while loops, conditionals (and, or), and declaring and executing methods",
    p4: "I learned about machine architecture, data visualization and logic",
    video: video3
}

export const deques = {
    title: "Deques",
    p1: "Built using: Java",
    p2: "Two implementations of a Double Ended Queue (deque): using doubly linked Lists (with circular topology) and using arrays implementing the deque API. At the end, we used the Deque interface to implement the Karplus-Strong algorithm, and play Guitar Hero! Listen to this beautiful result",
    p3: "My implementation supports the following methods: addFirst, addLast, isEmpty, printDeque, removeFirst, removeLast and get(int index) ",
    p4: "Applied knowledge of class polymorphism, inheritance and unit testing",
    video: video5
}

export const dco = {
    title: "2048",
    p1: "Built using: Java",
    p2: "Developed the core logic behind the game: merge two tiles that have the same value, do nothing if they have different values, and lose if you have no available movements! The GUI code, handle key-presses and other methods were already implemented",
    p3: "Connected the pieces of multiple massive classes such as Tile, Board, Side and Model, in order to make the game work. This is a valuable skill when you get to work in a giant code that you didn't write, but that you have to understand in order to work with it.",
    p4: "The methods were not very hard to implement using linked lists, however, the design decisions were very important to make the code clean and maintainable",
    video: video4
}

export const ctg = {
    title: "Call the Guy!",
    p1: "Building using: Swift, Objective C",
    p2: "I've noticed that today, most people own smartphones, why not use them to get jobs? I'm not talking about Linkedin, I'm talking about those who don't have a degree but still have skills in demand that people have to know about",
    p3: "For example: good plumbers in my city, where are them? People may give you recommendations but why not gather them all in a phone app where they can show their past work and people give comments about them? Call The Guy will help you with that.",
    
}