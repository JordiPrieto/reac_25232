import Item from "../Item/Item";
import { Link } from "react-router-dom";
import "./itemList.css"; // Importamos los estilos para este componente

export const ItemList = ({ list }) => {
  return (
    <>
      {/*
        El operador ternario verifica si la lista tiene elementos.
        Si 'list.length' es verdadero (mayor que 0), mapea los productos.
        De lo contrario, muestra el mensaje "No hay productos".
      */}
      {list.length > 0 ? (
        <div className="productos-container">
          {list.map((prod) => (
            // Cada producto es un enlace a su página de detalle.
            // La key es fundamental para la optimización de React al renderizar listas.
            <Link to={`/detail/${prod.id}`} key={prod.id} className="producto-link">
              {/*
                El componente Item recibe todas las propiedades del producto
                usando el operador spread {...prod}.
              */}
              <Item {...prod} />
            </Link>
          ))}
        </div>
      ) : (
        // Mensaje cuando no hay productos en la lista
        <p className="no-productos-mensaje">No hay productos disponibles.</p>
      )}
    </>
  );
};
