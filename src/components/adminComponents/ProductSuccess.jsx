import { useEffect } from "react";
import { replace, useNavigate, useParams } from "react-router-dom";

export const ProductSuccess = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <section className="success-page">
      <div className="success-icon">✅</div>

      <h2>Producto cargado con exito</h2>
      <p>ID de producto: {id}</p>
      <p>Puede cargar otro haciendo click en el boton.</p>

      <button
        className="btn bg-primary primary"
        onClick={() => navigate("/admin", { replace: true })}
      >
        Agregar otro producto
      </button>
    </section>
  );
};
