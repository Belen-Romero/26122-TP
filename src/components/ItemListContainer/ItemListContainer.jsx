import { useState } from "react";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  //SOLO es para ejemplo practico porque aun nos faltan temas por ver: NO ES LA MANERA CORRECTA
  const arrayProducts = [
    { id: 0, name: "Producto 1", description: "Descripcion 1", price: 123 },
    { id: 1, name: "Producto 2", description: "Descripcion 2", price: 456 },
    { id: 2, name: "Producto 3", description: "Descripcion 3", price: 789 },
  ];

  //SIMULACION PROVISORIA de traer productos
  const getProducts = () => {
    setProducts(arrayProducts);
  };

  const clearProducts = () => {
    setProducts([]);
  };

  return (
    <section>
      <h1>Componente ItemListContainer</h1>
      <p>Este componente a futuro tendra logica y conexion a API</p>

      <button onClick={getProducts}>Traer productos</button>
      <button onClick={clearProducts}>Vaciar productos</button>

      <ItemList products={products} />
    </section>
  );
};
