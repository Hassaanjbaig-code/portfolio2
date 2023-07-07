import { Url } from "next/dist/shared/lib/router/router";

export const navbarname = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'Project', path: '/projects' },
  { id: 3, name: 'About', path: '/about' },
  { id: 4, name: 'Contact', path: '/contact' },
]

type ProjectData = {
  id: number;
  title: string;
  frames: (string | number)[];
  Image: string;
  description: string;
  description2: string;
  language: string[];
  sourcecode: string | null;
  Live_demo: string | null;
};

export const projectdata: ProjectData[] = [
  {
    id: 1,
    title: 'ToDo List',
    frames: ['Todo', 'Font end development', 2022],
    Image: '/ToDo List.PNG',
    description: 'In this project that you can add your daily schedule. This system also help you mark and unmark what you have finshed. Also you can edit the input that you add in it. You can clear all the input that you add and also clear all the complete task. All of this will be save in local storage that you can see even you refersh the page or come back after sometime',
    description2: 'In this project that you can add your daily schedule. This system also help you mark and unmark what you have finshed. Also you can edit the input that you add in it. You can clear all the input that you add and also clear all the complete task. All of this will be save in local storage that you can see even you refersh the page or come back after sometime',
    language: ['HTML', 'CSS', 'JavaScript'],
    sourcecode: 'https://github.com/Hassaanjbaig-code/To-do-webpack',
    Live_demo: 'https://hassaanjbaig-code.github.io/To-do-webpack/dist/',
  },
  {
    id: 2,
    title: 'Live Stock',
    frames: ['Live Stock', 'Font end development', 2022],
    Image: '/Live Stock.png',
    description: 'About Stock Management project is a sole react-redux project that use Financial Modeling Prep API to display a list of stock and Income statement. Stock show the proce and which industry it belong. Users can access the personal list the profile section.',
    description2: 'In this project that you can view the live stock of the company. You can also view the income statement of the company through you can make sure to Invest in the company or not. You can serach a company by there name. About Stock Management project is a sole react-redux project that use Financial Modeling Prep API to display a list of stock and Income statement. Stock show the proce and which industry it belong. Users can access the personal list the profile section.',
    language: ['React', 'React - Redux'],
    sourcecode: 'https://github.com/Hassaanjbaig-code/React-Capstone',
    Live_demo: 'https://deploy-preview-5--glowing-boba-18fd9b.netlify.app/',
  },
  {
    id: 3,
    title: 'Budge App',
    frames: ['Budge', 'Full Stack Dev', 2023],
    Image: '/Budge App.png',
    description: "Budge App that allows users to track their budget by keeping track of their transactions based on different catagories specified by the user. Users can also track their budget where they spend it. The project has a login and sign up authentication after that there are two pages one is for the categories and the other is for the transactions. The project is built using Ruby on Rails. Also the project is hosted on render and the database is hosted on also render. The project is also unit test and integrated test with rspec and Capybara.",
    description2: "Budge App that allows users to track their budget by keeping track of their transactions based on different catagories specified by the user. Users can also track their budget where they spend it. The project has a login and sign up authentication after that there are two pages one is for the categories and the other is for the transactions. The project is built using Ruby on Rails",
    language: ['HTML', 'Ruby on Rail', 'CSS', "Ruby"],
    sourcecode: 'https://github.com/Hassaanjbaig-code/Budge-App.git',
    Live_demo: 'https://budge-app-t3v8.onrender.com',
  },
  {
    id: 4,
    title: 'Tour Reservation',
    frames: ['Tour', 'Full Stack Dev', 2023],
    Image: '/Tour Reservation.png',
    description: "A tour reservation app is a software application designed to facilitate the process of booking and managing tour reservations. It allows users to browse available tours, select desired tour packages, specify booking details, and receive confirmation for their reservations. Built with React, Tailwind CSS, Redux, and the Backend is Ruby, Ruby on Rails Test with Rspec",
    description2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    language: ['React', 'Redux','Ruby on Rail', 'Tailwind CSS', 'Rspec'],
    sourcecode: 'https://github.com/Hassaanjbaig-code/Tour-reservation',
    Live_demo: null
  },
];

export const intro = "I'm a passionate developer who loves to create innovative and user-friendly applications that solve real-world problems. My journey in programming began in 2021, and since then, I've been dedicated to expanding my knowledge and skills in the field. As part of my pursuit, I enrolled in Microverse, an online software program, in 2022, where I had the opportunity to dive deep into full-stack web development. With this experience, I can help bring your ideas to life! Take a look at some of my work and experience below, and if you like what you see, don't hesitate to reach out. You can also grab a copy of my resume below to learn more about my skills and experience. Let's create something amazing together!";

export const resume = "https://docs.google.com/document/d/1AJoLSthvxEOgcU_DZVjgyKcJvscb33wlCZcNRr2NS3A/edit?pli=1";

