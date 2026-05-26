import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { getByCategory, getProducts } from "../../services/productsService";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  //tomamos "category" del useParams para poder filtrar
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  //Con el JSON LOCAL
  useEffect(() => {
    setLoading(true);

    //Usanmos la funcion con 2 uso: trae todo o filtra si category existe
    getByCategory(category)
      .then((data) => setProducts(data))
      .catch((err) => console.log("Hubo un error:", err))
      .finally(() => setLoading(false));
  }, [category]);
  //👉No olvidar agregar "category" como variable de dependencias para que renderice nuevamente el container si cambia category

  if (loading) return <p>Cargando...</p>;

  return (
    <section>
      <ItemList products={products} />
    </section>
  );
};
