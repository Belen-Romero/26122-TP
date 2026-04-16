import { Item } from "../Item/Item";

export const ItemList = ({ products }) => {
  if (!products.length) {
    return <p>No hay productos</p>;
  }

  return (
    <div>
      {products.map((product) => (
        <Item
          key={product.id}
          name={product.name}
          price={product.price}
          description={product.description}
        />
      ))}
    </div>
  );
};
