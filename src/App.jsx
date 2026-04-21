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
        <h1>Nuestros productos</h1>

        <ItemListContainer />
      </main>
      <Footer />
    </>
  );
}

export default App;
