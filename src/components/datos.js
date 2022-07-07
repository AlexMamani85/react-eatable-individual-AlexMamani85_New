
import { useEffect, useState } from "react";
import Card from './card'
import apiFetch from '../services/api-fetch'
import {tokenKey, BASE_URI} from '../config.js';

export default function Datos() {
    const [datos, setDatos] = useState([]);

    useEffect(()=>{
        apiFetch("products").then(setDatos);       
    },[])

    return (
        <div>
            {datos && datos.map((x)=>{
                return(<Card data={x}></Card>)
})}
        </div>


    )
}

