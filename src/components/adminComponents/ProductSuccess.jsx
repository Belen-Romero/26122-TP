import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export const ProductSuccess = () => {
  const { id } = useParams();

  return (
    <section className="success-page">
      <div className="success-icon">✅</div>

      <h2>Producto cargado con exito</h2>
      <p>ID de producto: {id}</p>
      <p>Puede cargar otro haciendo click en el boton.</p>

      <Link className="btn bg-primary primary" to="/admin" replace>
        Agregar otro producto
      </Link>
    </section>
  );
};
