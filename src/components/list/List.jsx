import "./List.css";

import Card from "../card/Card.jsx";

function List({ items, total }) {
  return (
    <main className="list">
      {items.map((item) => (
        <Card {...item} key={item.title} />
      ))}
      <div className="list__total">
        <span className="list__total-label">Total</span>: {total}
      </div>
    </main>
  );
}

export default List;
