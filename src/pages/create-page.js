import {useState} from 'react';
import Input from "../components/input";
import { useAppContext } from '../store/store';
import {Link} from "react-router-dom";

export default function CreatePage() {
    // "id": 209,
    // "name": "Causa",
    // "price": 15,
    // "category": "Marino",
    // "description": "Causa rellena de pollo",
    // "picture_url": "https://tinyurl.com/2p9fjvj8"


    const [dish, setDish] = useState({
        name: "", price: "", category: "", description: "", picture_url: "",
      });


      const { category, description, name, picture_url, price } = dish;

    const store = useAppContext();

    function handleChange(event) {
        //price||dish.price
        const { name, value } = event.target;
        setDish({ ...dish, [name]: value });
        console.log(dish);
      }




    function handleSubmit(e) {
        e.preventDefault();
           // TODO: mandar a registrar el libro
        store.createDish(dish);

        console.log(store.dishes);
    }

    return (
        <div>
            <Link to="/">Home</Link>
            <h1>Create Page</h1>
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
                        name="picture_url"
                        value={picture_url}
                        onChange={handleChange}
                        label="Picture"
                        placeholder="direccion URL Image..."
                        required
                    /> 
                  <div>{!!picture_url ? <img src={picture_url} width="200" alt='img'/> : ""}</div>

                  <Input 
                  type="submit" 
                  value="Create Dish"
                  onChange={handleSubmit}
                  
                  />

                </div>

            </form>
        </div>
    )
    }
