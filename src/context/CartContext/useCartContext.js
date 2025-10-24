import { useContext } from "react";
import { CartContext } from "./CartContext"; // Asegúrate de que la ruta sea correcta

export const useCartContext = () => {
    return useContext(CartContext);
};