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

    const [name, setName] = useState("");
    const [price, setPrice]= useState("");
    const [category, setCategory]= useState("");
    const [description, setDescription]= useState("");
    const [pictureUrl, setPictureUrl]= useState("");

    const store = useAppContext();

    function handleChange(e){
        const name = e.target.name
        const value = e.target.value
        console.log(name, value);
        switch(name) {
            case 'name':
                setName(value)
                break;
            case 'price':
                setPrice(value)
                break;
            case 'category':
                setCategory(value)
                break;
            case 'description':
                setDescription(value)
                break;
            case 'pictureUrl':
                setPictureUrl(value)
                break;
            default:


        }


    }

    function handleOnChangeFile(e) {


    }


    function handleSubmit(e) {
        e.preventDefault();
        const newDish = {
            name, 
            price,
            category,
            description,
            pictureUrl
        }
           // TODO: mandar a registrar el libro
        store.createItem(newDish);
        alert("Dish created");
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
                        name="pictureUrl"
                        value={pictureUrl}
                        onChange={handleChange}
                        label="Picture"
                        placeholder="direccion URL Image..."
                        required
                    /> 
                  <div>{!!pictureUrl ? <img src={pictureUrl} width="200" /> : ""}</div>

                  <Input 
                  type="submit" 
                  value="Create Dish"
                  onChange={handleOnChangeFile}
                  
                  />

                </div>

            </form>
        </div>
    )
    }
