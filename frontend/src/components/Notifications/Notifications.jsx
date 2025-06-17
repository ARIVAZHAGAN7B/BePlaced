import React from 'react';

const notifications = [
  {
    id: 1,
    title: 'New Job Posted: React Developer',
    message: 'Techverse Inc posted a new job for React Developers.',
    type: 'info',
    time: '2 mins ago',
  },
  {
    id: 2,
    title: 'Interview Reminder',
    message: 'You have an interview with StackFusion tomorrow at 11 AM.',
    type: 'reminder',
    time: '1 hour ago',
  },
  {
    id: 3,
    title: 'Application Update',
    message: 'Your application for DevOps Engineer has been shortlisted.',
    type: 'success',
    time: 'Yesterday',
  },
];

const getBackground = (type) => {
  switch (type) {
    case 'info':
      return '#e6f7ff';
    case 'success':
      return '#e6ffed';
    case 'reminder':
      return '#fffbe6';
    case 'error':
      return '#fff1f0';
    default:
      return '#f0f0f0';
  }
};

const Notifications = () => {
  return (
    <div style={{
      maxWidth: '600px',
      margin: 'auto',
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ marginBottom: '16px' }}>Notifications</h2>
      {
        notifications.map((note) => (
          <div key={note.id} style={{
            marginBottom: '12px',
            padding: '15px',
            backgroundColor: getBackground(note.type),
            borderRadius: '8px',
            transition: 'all 0.3s ease-in-out',
          }}>
            <strong>{note.title}</strong>
            <p style={{ margin: '5px 0', color: '#333' }}>{note.message}</p>
            <small style={{ color: '#888' }}>{note.time}</small>
          </div>
        ))
      }
    </div>
  );
};

export default Notifications;
