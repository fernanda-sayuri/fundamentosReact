import { useState } from "react";

export default function Estado(){
    const [numero, setNumero] = useState(0); //React Hooks

    function incrementar(){
        setNumero(numero+1);
    }

    return (
        <div>
            <h1>Componente com estado</h1>
            <span>{numero}</span>
            <button onClick={incrementar}>Incrementar</button>
        </div>
    )
}