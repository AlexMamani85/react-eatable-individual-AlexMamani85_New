import { createContext, useContext, useState, useEffect } from "react";
import apiFetch from '../services/api-fetch';
import {dataReactEatable} from '../config';

const AppContext = createContext({
    dishes: [],
    createDish: (dish)=>{},
    getDish: (id)=>{},
    updateDish: (dish)=>{},

})


export default function Store({children}){
    const [dishes, setDishes] = useState([]);

    useEffect(()=>{

        
        apiFetch("products").then(x=>{
            localStorage.setItem(dataReactEatable, JSON.stringify(x)) //discoDuro
            setDishes(x)    //memoriaRam
        });
   
    },[])

    function createDish(newDish) {
        const temp = [...JSON.parse(localStorage.getItem(dataReactEatable))];
        temp.push(newDish);
        setDishes(temp);
        localStorage.setItem(dataReactEatable, JSON.stringify(temp));
    }

    function getDish(id) {
        const actualDishes = dishes || localStorage.getItem(dataReactEatable);
        const item = actualDishes.find((item)=>Number(item.id)===Number(id))
        console.log(item);
        return item;
    }

    function updateDish(item) {
        const actualDishes = dishes || localStorage.getItem(dataReactEatable);
        const index = actualDishes.findIndex((i)=>i.id===item.id);
        const temp = [...actualDishes];
        temp[index] = {...item}
        localStorage.setItem(dataReactEatable, JSON.stringify(temp));
    }

    return (
        <AppContext.Provider
            value={{
                dishes,
                createDish,
                getDish,
                updateDish,
            }}
        >
        {children}
        </AppContext.Provider>
        )

}

export function useAppContext() {
    return useContext(AppContext);
}