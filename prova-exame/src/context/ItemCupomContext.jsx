import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const ItemCupomContext = createContext();

const dados = [
    
]

export function ItemCupomContextProvider(props) {

    const [itens, setItens] = useState(dados);

    useEffect(() => {

        setItens(dados)

    }, []);

    return (
        <ItemCupomContext.Provider value={{itens}}>
            {props.children}
        </ItemCupomContext.Provider>
    )

}