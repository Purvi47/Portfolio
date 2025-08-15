import React from "react";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function ProjectCard({ image, title, description, github }) {
  return (
    <div className="project-card">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
      <p className="project-desc">{description}</p>
      <div className="github-link">
        <a href={github} target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="GitHub"
          />
        </a>
      </div>
    </div>
  );
}

function Home() {
  const projects = [
    {
      image: "https://cdn-icons-png.flaticon.com/512/2921/2921822.png",
      title: "Food Delivery Web App",
      description:
        "Full-stack MERN app for browsing food items, adding to cart, placing orders, and secure authentication.",
      github: "https://github.com/Purvi47/Food-Delivery-WebApp",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/427/427735.png",
      title: "Jeevankrishi",
      description:
        "React + Flask app with crop recommendations, fertilizer suggestions, weather updates, and agri news.",
      github: "https://github.com/Purvi47/Jeevankrishi",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      title: "Student Enrollment Project",
      description:
        "Node.js + Express + MongoDB app for adding, updating, and managing student records with validation.",
      github: "https://github.com/Purvi47/Student-Enrollment-Project",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/1006/1006363.png",
      title: "Pathfinding Visualizer BFS/DFS",
      description:
        "Interactive React grid to visualize BFS & DFS algorithms with adjustable speed .",
      github: "https://github.com/Purvi47/pathfinding-visualizer-bfs-dfs",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/1006/1006360.png",
      title: "Typing Speed Analyzer",
      description:
        "Python Tkinter app to test typing speed with difficulty settings and CSV export.",
      github: "https://github.com/Purvi47/Typing-Speed-Analyzer",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/3565/3565418.png",
      title: "Object Detection",
      description:
        "YOLOv8 + OpenCV real-time object detection with bounding boxes and object names.",
      github: "https://github.com/Purvi47/Object-Detection",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/188/188987.png",
      title: "Pokemon Explorer",
      description:
        "React app using PokéAPI to display and search the first 150 Pokémon by name or type.",
      github: "https://github.com/Purvi47/pokemon-explorer",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/1116/1116453.png",
      title: "Weather App",
      description:
        "HTML, CSS, and JavaScript app for real-time weather updates and forecasts.",
      github: "https://github.com/Purvi47/Weather-App",
    },
    {
      image: "/images/rock-paper-scissors.png",
      title: "Rock Paper Scissors Game",
      description:
        "Interactive Rock Paper Scissors game using HTML, CSS, and JavaScript.",
      github: "https://github.com/Purvi47/Rock-Paper-Scissor-game",
    },
    {
      image: "/images/calculator.png",
      title: "Calculator",
      description: "Web-based calculator built with HTML, CSS, and JavaScript.",
      github: "https://github.com/Purvi47/Calculator",
    },
    {
      image: "/images/logo.png",
      title: "Amazon Clone",
      description: "Amazon front-end layout clone built with HTML and CSS.",
      github: "https://github.com/Purvi47/Amazon-Clone",
    },
  ];

  return (
    <>
      <About />
      <Skills />
      <section id="projects" className="projects-preview">
        <h2 className="section-title">My Work</h2>
        <div className="projects-grid">
          {projects.map((p, index) => (
            <ProjectCard key={index} {...p} />
          ))}
        </div>
      </section>
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
