import React from 'react';
import { FaLinkedin, FaTimes, FaCommentDots } from 'react-icons/fa'; // Importing the required icons from React Icons

const SpeakerDetailsModal = ({ speaker, onClose }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: '1000',
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          width: '300px',
          position: 'relative',
          textAlign: 'center',
        }}
        onClick={(e) => e.stopPropagation()} // Prevent modal close on inner click
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            border: 'none',
            background: 'none',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          <FaTimes />
        </button>
        <img
          src={speaker.image}
          alt={speaker.name}
          style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '10px' }}
        />
        <h3>{speaker.name}</h3>
        <p>{speaker.position}</p>
        <p style={{ color: '#888' }}>{speaker.company}</p>
        <p style={{ fontSize: '14px', color: '#555' }}>{speaker.bio}</p>

        {/* Add the icons (LinkedIn, Message bubble) */}
        <div style={{ marginTop: '20px' }}>
          <a href={`https://www.linkedin.com/in/${speaker.name.replace(' ', '').toLowerCase()}`} target="_blank" rel="noopener noreferrer">
            <FaLinkedin style={{ marginRight: '10px', cursor: 'pointer', fontSize: '20px' }} />
          </a>
          <FaCommentDots style={{ marginRight: '10px', cursor: 'pointer', fontSize: '20px' }} />
        </div>
      </div>
    </div>
  );
};

export default SpeakerDetailsModal;
