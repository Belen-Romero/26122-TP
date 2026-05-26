import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { getByCategory, getProducts } from "../../services/productsService";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  //Con el JSON LOCAL
  useEffect(() => {
    setLoading(true);

    getByCategory(category)
      .then((data) => setProducts(data))
      .catch((err) => console.log("Hubo un error:", err))
      .finally(() => setLoading(false));
  }, [category]);

  if (loading) return <p>Cargando...</p>;

  return (
    <section>
      <ItemList products={products} />
    </section>
  );
};
