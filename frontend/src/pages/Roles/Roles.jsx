import React from 'react';
import Assets from '../../assets/Assets';

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
        "Optimize applications for speed and scalability"
      ],
      tools: ["React", "Redux", "Git", "Webpack"],
      education: "Bachelor's in Computer Science or related field",
      salaryRange: "6-10 LPA",
      reportingTo: "Engineering Manager",
      extra: {}
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
        "Implement authentication and authorization"
      ],
      tools: ["Node.js", "MongoDB", "Docker", "Postman"],
      education: "Bachelor's in Computer Science",
      salaryRange: "7-12 LPA",
      reportingTo: "Tech Lead",
      extra: {}
    },
    "3": {
      roleName: "Data Scientist",
      skillSet: ["Python", "Pandas", "Scikit-learn", "Machine Learning", "Statistics"],
      experience: "2+ years",
      description: "Analyze data and build predictive models to drive decision making.",
      location: "Hybrid",
      responsibilities: [
        "Collect and clean data",
        "Build ML models",
        "Present insights to stakeholders"
      ],
      tools: ["Jupyter", "TensorFlow", "SQL"],
      education: "Master's in Data Science or related field",
      salaryRange: "8-15 LPA",
      reportingTo: "Head of Data Science",
      extra: {}
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
        "Monitor system performance"
      ],
      tools: ["AWS", "Jenkins", "Terraform", "Prometheus"],
      education: "Bachelor's in IT or related",
      salaryRange: "9-14 LPA",
      reportingTo: "Infrastructure Manager",
      extra: {}
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
        "Gather and prioritize requirements"
      ],
      tools: ["JIRA", "Confluence", "Trello"],
      education: "MBA or related field",
      salaryRange: "12-20 LPA",
      reportingTo: "Director of Product",
      extra: {}
    }
  };

  const RolesArray = Object.values(Roles);

  return (
    <div style={{ backgroundColor: '#f7f7f7', padding: '30px' }}>
      <h1 style={{ textAlign: 'center', fontSize: '32px', marginBottom: '30px' }}>
        🎯 Roles You Can Apply For
      </h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '20px' }}>
        {RolesArray.map((role, index) => (
          <div key={index} style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '16px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{ color: '#333', marginBottom: '10px' }}>{role.roleName}</h2>
            <p style={{ fontStyle: 'italic', marginBottom: '10px' }}>{role.description}</p>

            <div style={{ marginBottom: '10px' }}>
              <strong>Experience:</strong> {role.experience} <br />
              <strong>Location:</strong> {role.location} <br />
              <strong>Education:</strong> {role.education} <br />
              <strong>Salary:</strong> {role.salaryRange} <br />
              <strong>Reporting To:</strong> {role.reportingTo}
            </div>

            <div style={{ marginBottom: '10px' }}>
              <strong>Skills:</strong>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '5px' }}>
                {role.skillSet.map((skill, idx) => (
                  <div key={idx} style={{
                    backgroundColor: '#eef1f6',
                    borderRadius: '20px',
                    padding: '6px 10px',
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '13px'
                  }}>
                    {Assets[skill] && (
                      <img src={Assets[skill]} alt={skill} style={{ height: '18px', marginRight: '5px' }} />
                    )}
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '10px' }}>
              <strong>Tools:</strong>
              <ul style={{ marginTop: '5px', paddingLeft: '18px' }}>
                {role.tools.map((tool, idx) => (
                  <li key={idx}>{tool}</li>
                ))}
              </ul>
            </div>

            <div>
              <strong>Responsibilities:</strong>
              <ul style={{ marginTop: '5px', paddingLeft: '18px' }}>
                {role.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roles;
