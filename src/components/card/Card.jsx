import "./Card.css";
import Button from "../button/Button";

function Card({ title, author, date, price, tags }) {
  return (
    <div className="card">
      <div className="card__content">
        <h2 className="card__title">{title}</h2>
        <ul className="card__properties">
          <li className="card__author">{author}</li>
          <li className="card__date">{date}</li>
          <li className="card__price">${price}</li>
        </ul>
      </div>
      <div className="button-container">
        {tags.map((tag) => (
          <Button label={tag} key={tag} />
        ))}
      </div>
    </div>
  );
}

export default Card;
