import React from 'react'

const Skills = () => {
    const skills = {
        "1": {
            skillName: "React",
            skillDescription: "A JavaScript library for building user interfaces with reusable components.",
            skillCategory: "Frontend",
            skillLevel: "Intermediate",
            courses: [
            {
                courseName: "Complete React Developer",
                courseDuration: "40 hours"
            },
            {
                courseName: "React for Beginners",
                courseDuration: "10 hours"
            }
            ],
            companyNeeded:["AMazon" , "Flipkart" , "Meta"]
        },
        "2": {
            skillName: "Machine Learning",
            skillDescription: "Algorithms and statistical models that computer systems use to perform tasks without explicit instructions.",
            skillCategory: "AI/ML",
            skillLevel: "Advanced",
            courses: [
            {
                courseName: "Machine Learning by Andrew Ng",
                courseDuration: "55 hours"
            },
            {
                courseName: "Intro to Machine Learning",
                courseDuration: "15 hours"
            }
            ],
            companyNeeded:["AMazon" , "Flipkart" , "Meta"]
        },
        "3": {
            skillName: "Node.js",
            skillDescription: "JavaScript runtime built on Chrome's V8 engine for building fast and scalable server-side applications.",
            skillCategory: "Backend",
            skillLevel: "Intermediate",
            courses: [
            {
                courseName: "The Complete Node.js Developer Course",
                courseDuration: "35 hours"
            }
            ],
            companyNeeded:["AMazon" , "Flipkart" , "Meta"]
        },
        "4": {
            skillName: "CSS Grid",
            skillDescription: "A CSS layout system for creating complex responsive web designs easily.",
            skillCategory: "Frontend",
            skillLevel: "Beginner",
            courses: [
            {
                courseName: "CSS Grid Layout Crash Course",
                courseDuration: "5 hours"
            }
            ],
            companyNeeded:["AMazon" , "Flipkart" , "Meta"]
        },
        "5": {
            skillName: "Docker",
            skillDescription: "Platform for developing, shipping, and running applications inside containers.",
            skillCategory: "DevOps",
            skillLevel: "Intermediate",
            courses: [
            {
                courseName: "Docker Mastery: with Kubernetes +Swarm",
                courseDuration: "12 hours"
            }
            ],
            companyNeeded:["Amazon" , "Flipkart" , "Meta"]
        }
    };

    const skillArray = Object.values(skills);

  return (
    <div className='container'>
      {
        skillArray.map((skill,index) => (
            <div key={index}>
                <h1>{skill.skillName}</h1>
                <h1>{skill.skillDescription}</h1>
                <h1>{skill.skillCategory}</h1>
                <h1>{skill.skillLevel}</h1>
                <h3>{skill.courses.map((course,index1) => (
                    <h3>{course.courseName} {course.courseDuration}</h3>
                ))}</h3>
                <h3>
                {skill.companyNeeded.map((company,index2) => (
                    <h3>{company}</h3>
                ))}
                </h3>
            </div>
        ))
      }
    </div>
  )
}

export default Skills
