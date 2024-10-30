// src/pages/Home.js

import React from 'react';
import './Home.css';

const cards = [
  { id: 1, label: 'Comer' },
  { id: 2, label: 'Brincar' },
  { id: 3, label: 'Dormir' },
];

function getRandomImage(id) {
  return `https://picsum.photos/seed/${id}/100/100`;
}

function Home() {
  const handleCardClick = (label) => {
    alert(`Você clicou no card: ${label}`);
  };

  return (
    <div className="home">
      <h1>Comunicação Alternativa</h1>
      <p>Clique nos cards para se comunicar.</p>
      <div className="cards-container">
        {cards.map((card) => (
          <button
            key={card.id}
            className="card"
            onClick={() => handleCardClick(card.label)}
          >
            <img
              src={getRandomImage(card.id)}
              alt={card.label}
              style={{ width: '100px', height: '100px' }}
            />
            <p>{card.label}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Home;
