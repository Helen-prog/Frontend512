import { FC } from "react";
import SingleToys from "./SingleToys";
import Toys from "../models/Toys";

interface DisplayToysProps {
    toysList: Toys[];
    updateToys: (newToys: Toys) => void;
    deleteToys: (id: number) => void;
}

const DisplayToys: FC<DisplayToysProps> = ({toysList, updateToys, deleteToys}) => {
    return (
        <div className="container">
            {
                toysList.map(toy => {
                    return <SingleToys key={toy.id} toy={toy} updateToys={updateToys} deleteToys={deleteToys} />
                })
            }
        </div>
    )
}

export default DisplayToys;