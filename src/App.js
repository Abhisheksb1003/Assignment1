import React, { useState } from 'react';
import SpeakerCard from './Components/SpeakerCard';
import SpeakerDetail from './Components/SpeakerDe';

const speakers = [
  {
    id: 1,
    name: 'John Doe',
    position: 'Chief Marketing Officer',
    company: 'Acme Corp',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    bio: 'John Doe has over 20 years of experience in marketing and has led numerous campaigns worldwide.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'Chief Engagement Officer',
    company: 'Acquia',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    bio: 'Jane Smith is known for her innovative engagement strategies that drive user retention.',
  },
  {
    id: 3,
    name: 'Michael Brown',
    position: 'Chief Technical Developer',
    company: 'Pantheon',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
    bio: 'Michael Brown specializes in developing technical solutions that streamline business operations.',
  },
  {
    id: 4,
    name: 'Sara White',
    position: 'Chief Marketing Officer',
    company: 'Specbee',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
    bio: 'Sara White has a wealth of experience in digital marketing and brand management.',
  },
];

const App = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  const handleSeeProgramClick = () => {
    setSelectedSpeaker(speakers[0]);
  };

  const handleCloseDetail = () => {
    setSelectedSpeaker(null);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',  
      justifyContent: 'center', 
      height: '100vh', 
      textAlign: 'center', 
      padding: '20px',
    }}>
      <h2>View our Featured Speakers for the Event</h2>
      <p>Speakers are core contributors and industry thought leaders working at companies that push for innovation.</p>

     
      {selectedSpeaker && <SpeakerDetail speaker={selectedSpeaker} onClose={handleCloseDetail} />}

     
      <div style={{
        display: 'flex',
        overflowX: 'auto',
        gap: '20px',
        padding: '20px 0',
        justifyContent: 'center', 
      }}>
        {speakers.map((speaker) => (
          <SpeakerCard key={speaker.id} speaker={speaker} onClick={() => setSelectedSpeaker(speaker)} />
        ))}
      </div>

      
      <button
        onClick={handleSeeProgramClick}
        style={{
          display: 'block',
          margin: '20px auto',
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '16px',
        }}
      >
        See the Program
      </button>
    </div>
  );
};

export default App;
