import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {useAppContext} from '../store/store';
import {actualIdEatable, dataReactEatable} from '../config';
import Input from "../components/input";
import {Link} from "react-router-dom";


export default function EditPage() {    

    const dishId = useParams();
    const store = useAppContext();
    const [dish, setDish] = useState({
        id: "", name: "", price: "", category: "", description: "", picture_url: "",
      });


    const { category, description, id, name, picture_url, price } = dish;


    useEffect(()=>{
        localStorage.setItem(actualIdEatable, JSON.stringify(dishId.dishId));
        const platillo = store.getDish(dishId.dishId||actualIdEatable);
        setDish(platillo)  //NO ES UNA PROMESA
    },[])

    function handleChange(event) {
        //price||dish.price
        const { name, value } = event.target;
        setDish({ ...dish, [name]: value||dish.name.value });
      }
      
      function handleSubmit(e) {
        e.preventDefault();
        console.dir(JSON.stringify(dish));
        store.updateDish(JSON.stringify(dish))
        console.log(store.dishes);
      }

return (
    <div>
        <Link to="/">Home</Link>
        <h1>Edit Page</h1>
        <form onSubmit={handleSubmit}>
            <div>
            <Input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    label="Name"
                    placeholder="John Doe"
                    required
                />
                <Input
                    type="text"
                    name="price"
                    value={price}
                    onChange={handleChange}
                    label="Price"
                    placeholder="S/."
                    required
                />
                <Input
                    type="text"
                    name="category"
                    value={category}
                    onChange={handleChange}
                    label="Category"
                    placeholder="John Doe"
                    required
                />
                <Input
                    type="text"
                    name="description"
                    value={description}
                    onChange={handleChange}
                    label="Description"
                    placeholder="Plato caliente o frio..."
                    required
                />
                <Input
                    type="text"
                    name="pictureUrl"
                    value={picture_url}
                    onChange={handleChange}
                    label="Picture"
                    placeholder="direccion URL Image..."
                    required
                /> 
            <div>{!!picture_url ? <img src={picture_url} width="200" /> : ""}</div>
            <Input 
            type="submit" 
            value="Edit Dish"
            onChange={handleSubmit}
            
            />
            </div>
        </form>
    </div>)
}