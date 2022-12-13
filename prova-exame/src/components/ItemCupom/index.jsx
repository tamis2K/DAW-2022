import './style.css';
import { createContext } from "react";


const items = [
    {

        descricao:'Refri Coca-Cola lata 350ml',
        qtdade:'1',
        vltunit:'2,90',
        total:'',
    },
    {

        descricao:'Ruffles Churrasco 92g',
        qtdade:'2',
        vltunit:'8,90',
        total:'',
    },
    {

        descricao:'Balas Halls Extra Forte',
        qtdade:'3',
        vltunit:'1,90',
        total:'',
    },
    {

        descricao:'Água Crystal 500ml',
        qtdade:'1',
        vltunit:'2,90',
        total:'',
    },
    {

        descricao:'Doritos Queijo Nacho Grande',
        qtdade:'2',
        vltunit:'0,90',
        total:'',
    }
];


export function ItemCumpom() {

    return (
        <div className="item-cupom">
            <div className="linha-titulo">
            <span className="col-descricao">DESCRICAO</span>
            <span className='col-qtdade'>QTDADE</span>
            <span className='col-vltunit'>VLTUNIT</span>
            <span className='col-total'>TOTAL</span>
            </div>
                { items.map((items,index) => (
                    <div key={index} className="linha-item">
                        <sanp>{items.descricao}</sanp>
                        <span>{items.qtdade}</span>
                        <span>{items.vltunit}</span>
                        <span>{items.total}</span>
                 </div>
                ))
                }
        </div>
    )
}