
import { useEffect, useState } from "react";

    
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

return(
    <div key={x.id}>
        <img src={x['picture_url']} alt={x.name} height="130px"/> 
        <p>{x.name}</p>
        <p>{x.price}</p>
        <span>edit</span>
        <span>delete</span>
        <br/><br/><br/><br/>
    </div>
    )
})}
        </div>


    )
}

