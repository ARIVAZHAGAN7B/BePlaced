import React from 'react';
import Assets from '../../assets/Assets';

const Home = () => {
  return (
    <div className="home" style={{ fontFamily: 'Roboto, sans-serif' }}>
      
      {/* Hero Section */}
      <section style={{ padding: '60px 40px', backgroundColor: '#f9f9f9' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px',
            alignItems: 'center',
          }}
        >
          <div>
            <h1 style={{ fontSize: '36px', fontWeight: 'bold', lineHeight: '1.5' }}>
              Beplaced connects you with top companies.
            </h1>
            <p style={{ fontSize: '18px', marginTop: '20px' }}>
              Prepare smarter with role-based insights and personalized skill paths. Start your journey to success today.
            </p>
            <button
              style={{
                marginTop: '30px',
                padding: '12px 24px',
                fontSize: '16px',
                fontWeight: 'bold',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
              }}
            >
              Explore Opportunities
            </button>
          </div>

          <div style={{ textAlign: 'center' }}>
            <img
              src={Assets.Women}
              alt="women-laptop"
              style={{
                width: '100%',
                maxWidth: '500px',
                borderRadius: '16px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              }}
            />
            <h2 style={{ fontSize: '24px', marginTop: '20px' }}>
              Get Placed. Get Ahead. With <span style={{ color: '#007bff' }}>Beplaced</span>.
            </h2>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '60px 40px', backgroundColor: '#ffffff' }}>
        <h2 style={{ textAlign: 'center', fontSize: '28px', marginBottom: '40px' }}>
          Why Choose Beplaced?
        </h2>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            textAlign: 'center',
            gap: '20px',
            flexWrap: 'wrap',
          }}
        >
          {[
            {
              title: 'Curated Roles',
              description: 'Explore roles with insights into skills, salary, and companies.',
              icon: '🧭',
            },
            {
              title: 'Skill Mapping',
              description: 'AI-driven skill paths to get you from beginner to job-ready.',
              icon: '📈',
            },
            {
              title: 'Verified Jobs',
              description: 'Up-to-date, verified job listings from trusted employers.',
              icon: '✅',
            },
            {
              title: 'Interview Prep',
              description: 'Real questions, mock interviews, and past company patterns.',
              icon: '🎯',
            },
          ].map(({ title, description, icon }) => (
            <div key={title} style={{ width: '220px', padding: '20px' }}>
              <div style={{ fontSize: '40px' }}>{icon}</div>
              <h3 style={{ fontSize: '20px', margin: '10px 0' }}>{title}</h3>
              <p style={{ fontSize: '16px', color: '#555' }}>{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Success Stats Section */}
      <section style={{ padding: '60px 40px', backgroundColor: '#f0f4f8' }}>
        <h2 style={{ textAlign: 'center', fontSize: '28px', marginBottom: '40px' }}>
          Our Impact So Far
        </h2>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '60px',
            textAlign: 'center',
            flexWrap: 'wrap',
          }}
        >
          {[
            { label: 'Students Placed', value: '10,000+' },
            { label: 'Hiring Companies', value: '500+' },
            { label: 'Mock Interviews', value: '2,000+' },
            { label: 'Skill Tracks Completed', value: '8,000+' },
          ].map(({ label, value }) => (
            <div key={label}>
              <h3 style={{ fontSize: '36px', color: '#007bff', marginBottom: '10px' }}>{value}</h3>
              <p style={{ fontSize: '16px', color: '#444' }}>{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '60px 40px', backgroundColor: '#e0f7fa', textAlign: 'center' }}>
        <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>
          Ready to launch your career?
        </h2>
        <p style={{ fontSize: '18px' }}>
          Join thousands of others finding jobs, gaining skills, and building careers with Beplaced.
        </p>
        <button
          style={{
            marginTop: '30px',
            padding: '14px 30px',
            fontSize: '18px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          Get Started
        </button>
      </section>
    </div>
  );
};

export default Home;
