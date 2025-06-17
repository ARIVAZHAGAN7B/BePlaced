import React from 'react';
import Assets from '../../assets/Assets';
import "./Companies.css"
const Companies = () => {
  const companies = {
    "1": { companyName: "Google", companyLogo: "https://logo.clearbit.com/google.com", skillset: ["React", "Express", "MongoDb", "NodeJs"] },
    "2": { companyName: "Microsoft", companyLogo: "https://logo.clearbit.com/microsoft.com", skillset: ["React", "Express", "MongoDb", "NodeJs"] },
    "3": { companyName: "Apple", companyLogo: "https://logo.clearbit.com/apple.com", skillset: ["React", "Express", "MongoDb", "NodeJs"] },
    "4": { companyName: "Amazon", companyLogo: "https://logo.clearbit.com/amazon.com", skillset: ["React", "Express", "MongoDb", "NodeJs"] },
    "5": { companyName: "Facebook", companyLogo: "https://logo.clearbit.com/facebook.com", skillset: ["React", "Express", "MongoDb", "NodeJs"] },
    "6": { companyName: "Tesla", companyLogo: "https://logo.clearbit.com/tesla.com", skillset: ["React", "Express", "MongoDb", "NodeJs"] },
    "7": { companyName: "Netflix", companyLogo: "https://logo.clearbit.com/netflix.com", skillset: ["React", "Express", "MongoDb", "NodeJs"] },
    "8": { companyName: "Twitter", companyLogo: "https://logo.clearbit.com/twitter.com", skillset: ["React", "Express", "MongoDb", "NodeJs"] },
    "9": { companyName: "LinkedIn", companyLogo: "https://logo.clearbit.com/linkedin.com", skillset: ["React", "Express", "MongoDb", "NodeJs"] },
    "10": { companyName: "Adobe", companyLogo: "https://logo.clearbit.com/adobe.com", skillset: ["React", "Express", "MongoDb", "NodeJs"] }
  };

  const companiesArray = Object.values(companies);

  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9' }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '32px', color: '#333' }}>🚀 Top Companies You Can Aim For</h1>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '24px',
        justifyContent: 'center',
      }}>
        {companiesArray.map((company, index) => (
          <div key={index} style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            padding: '20px',
            transition: 'transform 0.3s ease',
            textAlign: 'center',
            cursor: 'pointer',
          }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <h2 style={{ fontSize: '20px', marginBottom: '10px', color: '#333' }}>{company.companyName}</h2>
            <img
              src={company.companyLogo}
              alt={`${company.companyName} Logo`}
              style={{ height: '60px', objectFit: 'contain', marginBottom: '16px' }}
            />
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              justifyContent: 'center',
              marginTop: '10px',
            }}>
              {company.skillset.map((skill, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: '#eef2f5',
                    borderRadius: '20px',
                    padding: '5px 10px',
                    fontSize: '14px',
                    color: '#333',
                  }}
                >
                  <img src={Assets[skill]} alt={skill} style={{ height: '18px', marginRight: '6px' }} />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
