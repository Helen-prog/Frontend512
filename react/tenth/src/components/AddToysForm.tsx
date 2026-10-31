import { FC, useState } from "react";
import Toys from "../models/Toys";

const initialState = {
    title: '',
    price: '',
    img: ''
}

interface NewToys {
    title: string;
    price: string;
    img: string;
}

interface AddToysFormProps{
    addToys: (NewToys: Toys) => void;
}

const AddToysForm: FC<AddToysFormProps> = ({addToys}) => {
    const [newToys, setNewToys] = useState<NewToys>(initialState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setNewToys({
            ...newToys,
            [name]: value
        })
    }

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const {title, price, img} = newToys;

        if(title && price && img){
            addToys({
                title,
                img,
                price: Number(price),
                id: Date.now()
            });
            setNewToys(initialState);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <input type="text" name="title" placeholder="Название"
                onChange={handleChange}
                value={newToys.title} />
            </p>
            <p>
                <input type="text" name="price" 
                placeholder="Стоимость"
                onChange={handleChange}
                value={newToys.price} />
            </p>
            <p>
                <input type="text" name="img"
                placeholder="Изображение"
                onChange={handleChange}
                value={newToys.img} />
            </p>
            <p>
                <button>+ Добавить</button>
            </p>
        </form>
    )
}

export default AddToysForm;