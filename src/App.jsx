import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartView } from "./components/Cart/CartView";
import { ProductFormContainer } from "./components/adminComponents/ProductFormContainer";
import { ProductSuccess } from "./components/adminComponents/ProductSuccess";
import { PublicLayout } from "./layouts/PublicLayout";
import { AdminLayout } from "./layouts/AdminLayout";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { Dashboard } from "./components/adminComponents/Dashboard/Dashboard";

function App() {
  return (
    <>
      <Routes>
        {/* ----------------------RUTAS PUBLICAS -------------------------*/}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<ItemListContainer />} />
          {/* Ruta opcional para filtrar categorias */}
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<CartView />} />
        </Route>

        {/* IMPORTAR EL COMPONENTE LOGIN */}
        {/* <Route path="/admin/login" element={<Login />} /> */}
        <Route path="/admin/login" element={<h2>LOGIN</h2>} />
        {/* -----------------------------ADMIN--------------------------- */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          {/* Si el admin esta logueado, redirige a la ruta /admin/dashboard */}
          <Route index element={<Navigate to={"dashboard"} />} />
          <Route path="dashboard" element={<Dashboard />} />

          <Route path="products/new" element={<ProductFormContainer />} />
          <Route path="products/success/:id" element={<ProductSuccess />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
