import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = ({ titulo }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Nuevo estado para la carga
  const [error, setError] = useState(null);       // Nuevo estado para errores

  useEffect(() => {
    setIsLoading(true); // Inicia la carga
    setError(null);     // Resetea errores previos

    fetch("/data/products.json")
      .then((res) => {
        if (!res.ok) {
          // Si la respuesta no es OK (ej. 404, 500), lanzamos un error
          throw new Error(`Error HTTP: ${res.status} ${res.statusText}`);
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.error("Error al cargar productos:", err); // Usa console.error para errores
        setError("No se pudieron cargar los productos. Intenta de nuevo más tarde."); // Mensaje amigable para el usuario
      })
      .finally(() => {
        setIsLoading(false); // Finaliza la carga, independientemente del éxito o fracaso
      });
  }, []);

  return (
    <section className="item-list-container-section"> {/* Añade una clase para estilos */}
      <h1 className="container-title">{titulo}</h1> {/* Añade una clase para estilos */}

      {isLoading && <p className="loading-message">Cargando productos...</p>}
      {error && <p className="error-message">{error}</p>}

      {!isLoading && !error && <ItemList list={products} />}
    </section>
  );
};