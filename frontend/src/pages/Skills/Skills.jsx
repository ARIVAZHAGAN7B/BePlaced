import React from 'react';

const Skills = () => {
  const skills = {
    "1": {
      skillName: "React",
      skillDescription: "A JavaScript library for building user interfaces with reusable components.",
      skillCategory: "Frontend",
      skillLevel: "Intermediate",
      courses: [
        { courseName: "Complete React Developer", courseDuration: "40 hours" },
        { courseName: "React for Beginners", courseDuration: "10 hours" }
      ],
      companyNeeded: ["Amazon", "Flipkart", "Meta"]
    },
    "2": {
      skillName: "Machine Learning",
      skillDescription: "Algorithms and statistical models that computer systems use to perform tasks without explicit instructions.",
      skillCategory: "AI/ML",
      skillLevel: "Advanced",
      courses: [
        { courseName: "Machine Learning by Andrew Ng", courseDuration: "55 hours" },
        { courseName: "Intro to Machine Learning", courseDuration: "15 hours" }
      ],
      companyNeeded: ["Amazon", "Flipkart", "Meta"]
    },
    "3": {
      skillName: "Node.js",
      skillDescription: "JavaScript runtime built on Chrome's V8 engine for building fast and scalable server-side applications.",
      skillCategory: "Backend",
      skillLevel: "Intermediate",
      courses: [
        { courseName: "The Complete Node.js Developer Course", courseDuration: "35 hours" }
      ],
      companyNeeded: ["Amazon", "Flipkart", "Meta"]
    },
    "4": {
      skillName: "CSS Grid",
      skillDescription: "A CSS layout system for creating complex responsive web designs easily.",
      skillCategory: "Frontend",
      skillLevel: "Beginner",
      courses: [
        { courseName: "CSS Grid Layout Crash Course", courseDuration: "5 hours" }
      ],
      companyNeeded: ["Amazon", "Flipkart", "Meta"]
    },
    "5": {
      skillName: "Docker",
      skillDescription: "Platform for developing, shipping, and running applications inside containers.",
      skillCategory: "DevOps",
      skillLevel: "Intermediate",
      courses: [
        { courseName: "Docker Mastery: with Kubernetes + Swarm", courseDuration: "12 hours" }
      ],
      companyNeeded: ["Amazon", "Flipkart", "Meta"]
    }
  };

  const skillArray = Object.values(skills);

  return (
    <div className="container" style={{ padding: '20px', backgroundColor: '#f8f9fa' }}>
      {skillArray.map((skill, index) => (
        <div key={index} style={{
          border: '1px solid #ccc',
          borderRadius: '12px',
          marginBottom: '20px',
          padding: '16px',
          backgroundColor: 'white',
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
        }}>
          <h2 style={{ marginBottom: '8px', color: '#2c3e50' }}>{skill.skillName}</h2>
          <p><strong>Description:</strong> {skill.skillDescription}</p>
          <p><strong>Category:</strong> {skill.skillCategory}</p>
          <p><strong>Level:</strong> {skill.skillLevel}</p>

          <div>
            <strong>Recommended Courses:</strong>
            <ul>
              {skill.courses.map((course, idx) => (
                <li key={idx}>{course.courseName} — <em>{course.courseDuration}</em></li>
              ))}
            </ul>
          </div>

          <div>
            <strong>Companies Hiring:</strong>
            <ul>
              {skill.companyNeeded.map((company, idx) => (
                <li key={idx}>{company}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
