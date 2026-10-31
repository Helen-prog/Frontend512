import { FC, useState } from "react";
import Toys from "../models/Toys";
import EditToysForm from "./EditToysForm";

interface SingleToysProps{
    toy: Toys;
    updateToys: (newToys: Toys) => void;
}

const SingleToys: FC<SingleToysProps> = ({toy, updateToys}) => {
    const [edit, setEdit] = useState<boolean>(false);

    const handleToggleEdit = () => {
        setEdit(!edit);
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
                <img src={`/images/delete.jpg`} alt="" />
            </div>
            {
                edit ? <EditToysForm data={toy} updateToys={updateToys} handleToggleEdit={handleToggleEdit} /> : null
            }
        </div>
    )
}

export default SingleToys;