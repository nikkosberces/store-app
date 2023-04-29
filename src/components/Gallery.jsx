import { useState, useEffect } from "react";
import Items from "./Items";
import "./Gallery.css";

function Gallery() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    async function fetchItems() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();

      setItems(data);
    }
    fetchItems();
  }, []);

  return (
    <main className="gallery">
      {items && items.map((item) => <Items key={item.id} item={item} />)}
    </main>
  );
}

export default Gallery;
