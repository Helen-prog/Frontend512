import { useState } from "react";
import { IProduct } from "../types/models";
import "./Products.css";

interface ProductProps{
    product: IProduct
}

export function Products({product}: ProductProps){
    const [details, setDetails] = useState(false);

    return (
        <div className="content">
            <img src={product.image} alt="" />
            <p>{product.title}</p>

            <button onClick={() => setDetails(true)}>Показать описание</button>
            <button onClick={() => setDetails(false)}>Скрыть описание</button>

            {details && <div>
                    <p>{product.description}</p>
                </div>}
        </div>
    )
}