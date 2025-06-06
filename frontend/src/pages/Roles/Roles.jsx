import React from 'react'

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
    <div style={{backgroundColor:"teal"}}>
      <h3>These Are Roles you Can Apply</h3>
      <div className='container'>
        {
            RolesArray.map((role,index) => (
                <div key={index} className='roles'>
                    <h1>{index + 1}</h1>
                    <h1>{role.roleName}</h1>
                    <h1>{role.skillSet}</h1>
                    <h1>{role.experience}</h1>
                    <h1>{role.description}</h1>
                    <h1>{role.location}</h1>
                    <h1>{role.responsibilities}</h1>
                    <h1>{role.tools}</h1>
                    <h1>{role.education}</h1>
                    <h1>{role.salaryRange}</h1>
                    <h1>{role.reportingTo}</h1>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Roles
