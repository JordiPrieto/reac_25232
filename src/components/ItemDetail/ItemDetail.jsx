import { Item } from "../Item/Item";

const ItemDetail = ({ detail }) => {
  return (
    <Item {...detail}>
      <button>Enviar al carrito</button>
    </Item>
  );
};
export default ItemDetail;