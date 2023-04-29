import "./Items.css";

function Items({ item }) {
  const { image, title, price } = item;
  return (
    <article className="items">
      <h3 className="title">{title}</h3>
      <div>
        <img className="image" src={image} />
        <p className="price">${price}</p>
      </div>
    </article>
  );
}

export default Items;
