import { FC, useState } from "react";
import Toys from "../models/Toys";
import EditToysForm from "./EditToysForm";

interface SingleToysProps{
    toy: Toys;
    updateToys: (newToys: Toys) => void;
    deleteToys: (id: number) => void;
}

const SingleToys: FC<SingleToysProps> = ({toy, updateToys, deleteToys}) => {
    const [edit, setEdit] = useState<boolean>(false);

    const handleToggleEdit = () => {
        setEdit(!edit);
    }

    const handleDelete = () => {
        deleteToys(toy.id);
    }

    return (
        <div className="toys-block">
            <div className="toy">
                <img src={`/images/${toy.img}`} alt={toy.title} />
                <h2>{toy.title}</h2>
                <p>{toy.price}</p>
            </div>
            <div className="toys-control">
                <img src={`/images/edit.jpg`} alt="" onClick={handleToggleEdit} />
                <img src={`/images/delete.jpg`} alt="" onClick={handleDelete} />
            </div>
            {
                edit ? <EditToysForm data={toy} updateToys={updateToys} handleToggleEdit={handleToggleEdit} /> : null
            }
        </div>
    )
}

export default SingleToys;