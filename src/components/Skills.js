import React from "react";

function Skills() {
  const skills = [
    {
      title: "Programming Languages",
      items: ["Python", "C","Java (basics)"],
    },
    {
      title: "Web Development",
      items: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "HTML",
        "CSS",
        "Flask",
        "Bootstrap",
      ],
    },
    {
      title: "Database Management",
      items: ["MySQL", "PostgreSQL", "MongoDB"],
    },
    {
      title: "Development Tools",
      items: ["Git", "GitHub","Gitlab"],
    },
    {
      title: "Data Science & AI/ML",
      items: [
        "NumPy",
        "Pandas",
        "Scikit-Learn",
        "Seaborn",
        "Matplotlib",
        "Machine Learning",
      ],
    },
    {
      title: "Languages",
      items: ["English", "Hindi","Marathi"],
    },
  ];

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div key={i} className="skill-card">
            <h3 className="skill-title">{skill.title}</h3>
            <div className="skill-tags">
              {skill.items.map((item, idx) => (
                <span key={idx} className="skill-tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
