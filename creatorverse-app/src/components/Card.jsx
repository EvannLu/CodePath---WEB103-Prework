import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'; // We'll update this next

const Card = ({ id, name, url, description, imageURL }) => {
  // Use a fallback image if imageURL is not provided
  const cardStyle = {
    backgroundImage: `url(${imageURL || 'https://i.imgur.com/xO432LC.png'})`,
  };

  return (
    <article className="Card" style={cardStyle}>
      <div className="card-info">
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="card-actions">
          <Link to={`/view/${id}`} role="button" className="outline">
            ℹ️ View
          </Link>
          <Link to={`/edit/${id}`} role="button">
            ✍️ Edit
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Card;