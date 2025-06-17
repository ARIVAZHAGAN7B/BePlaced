import React from 'react';

const Mail = () => {
  const mails = [
    {
      id: 1,
      sender: "HR - Techverse Inc",
      subject: "Interview Schedule for React Developer",
      time: "10:30 AM",
      read: false
    },
    {
      id: 2,
      sender: "Neurolytics AI",
      subject: "Offer Letter for ML Engineer Role",
      time: "Yesterday",
      read: true
    },
    {
      id: 3,
      sender: "StackFusion",
      subject: "Feedback on Fullstack Interview",
      time: "2 days ago",
      read: false
    }
  ];

  return (
    <div style={{
      maxWidth: '600px',
      margin: 'auto',
      backgroundColor: '#fff',
      borderRadius: '10px',
      padding: '20px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ marginBottom: '20px' }}>Inbox</h2>
      <div>
        {mails.map((mail) => (
          <div
            key={mail.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '12px 16px',
              marginBottom: '10px',
              backgroundColor: mail.read ? '#f9f9f9' : '#e6f0ff',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'background 0.3s'
            }}
          >
            <div>
              <strong style={{ display: 'block' }}>{mail.sender}</strong>
              <span style={{ color: '#555' }}>{mail.subject}</span>
            </div>
            <div style={{ textAlign: 'right', color: '#999', fontSize: '14px' }}>
              {mail.time}
              {!mail.read && (
                <div style={{
                  width: '8px',
                  height: '8px',
                  backgroundColor: '#007bff',
                  borderRadius: '50%',
                  display: 'inline-block',
                  marginLeft: '8px'
                }} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mail;
