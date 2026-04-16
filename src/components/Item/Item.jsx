export const Item = ({ name, description, price }) => {
  return (
    <article>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>${price}</p>
    </article>
  );
};
