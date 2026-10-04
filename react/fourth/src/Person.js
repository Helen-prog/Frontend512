import { useState } from "react";

function Person(){

    let [person, setPerson] = useState({
        firstName: "Igor",
        lastName: 'Smith'
    });


    function rename() {
        setPerson({ ...person, firstName: "Sergey"})
    }

    return (
        <div>
            <hr />
            <p>{person.firstName} {person.lastName}</p>
            <button onClick={rename}>Rename</button>
        </div>
    )
}

export default Person;