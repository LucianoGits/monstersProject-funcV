import React from 'react';
import Card from './CardComponent';
import './css/cardListStyles.css';

export default function CardList({ monsters }) {
  return (
    <div className="card-list">
      {monsters.map((monstersName) => {
        return <Card monstersName={monstersName} key={monstersName.id} />;
      })}
    </div>
  );
}
