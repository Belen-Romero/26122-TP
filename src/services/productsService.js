import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  query,
  where,
} from "firebase/firestore";

import { db } from "../firebase/config";

//Todas las funciones van a utilizar esta coleccion.
//La hacemos global y que todas la usen en vez defirla varias veces
// Creamos la referencia a la coleccion: en mi caso se llama "products"
const productsRef = collection(db, "products");

/* -------------------------------------------------------------------------- */
/*                               TRAER PRODUCTOS                              */
/* -------------------------------------------------------------------------- */
export const getProducts = async () => {
  try {
    const snapshot = await getDocs(productsRef);

    const productsFormat = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });

    return productsFormat;
  } catch (err) {
    console.error("Error al traer productos:", error);
    return [];
  }
};

/* -------------------------------------------------------------------------- */
/*                            TRAER PRODUCTO POR ID                           */
/* -------------------------------------------------------------------------- */
// Funcion que SOLO pide un dato
export const getProductById = async (id) => {
  try {
    // Creamos la referencia al documento
    const productRef = doc(db, "products", id);

    // Traemos el documento:
    const snapshot = await getDoc(productRef);

    // Verificamos si existe
    if (snapshot.exists()) {
      const product = { id: snapshot.id, ...snapshot.data() };
      console.log("Doc:", product);
      return product;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error al traer producto por ID:", error);
    return null;
  }
};

/* -------------------------------------------------------------------------- */
/*                          SI FILTRAMOS POR CATEGORY                         */
/* -------------------------------------------------------------------------- */
export const getByCategory = async (category) => {
  try {
    let queryRef;

    if (category) {
      queryRef = query(productsRef, where("category", "==", category));
    } else {
      queryRef = productsRef;
    }

    // Traer los documentos:
    const snapshot = await getDocs(queryRef);
    //Mapeo de datos para formateo
    const productsFormat = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    return productsFormat;
  } catch (error) {
    console.error("Error al filtrar productos:", error);
    return [];
  }
};
