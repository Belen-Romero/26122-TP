import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  //CON LA API FAKESTORE
  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data))
  //     .catch((err) => console.log(err))
  //     .finally(() => setLoading(false));
  // }, []);

  //CON LA API DUMMYJSON (OJO con respuesta en objeto. Atributo de imagen en array)
  // useEffect(() => {
  //   fetch("https://dummyjson.com/products")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data.products)) //dummyjson devuelve un objeto con clave products que tiene el array
  //     .catch((err) => console.log(err))
  //     .finally(() => setLoading(false));
  // }, []);

  //Con el JSON LOCAL
  useEffect(() => {
    setLoading(true);

    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log("Hubo un error:", err))
      .finally(() => setLoading(false));
  }, []);

  console.log(products);

  //SOLO es para ejemplo practico porque aun nos faltan temas por ver: NO ES LA MANERA CORRECTA
  // const arrayProducts = [
  //   { id: 0, name: "Producto 1", description: "Descripcion 1", price: 123 },
  //   { id: 1, name: "Producto 2", description: "Descripcion 2", price: 456 },
  //   { id: 2, name: "Producto 3", description: "Descripcion 3", price: 789 },
  // ];

  //SIMULACION PROVISORIA de traer productos
  // const getProducts = () => {
  //   setProducts(arrayProducts);
  // };

  // const clearProducts = () => {
  //   setProducts([]);
  // };

  if (loading) return <p>Cargando...</p>;

  return (
    <section>
      {/* <h1>Componente ItemListContainer</h1>
      <p>Este componente a futuro tendra logica y conexion a API</p>

      <button onClick={getProducts}>Traer productos</button>
      <button onClick={clearProducts}>Vaciar productos</button> */}

      <ItemList products={products} />
    </section>
  );
};
