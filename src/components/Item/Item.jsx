import "./Item.css";

// FakeStore y dummyjson utilizan clave "title" para el nombre de producto
// Dummyjson tiene las imagenes en array bajo clave "images"⚠️

export const Item = ({ name, description, price, image, children }) => {
  return (
    <article className="card">
      {/* <img src={images[0]} /> */}
      <img src={image} alt={`foto de ${name}`} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>${price}</p>
      {children}
    </article>
  );
};
