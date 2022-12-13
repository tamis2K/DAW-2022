import { useContext } from "react";
import { ItemCupomContext } from "../context/ItemCupomContext";

export function useItemCupom() {
    const context = useContext(ItemCupomContext);
    return context;
}