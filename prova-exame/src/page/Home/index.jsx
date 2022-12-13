import { CabecalhoCupom } from "../../components/CabecalhoCupom";
import { ItemCumpom } from "../../components/ItemCupom";
import { RodapeCupom } from "../../components/RodapeCupom";
import { TotalCupom } from "../../components/TotalCupom";
import { ItemCupomContextProvider } from "../../context/ItemCupomContext";

import './style.css';

export function Home() {
    return (
        <div id="home-page">
            <div id="cupom">
                <CabecalhoCupom />

                <ItemCupomContextProvider>
                    <ItemCumpom />
                    <TotalCupom />
                </ItemCupomContextProvider>

                <RodapeCupom />
            </div>
        </div>
    )
}