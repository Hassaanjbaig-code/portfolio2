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
    Image: '/todo list.png',
    description: 'In this project that you can add your daily schedule. This system also help you mark and unmark what you have finshed. Also you can edit the input that you add in it. You can clear all the input that you add and also clear all the complete task. All of this will be save in local storage that you can see even you refersh the page or come back after sometime.Build with the JavaScript frameWork that is use Webpacker ',
    description2: 'In this project that you can add your daily schedule. This system also help you mark and unmark what you have finshed. Also you can edit the input that you add in it. You can clear all the input that you add and also clear all the complete task. All of this will be save in local storage that you can see even you refersh the page or come back after sometime',
    language: ['HTML', 'CSS', 'JavaScript', 'Webpacker'],
    sourcecode: 'https://github.com/Hassaanjbaig-code/To-do-webpack',
    Live_demo: 'https://hassaanjbaig-code.github.io/To-do-webpack/dist/',
  },
  {
    id: 2,
    title: 'Live Stock',
    frames: ['Live Stock', 'Font end development', 2022],
    Image: '/live stock.png',
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
    Image: '/budge app.png',
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
    Image: '/tour reservation.png',
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
  { id: 4, name: "Netlify", src: "/netlify.png"},
  { id: 5, name: "Render", src: "/render.png"},
  { id: 6, name: "Vs Code", src: "/VS code.png"},
  { id: 7, name: "Terminal", src: "/Console.png"},
  { id: 8, name: "Linux", src: "/Linux.gif"},
  {id: 9, name: "Pair Programming", src: "/Programming.gif"}
]

export const Personl = [
  { id: 1, name: "Hassaan Baig", src: '/person-icon-1680.png' },
  { id: 2, name: "Lahore, Pakistan", src: '/location.png' }
]

export const Personal_link = [
  { id: 1, name: "twitter", src: "https://twitter.com/hassaanb0001", image: "/twitter.png" },
  { id: 2, name: "Linkedin", src: "https://www.linkedin.com/in/hassaan-jawwad-baig/", image: "/Linkedin icon.png" },
  { id: 3, name: "Github", src: "https://github.com/Hassaanjbaig-code/", image: "/Github.png" },
]

