import React from "react";
import Assets from "../../assets/Assets";
import "./Roles.css";

const Roles = () => {
  const Roles = {
    "1": {
      roleName: "Frontend Developer",
      skillSet: ["React", "JavaScript", "CSS", "HTML5"],
      experience: "2+ years",
      description: "Develop and maintain user interfaces for web applications.",
      location: "Remote",
      responsibilities: [
        "Build reusable UI components",
        "Collaborate with backend developers and designers",
        "Optimize applications for speed and scalability",
      ],
      tools: ["React", "Redux", "Git", "Webpack"],
      education: "Bachelor's in Computer Science or related field",
      salaryRange: "6-10 LPA",
      reportingTo: "Engineering Manager",
      extra: {},
    },
    "2": {
      roleName: "Backend Developer",
      skillSet: ["Node.js", "Express", "MongoDB", "REST APIs"],
      experience: "3+ years",
      description: "Develop and maintain backend services and APIs.",
      location: "On-site",
      responsibilities: [
        "Design RESTful APIs",
        "Manage database schema",
        "Implement authentication and authorization",
      ],
      tools: ["Node.js", "MongoDB", "Docker", "Postman"],
      education: "Bachelor's in Computer Science",
      salaryRange: "7-12 LPA",
      reportingTo: "Tech Lead",
      extra: {},
    },
    "3": {
      roleName: "Data Scientist",
      skillSet: ["Python", "Pandas", "Scikit-learn", "Machine Learning", "Statistics"],
      experience: "2+ years",
      description:
        "Analyze data and build predictive models to drive decision making.",
      location: "Hybrid",
      responsibilities: [
        "Collect and clean data",
        "Build ML models",
        "Present insights to stakeholders",
      ],
      tools: ["Jupyter", "TensorFlow", "SQL"],
      education: "Master's in Data Science or related field",
      salaryRange: "8-15 LPA",
      reportingTo: "Head of Data Science",
      extra: {},
    },
    "4": {
      roleName: "DevOps Engineer",
      skillSet: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
      experience: "3+ years",
      description: "Manage infrastructure and deployment pipelines.",
      location: "Remote",
      responsibilities: [
        "Automate deployment processes",
        "Manage cloud infrastructure",
        "Monitor system performance",
      ],
      tools: ["AWS", "Jenkins", "Terraform", "Prometheus"],
      education: "Bachelor's in IT or related",
      salaryRange: "9-14 LPA",
      reportingTo: "Infrastructure Manager",
      extra: {},
    },
    "5": {
      roleName: "Product Manager",
      skillSet: ["Agile", "Scrum", "Roadmap Planning", "Stakeholder Management"],
      experience: "4+ years",
      description: "Lead product development from concept to launch.",
      location: "On-site",
      responsibilities: [
        "Define product vision and strategy",
        "Coordinate cross-functional teams",
        "Gather and prioritize requirements",
      ],
      tools: ["JIRA", "Confluence", "Trello"],
      education: "MBA or related field",
      salaryRange: "12-20 LPA",
      reportingTo: "Director of Product",
      extra: {},
    },
  };

  const RolesArray = Object.values(Roles);

  return (
    <section className="roles-section">
      <h1 className="roles-title">🎯 Roles You Can Apply For</h1>

      <div className="roles-grid">
        {RolesArray.map((role, index) => (
          <article className="role-card" key={index}>
            <h2 className="role-name">{role.roleName}</h2>
            <p className="role-description">{role.description}</p>

            <div className="role-info">
              <p>
                <strong>Experience:</strong> {role.experience}
              </p>
              <p>
                <strong>Location:</strong> {role.location}
              </p>
              <p>
                <strong>Education:</strong> {role.education}
              </p>
              <p>
                <strong>Salary:</strong> {role.salaryRange}
              </p>
              <p>
                <strong>Reporting To:</strong> {role.reportingTo}
              </p>
            </div>

            <div className="role-skills">
              <strong>Skills:</strong>
              <div className="skills-list">
                {role.skillSet.map((skill, idx) => (
                  <span className="skill-pill" key={idx}>
                    {Assets[skill] && (
                      <img
                        src={Assets[skill]}
                        alt={skill}
                        className="skill-icon"
                        loading="lazy"
                      />
                    )}
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="role-tools">
              <strong>Tools:</strong>
              <ul>
                {role.tools.map((tool, idx) => (
                  <li key={idx}>{tool}</li>
                ))}
              </ul>
            </div>

            <div className="role-responsibilities">
              <strong>Responsibilities:</strong>
              <ul>
                {role.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Roles;
