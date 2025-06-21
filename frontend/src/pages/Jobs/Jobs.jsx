import React from "react";
import "./Jobs.css";

const Jobs = () => {
  const jobPostings = {
    "1": {
      jobTitle: "React Developer",
      company: {
        name: "Techverse Inc",
        logo: "https://logo.clearbit.com/techverse.com",
        website: "https://techverse.com",
      },
      description: "We are looking for a skilled React Developer to build UI interfaces...",
      location: "Remote",
      type: "Full-time",
      salary: "6-10 LPA",
      experience: "1-3 years",
      skills: ["React", "JavaScript", "Git", "REST APIs"],
      education: "B.Tech in CS/IT or related field",
      applyLink: "https://techverse.com/careers/react-dev",
      deadline: "2025-06-30",
    },
    "2": {
      jobTitle: "Node.js Backend Developer",
      company: {
        name: "CodeWorx Labs",
        logo: "https://logo.clearbit.com/codeworxlabs.com",
        website: "https://codeworxlabs.com",
      },
      description: "Join our backend team to develop scalable REST APIs and services.",
      location: "Bangalore",
      type: "Full-time",
      salary: "8-12 LPA",
      experience: "2-4 years",
      skills: ["Node.js", "Express", "MongoDB", "JWT"],
      education: "B.Tech or B.Sc in CS/IT",
      applyLink: "https://codeworxlabs.com/careers/backend-dev",
      deadline: "2025-07-05",
    },
    "3": {
      jobTitle: "Fullstack Developer (MERN)",
      company: {
        name: "StackFusion",
        logo: "https://logo.clearbit.com/stackfusion.io",
        website: "https://stackfusion.io",
      },
      description: "We need a Fullstack Developer to work on our SaaS platform using MERN stack.",
      location: "Hybrid – Chennai",
      type: "Full-time",
      salary: "9-14 LPA",
      experience: "3-5 years",
      skills: ["MongoDB", "Express", "React", "Node.js"],
      education: "B.Tech in CS or equivalent experience",
      applyLink: "https://stackfusion.io/jobs/fullstack-dev",
      deadline: "2025-06-28",
    },
    "4": {
      jobTitle: "Machine Learning Engineer",
      company: {
        name: "Neurolytics AI",
        logo: "https://logo.clearbit.com/neurolytics.ai",
        website: "https://neurolytics.ai",
      },
      description: "Looking for an ML Engineer to develop predictive models in healthcare domain.",
      location: "Remote",
      type: "Full-time",
      salary: "10-15 LPA",
      experience: "1-3 years",
      skills: ["Python", "TensorFlow", "Pandas", "scikit-learn"],
      education: "M.Tech or B.Tech in AI/ML/Data Science",
      applyLink: "https://neurolytics.ai/careers/ml-engineer",
      deadline: "2025-07-10",
    },
    "5": {
      jobTitle: "DevOps Engineer",
      company: {
        name: "InfraMind",
        logo: "https://logo.clearbit.com/inframind.dev",
        website: "https://inframind.dev",
      },
      description: "Seeking a DevOps Engineer to automate CI/CD pipelines and manage cloud deployments.",
      location: "Hyderabad",
      type: "Full-time",
      salary: "10-18 LPA",
      experience: "2-5 years",
      skills: ["Docker", "Kubernetes", "AWS", "Terraform", "CI/CD"],
      education: "B.Tech in CS/IT or relevant field",
      applyLink: "https://inframind.dev/jobs/devops",
      deadline: "2025-07-15",
    },
  };

  const jobPostingsArray = Object.values(jobPostings);

  return (
    <section className="jobs-container">
      {jobPostingsArray.map((job, index) => (
        <article className="job-card" key={index} tabIndex={0}>
          <header className="job-header">
            <img
              src={job.company.logo}
              alt={`${job.company.name} logo`}
              className="company-logo"
              loading="lazy"
            />
            <div className="job-title-info">
              <h2 className="job-title">{job.jobTitle}</h2>
              <a
                href={job.company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="company-name"
              >
                {job.company.name}
              </a>
            </div>
          </header>

          <p className="job-description">{job.description}</p>

          <ul className="job-meta">
            <li>
              <strong>Location:</strong> {job.location}
            </li>
            <li>
              <strong>Type:</strong> {job.type}
            </li>
            <li>
              <strong>Salary:</strong> {job.salary}
            </li>
            <li>
              <strong>Experience Required:</strong> {job.experience}
            </li>
            <li>
              <strong>Education:</strong> {job.education}
            </li>
          </ul>

          <div className="job-skills">
            <strong>Required Skills:</strong>
            <ul>
              {job.skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>

          <p className="apply-link">
            <strong>Apply:</strong>{" "}
            <a href={job.applyLink} target="_blank" rel="noopener noreferrer">
              Apply Here
            </a>
          </p>

          <p className="deadline">
            <strong>Deadline:</strong> {job.deadline}
          </p>
        </article>
      ))}
    </section>
  );
};

export default Jobs;
