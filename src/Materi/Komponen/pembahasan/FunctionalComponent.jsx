import { useState } from "react";

const FunctionalComponent = ({nama}) => {
    const [value, setValue] = useState(0)

    const handlePlus = () => {
        setValue(value + 1);
    }

    const handleMin = () => {
        if(value > 0 ){
          setValue(value - 1);

        }
    }

    return(
        <div>
            <h1>Membuat komponen dengan functional component</h1>
            <h1>selamat lamat</h1>
            <h1>hello {nama}, Selamat amat</h1>
            <button onClick={handleMin}>-</button>
            <span>{' '}{value}{' '}</span>
            <button onClick={handlePlus}>+</button>
        </div>
    )
}

FunctionalComponent.defaultProps =  {
    nama: 'Vincent N'
}

export default FunctionalComponent;

