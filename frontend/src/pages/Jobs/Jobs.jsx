import React from 'react'

const Jobs = () => {

    const jobPostings = {
        "1": {
            jobTitle: "React Developer",
            company: {
            name: "Techverse Inc",
            logo: "https://logo.clearbit.com/techverse.com",
            website: "https://techverse.com"
            },
            description: "We are looking for a skilled React Developer to build UI interfaces...",
            location: "Remote",
            type: "Full-time",
            salary: "6-10 LPA",
            experience: "1-3 years",
            skills: ["React", "JavaScript", "Git", "REST APIs"],
            education: "B.Tech in CS/IT or related field",
            applyLink: "https://techverse.com/careers/react-dev",
            deadline: "2025-06-30"
        },
        "2": {
            jobTitle: "Node.js Backend Developer",
            company: {
            name: "CodeWorx Labs",
            logo: "https://logo.clearbit.com/codeworxlabs.com",
            website: "https://codeworxlabs.com"
            },
            description: "Join our backend team to develop scalable REST APIs and services.",
            location: "Bangalore",
            type: "Full-time",
            salary: "8-12 LPA",
            experience: "2-4 years",
            skills: ["Node.js", "Express", "MongoDB", "JWT"],
            education: "B.Tech or B.Sc in CS/IT",
            applyLink: "https://codeworxlabs.com/careers/backend-dev",
            deadline: "2025-07-05"
        },
        "3": {
            jobTitle: "Fullstack Developer (MERN)",
            company: {
            name: "StackFusion",
            logo: "https://logo.clearbit.com/stackfusion.io",
            website: "https://stackfusion.io"
            },
            description: "We need a Fullstack Developer to work on our SaaS platform using MERN stack.",
            location: "Hybrid – Chennai",
            type: "Full-time",
            salary: "9-14 LPA",
            experience: "3-5 years",
            skills: ["MongoDB", "Express", "React", "Node.js"],
            education: "B.Tech in CS or equivalent experience",
            applyLink: "https://stackfusion.io/jobs/fullstack-dev",
            deadline: "2025-06-28"
        },
        "4": {
            jobTitle: "Machine Learning Engineer",
            company: {
            name: "Neurolytics AI",
            logo: "https://logo.clearbit.com/neurolytics.ai",
            website: "https://neurolytics.ai"
            },
            description: "Looking for an ML Engineer to develop predictive models in healthcare domain.",
            location: "Remote",
            type: "Full-time",
            salary: "10-15 LPA",
            experience: "1-3 years",
            skills: ["Python", "TensorFlow", "Pandas", "scikit-learn"],
            education: "M.Tech or B.Tech in AI/ML/Data Science",
            applyLink: "https://neurolytics.ai/careers/ml-engineer",
            deadline: "2025-07-10"
        },
        "5": {
            jobTitle: "DevOps Engineer",
            company: {
            name: "InfraMind",
            logo: "https://logo.clearbit.com/inframind.dev",
            website: "https://inframind.dev"
            },
            description: "Seeking a DevOps Engineer to automate CI/CD pipelines and manage cloud deployments.",
            location: "Hyderabad",
            type: "Full-time",
            salary: "10-18 LPA",
            experience: "2-5 years",
            skills: ["Docker", "Kubernetes", "AWS", "Terraform", "CI/CD"],
            education: "B.Tech in CS/IT or relevant field",
            applyLink: "https://inframind.dev/jobs/devops",
            deadline: "2025-07-15"
        }
    };

    const jobPostingsArray = Object.values(jobPostings)
  return (
    <>
      <div className='container' style={{backgroundColor:"white"}}>
        {
            jobPostingsArray.map((job,index) => (
                <div className='job-card' key={index}>
                    <h3>{job.jobTitle}</h3>
                    <h3>{job.company.name}</h3>
                    <h3>{job.company.logo}</h3>
                    <h3>{job.description}</h3>
                    <h3>{job.company.website}</h3>
                    <h3>{job.location}</h3>
                    <h3>{job.type}</h3>
                    <h3>{job.salary}</h3>
                    <h3>{job.experience}</h3>
                    <h3>{job.skills.map((skill,index1) => (
                        <div key={index1}>
                            {skill}
                        </div>
                    ))}</h3>
                    <h3>{job.education}</h3>
                    <h3>{job.applyLink}</h3>
                    <h3>{job.deadline}</h3>
                </div>
            ))
        }
      </div>
    </>
  )
}

export default Jobs
