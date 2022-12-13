import { useEffect, useState } from 'react';
import { IntlProvider, FormattedNumber } from 'react-intl';
import { useItemCupom } from "../../hooks/useItemCupom"

import './style.css';

export function TotalCupom() {

    const { itens } = useItemCupom();
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let totalAux = 0;

        for (let item of itens) {
            totalAux += (item.qtdade * item.valor) 
        }

        setTotal(totalAux)
    }, [])

    return (
        <div className="total-cupom">
            <h2>TOTAL:</h2>
            <h2>
                <IntlProvider locale="pt-BR">
                    <FormattedNumber value={total}
                        style="currency"
                        currency="BRL" />
                </IntlProvider>
            </h2>
        </div>
    )
}