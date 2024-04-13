import { useState } from "react";
import './App.css'

function ColorPickers(){
    const [color, setColor] = useState('#ffffff')
    const handleChangeColor= (event) => {
        setColor(event.target.value)
    }

    return(
        <div className="container">
            <h1>Color Pickers</h1>
            <h3>Warna yang ada masukan adalah : {color}</h3>
            <p>Masukan Warna :   <input type="color" value={color} onChange={handleChangeColor}/></p>
            <div className="color-container" style={{backgroundColor: color}}></div>
        </div>
    )
}

export default ColorPickers