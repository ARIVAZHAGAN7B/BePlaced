import React from 'react';

const userProfile = {
  name: "Arivazhagan B",
  role: "Fullstack Developer",
  location: "Chennai, India",
  email: "arivazhagan@example.com",
  phone: "+91 9876543210",
  experience: "2+ Years",
  skills: ["React", "Node.js", "MongoDB", "Machine Learning"],
  linkedIn: "https://www.linkedin.com/in/arivazhagan",
  github: "https://github.com/arivazhagan",
  about: "I am a passionate fullstack developer building scalable applications and actively exploring AI/ML technologies.",
};

const Profile = () => {
  return (
    <div style={{
      maxWidth: "700px",
      margin: "40px auto",
      padding: "20px",
      borderRadius: "12px",
      backgroundColor: "#fff",
      boxShadow: "0 8px 20px rgba(0,0,0,0.1)"
    }}>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <img
          src={`https://ui-avatars.com/api/?name=${userProfile.name}&background=0D8ABC&color=fff&size=120`}
          alt="Profile"
          style={{ borderRadius: "50%", width: "120px", height: "120px" }}
        />
        <h2>{userProfile.name}</h2>
        <h4 style={{ color: "#888" }}>{userProfile.role}</h4>
      </div>

      <div style={{ marginBottom: "16px" }}>
        <strong>About:</strong>
        <p>{userProfile.about}</p>
      </div>

      <div style={{ marginBottom: "16px" }}>
        <strong>Experience:</strong> {userProfile.experience}
      </div>

      <div style={{ marginBottom: "16px" }}>
        <strong>Location:</strong> {userProfile.location}
      </div>

      <div style={{ marginBottom: "16px" }}>
        <strong>Contact:</strong>
        <p>Email: {userProfile.email}</p>
        <p>Phone: {userProfile.phone}</p>
      </div>

      <div style={{ marginBottom: "16px" }}>
        <strong>Skills:</strong>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "8px" }}>
          {userProfile.skills.map((skill, index) => (
            <span key={index} style={{
              padding: "6px 12px",
              backgroundColor: "#f0f0f0",
              borderRadius: "20px",
              fontSize: "14px"
            }}>
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", gap: "20px", marginTop: "16px" }}>
        <a href={userProfile.linkedIn} target="_blank" rel="noreferrer">🔗 LinkedIn</a>
        <a href={userProfile.github} target="_blank" rel="noreferrer">💻 GitHub</a>
      </div>
    </div>
  );
};

export default Profile;
