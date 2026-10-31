import { FC } from "react";
import SingleToys from "./SingleToys";
import Toys from "../models/Toys";

interface DisplayToysProps {
    toysList: Toys[];
    updateToys: (newToys: Toys) => void;
}

const DisplayToys: FC<DisplayToysProps> = ({toysList, updateToys}) => {
    return (
        <div className="container">
            {
                toysList.map(toy => {
                    return <SingleToys key={toy.id} toy={toy} updateToys={updateToys} />
                })
            }
        </div>
    )
}

export default DisplayToys;