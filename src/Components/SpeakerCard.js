
import React from 'react';

const SpeakerCard = ({ speaker, onClick }) => {
  return (
    <div
      style={{
        textAlign: 'center',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', 
      }}
      onClick={() => onClick(speaker)}
    >
      <div
        style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          overflow: 'hidden',
          marginBottom: '10px',
          boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
        }}
      >
        <img
          src={speaker.image}
          alt={speaker.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>
      <h3>{speaker.name}</h3>
      <p>{speaker.position}</p>
      <p style={{ color: '#888' }}>{speaker.company}</p>
    </div>
  );
};

export default SpeakerCard;
