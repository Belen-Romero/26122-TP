import "./App.css";
import { Count } from "./components/Count/Count";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <Header />
      <main>
        <h1>Tienda de mascotas</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium,
          quisquam. Doloribus voluptate vel iure, et illo fugiat error nisi,
          accusantium, repudiandae voluptatibus doloremque ullam saepe quo
          aliquid. Qui, quas. Quibusdam?
        </p>

        <ItemListContainer />
      </main>
      <Footer />
    </>
  );
}

export default App;
