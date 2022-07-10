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
            localStorage.setItem(dataReactEatable, JSON.stringify(x)); //discoDuro
            setDishes(x);   //memoriaRam

        });
   
    },[])

    function createDish(newDish) {
        const temp = [...JSON.parse(localStorage.getItem(dataReactEatable))];
        apiFetch( "products" , { body: newDish }).then(x=>temp.push(x))//x=>newDish=x
        setDishes(temp);
        localStorage.setItem(dataReactEatable, JSON.stringify(temp));
        console.log(localStorage.getItem(dataReactEatable));
        console.log(dishes);
    }

    function getDish(id) {
        const actualDishes = dishes || localStorage.getItem(dataReactEatable);
        const item = actualDishes.find((item)=>Number(item.id)===Number(id))
        console.log(item);
        return item;
    }

    function updateDish(item) {
        try{
        item=JSON.parse(item);
        const index = dishes.findIndex((x)=>Number(x.id)===Number(item.id));

        const temp = [...dishes];
        temp[index] = {...item}
        setDishes(temp);
        localStorage.setItem(dataReactEatable, JSON.stringify(temp));
        }
        catch (error){alert(error);

        }
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