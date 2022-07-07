
import { useEffect, useState } from "react";
import Card from './card'
import apiFetch from '../services/api-fetch'
import {tokenKey, BASE_URI} from '../config.js';

export default function Datos() {
    const [datos, setDatos] = useState([]);

    useEffect(()=>{
        apiFetch("products").then(setDatos);       
    },[])

    function handleDelete(id) {
        const temp=datos.filter(item=>id!==item.id);
        setDatos(temp);
        apiFetch("products/"+id, {method: 'DELETE'}); 

    }

    
    return (
        <div>
            {datos && datos.map((x)=>{
                return(<Card id={x.id} data={x}  onDelete={handleDelete}></Card>)
})}
        </div>


    )
}

