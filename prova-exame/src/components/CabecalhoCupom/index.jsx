import './style.css';

export function CabecalhoCupom() {
    return (
        <div className="cabecalho-cupom">
            <h1>NOME FANTASIA LTDA</h1>
            <h3>Rua Mato Grosso, 200 - CEP: 85.501-051</h3>
            <h3>Pato Branco - PR</h3>

            <div className="cabecalho-detail">
                <div className="row">
                    <span>CNPJ: 12.345.678/0001-89</span>
                    <span>12/12/2022</span>
                </div>
                <div className="row">
                    <span>IE: 12.345.678-89</span>
                    <span>19:10:00</span>
                </div>
            </div>

        </div>
    )
}