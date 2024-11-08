// SpeakerSlider.js
import React, { useState } from 'react';
import Slider from 'react-slick';
import SpeakerCard from './SpeakerCard';
import SpeakerDetailsModal from './SpeakerModal';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const SpeakerSlider = ({ speakers }) => {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  const handleCardClick = (speaker) => {
    setSelectedSpeaker(speaker);
  };

  const handleCloseModal = () => {
    setSelectedSpeaker(null);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 speaker cards in a row
    slidesToScroll: 0,
    arrows: true, // Show navigation arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>View our Featured Speakers for the Event</h2>
      <p style={{ fontSize: '14px', color: '#555' }}>
        Speakers are core contributors and industry thought leaders working at companies that push for innovation.
      </p>
      <div style={{ margin: '20px 0', width: '90%', marginLeft: 'auto', marginRight: 'auto' }}>
        <Slider {...sliderSettings}>
          {speakers.map((speaker) => (
            <div key={speaker.id} style={{ padding: '0 10px' }}> {/* Wrapper div to manage padding */}
              <SpeakerCard speaker={speaker} onClick={handleCardClick} />
            </div>
          ))}
        </Slider>
      </div>
      {selectedSpeaker && (
        <SpeakerDetailsModal speaker={selectedSpeaker} onClose={handleCloseModal} />
      )}
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <p style={{ fontSize: '14px', color: '#555', marginBottom: '10px' }}>
          Click here to see the full program
        </p>
        <button 
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          See the Program
        </button>
      </div>
    </div>
  );
};

export default SpeakerSlider;