export const Front_End = [ "HTML5", "CSS", "JavaScript", "Tailwind CSS", "BootStrap5", "React", "Redux", "SASS" ];
export const Front = [
  { id: 1 ,name: "HTML5", src: '/html5.png' },
  { id: 2 ,name: "CSS", src: "/css.png" },
  { id: 3 ,name: "JavaScript", src: "/javascript.gif" },
  { id: 4 ,name: "Tailwind CSS", src: "/tailwind css.png" },
  { id: 5 ,name: "Bootstrap", src: "/bootstrap.png" },
  { id: 6 ,name: "React", src: "/react.png" },
  { id: 7 ,name: "Redux", src: "/redux.png" },
  { id: 8 ,name: "SASS", src: "/sass.png" },
]

export const Back_End = [ "Ruby", "Rail", "PostgreSQL", "Rswag", "JWT", "CanCanCan", "Node JS", "Device" ];

export const Back = [
  {id: 1, name: "Ruby", src: "/ruby.png"},
  {id: 8, name: "Device", src: "/Device.png"},
  {id: 2, name: "Rails", src: "/rails.png"},
  {id: 3, name: "PostgreSQL", src: "/postgreSQL.png"},
  {id: 4, name: "Rswag", src: "/Testing.png"},
  {id: 5, name: "JWT", src: "/Device.png"},
  {id: 6, name: "CanCanCan", src: "/Authorization.png"},
  {id: 7, name: "Node Js", src: "/node.png"},
]

export const Developer =[
  { id: 1, name: "GIT", src: "/Git.png"},
  { id: 2, name: "Github", src: "/Github.png"},
  { id: 3, name: "Chrome Dev Tool", src: "/Browser.png"},
  { id: 4, name: "Netlify", src: "/Netlify_logo.svg"},
  { id: 5, name: "Render", src: "data:image/jpeg;base64,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5VCADwOwH6Vg+Avjd8c/2ZdOfwmdAmeyhdvKttSspHEWTzsZSMqT9RXq3wr/AGsvjt8QfiB4d0+bwvFHo1xfwxXs0GmSgJCzgOSxbjAyc1u+dNuNidOp0n/BTxTH8MPBityy6mwP/fk16l+wV/ybH4Z/663P/o5q4L/gpR4b1XxJ8OfCiaVp11qLxaozSLbRGQqDEwBOK9J/Yf0e+0L9nDw5aajaTWN0slwWhuEKOAZWIODXM/4K9S18TPif9ur/AJOsP/XKz/ma9w/4KRKx+EHgZgDtF0uT/wBsa8s/bX8CeIta/aeF5YaHf3lo0VoFmgt2dDgnPIFfZH7R3wPk+OHwVGgwFYdYt447izaTgCVVHyn0z0rZyUfZtk2vcxf2DJEf9m3QAhBKyTBseu6vjz/goJ/yctF/162tQ/Db4vfGj9lCC88LnwvJNZmYutvf2sjKrd2R1PINcr45g+Kf7S3xGt/Elz4LvPtbeVDiys5FiCqRgktn+dXCDjUc76Cb0sfUf/BQZJG/Z38GMoJRbiHce3+p4rwz9nfwH+0F4i+HMN18OPEn9neHPPkVbdb2OPbIG+bKkZ5Nfdvxm+Cq/GX4HnwncMLXUFtopLaR+kc6Lxn26j8a+AvBvin44fse6hqOjwaHMbCaUs0F1atNbOw43oynuMdDUU5c0OVbjlvdnUePP2Of2h/idqEF94pvbTW7uCPyYprrUELKmSdowOmSa96/a28P3nhP9h+z0XUCrX2nwaZazmNty70KK2D3GRXjOm/toftA+KLqK303wlbuzOAfs+lTMcZ92r6U/bi0jU/EX7M+qW9lYzXl801o7QW8ZZuJFLcD0qZOXNFStuGlnY4D/gmL/wAkj8S/9hj/ANpJX2RXyR/wTf8ADuqeHPhT4hi1XT7nTpZNWLolzEULDykGQD2r63rCt8bLjsFFFFYlBRRRQAUUUUAFFFFACEBgQRkGqNloOnabM01rY29vKwwXjjCkj04q/RQZypwk1KSTa28ihZ6Dpun3BntrG3t5yCDJHGFbnrzSW/h/TbS7+1Q2FvFc5J81IwGyevNaFFBCoUVa0FprstyhHoGmx3n2xLG3W63bvOEY35PfNIdA01r37YbG3N1u3ed5Y359c1oUUB9Xo7ci3vst+/qFJ160tFBuJjHQYpaKKAGPEkn30Vv94ZpVjWPhVCj2GKdRQAhAPUZopaKAE2g9RS0UUAMeJJPvorf7wzTlUKMKAB7ClooAKa8ayDDqrD/aGadRQAxY0j+6ir9BindaWigBAAOgxS0UUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH/9k="},
  { id: 6, name: "Vs Code", src: "/VS code.png"},
  { id: 7, name: "Terminal", src: "/Console.png"},
  { id: 8, name: "Linux", src: "/Linux.gif"},
  {id: 9, name: "Pair Programming", src: "/Programming.gif"}
]

export const Personl = [
  { id: 1, name: "Hassaan Baig", src: '/person-icon-1680.png' },
  { id: 2, name: "Lahore, Pakistan", src: '/location.png' }
]

