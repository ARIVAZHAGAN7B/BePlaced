import React from "react";
import Assets from "../../assets/Assets";
import "./Companies.css";

const Companies = () => {
  const companies = {
    "1": {
      companyName: "Google",
      companyLogo: "https://logo.clearbit.com/google.com",
      skillset: ["React", "Express", "MongoDb", "NodeJs"],
    },
    "2": {
      companyName: "Microsoft",
      companyLogo: "https://logo.clearbit.com/microsoft.com",
      skillset: ["React", "Express", "MongoDb", "NodeJs"],
    },
    "3": {
      companyName: "Apple",
      companyLogo: "https://logo.clearbit.com/apple.com",
      skillset: ["React", "Express", "MongoDb", "NodeJs"],
    },
    "4": {
      companyName: "Amazon",
      companyLogo: "https://logo.clearbit.com/amazon.com",
      skillset: ["React", "Express", "MongoDb", "NodeJs"],
    },
    "5": {
      companyName: "Facebook",
      companyLogo: "https://logo.clearbit.com/facebook.com",
      skillset: ["React", "Express", "MongoDb", "NodeJs"],
    },
    "6": {
      companyName: "Tesla",
      companyLogo: "https://logo.clearbit.com/tesla.com",
      skillset: ["React", "Express", "MongoDb", "NodeJs"],
    },
    "7": {
      companyName: "Netflix",
      companyLogo: "https://logo.clearbit.com/netflix.com",
      skillset: ["React", "Express", "MongoDb", "NodeJs"],
    },
    "8": {
      companyName: "Twitter",
      companyLogo: "https://logo.clearbit.com/twitter.com",
      skillset: ["React", "Express", "MongoDb", "NodeJs"],
    },
    "9": {
      companyName: "LinkedIn",
      companyLogo: "https://logo.clearbit.com/linkedin.com",
      skillset: ["React", "Express", "MongoDb", "NodeJs"],
    },
    "10": {
      companyName: "Adobe",
      companyLogo: "https://logo.clearbit.com/adobe.com",
      skillset: ["React", "Express", "MongoDb", "NodeJs"],
    },
  };

  const companiesArray = Object.values(companies);

  return (
    <section className="companies-section">
      <header className="companies-header">
        <h1>🚀 Top Companies You Can Aim For</h1>
      </header>

      <div className="companies-grid">
        {companiesArray.map((company, idx) => (
          <article className="company-card" key={idx}>
            <img
              className="company-logo"
              src={company.companyLogo}
              alt={`${company.companyName} Logo`}
              loading="lazy"
            />
            <h2 className="company-name">{company.companyName}</h2>
            <div className="skills-wrapper">
              {company.skillset.map((skill, i) => (
                <span className="skill-pill" key={i}>
                  <img
                    src={Assets[skill]}
                    alt={skill}
                    className="skill-icon"
                    loading="lazy"
                  />
                  {skill}
                </span>
              ))}
            </div>
            <button className="view-btn" aria-label={`View details for ${company.companyName}`}>
              View
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Companies;
