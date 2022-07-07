
import { useEffect, useState } from "react";
import Card from './card'
    
export default function Datos() {
    const [datos, setDatos] = useState([]);


    async function ColeccionDatos(){
        const options = {method: 'GET', headers: {Authorization: 'Bearer '}};
    
        fetch('https://react-eatable-api.herokuapp.com/products', options)
          .then(response => response.json())
          .then(response => setDatos(response))
          .catch(err => console.log(err));
    }

    useEffect(()=>{
        ColeccionDatos();
        console.log(datos);
    },[])

    return (
        <div>
            {datos && datos.map((x)=>{
                return(<Card data={x}></Card>)
})}
        </div>


    )
}

