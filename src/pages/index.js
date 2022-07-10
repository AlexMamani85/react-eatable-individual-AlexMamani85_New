import {Link} from 'react-router-dom'
import { useAppContext } from '../store/store'
import Card from '../components/card'

export default function IndexPage() {

    const store = useAppContext();

    return (
        <>
            <Link to="/create">Create</Link>
            <div>INDEX Page</div>
            {store.dishes.map((item)=>(
                <Card key={item.id} data={item}></Card>

            ))}

        </>
    
    )

    }