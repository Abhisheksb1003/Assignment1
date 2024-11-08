
import React from 'react';

const SpeakerDetail = ({ speaker, onClose }) => {
  if (!speaker) return null;

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px',
        margin: '20px 0',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            overflow: 'hidden',
            marginRight: '20px',
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
        <div>
          <h3>{speaker.name}</h3>
          <p>{speaker.position}</p>
          <p style={{ color: '#888' }}>{speaker.company}</p>
        </div>
      </div>
      <div style={{ flex: 1, marginLeft: '20px' }}>
        <p>{speaker.bio}</p>
      </div>
      <button
        onClick={onClose}
        style={{
          padding: '8px 16px',
          backgroundColor: '#ddd',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        X
      </button>
    </div>
  );
};

export default SpeakerDetail;
