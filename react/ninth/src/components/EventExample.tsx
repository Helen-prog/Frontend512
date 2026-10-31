import { useState } from "react";

function EventExample(){
    const [value, setValue] = useState<string>("");

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const clickHandle = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(value, e);
    }

    return (
        <div>
            <input type="text" value={value} onChange={changeHandler} />
            <button onClick={clickHandle}>Button</button>
        </div>
    )
}

export default EventExample;