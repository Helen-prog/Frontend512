import { useParams } from "react-router-dom";

function Category(){
    const {name} = useParams();


    return (
        <div className="wrap">
            <h2>Category</h2>
        </div>
    )
}

export default Category;