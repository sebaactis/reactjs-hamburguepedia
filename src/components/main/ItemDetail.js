import { useState, useContext  } from "react";
import { Link } from "react-router-dom";
import {CartContext} from "../../context/CartContext"
import Contador from "../Contador"

const ItemDetail = ({ item }) => {

    const [cant, setCant] = useState(0);

    const {addToCart} = useContext(CartContext);

    const onAdd = (cantidad) => {
        setCant(cantidad);
        addToCart(item , cantidad);
    };

    return (
        <div className="itemDetailContainer container-fluid" >
            <img src={item.img} style={{ width: '30rem', marginTop: '2rem' }} alt="..." />
            <article>
                <h3 className="tituloDetalleItem">{item.name}</h3>
                <h4 className="precioDetalleItem">${item.price}</h4>
                <p className="descDetalleItem">{item.description}</p>

                {
                    cant === 0
                        ? <Contador stock={item.stock} onAdd={onAdd} />
                        :
                        <>
                            <Contador stock={item.stock} onAdd={onAdd} />
                            <Link to="/cart" style={{marginLeft: "0.2rem"}}className="btn btn-light"> Finalizar Compra</Link>
                        </>
                }

            </article>

        </div>


    )
}

export default ItemDetail