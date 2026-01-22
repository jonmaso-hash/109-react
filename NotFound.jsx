import {Link} from 'react-router-dom'
import { IconUfo } from '@tabler/icons-react';


function NotFound(){
    return(
        <div className="pb-4">
            
            <h1>404- Page not Found</h1> <IconUfo stroke={1} size={100} color={"purple"} />
            <p className="text-secondary fs-5">You're here too early, traveler...the page you're looking for doesn't exist</p>
            <Link className = "btn btn-dark" to= "/"> Go Home</Link>
        </div>
    )
   
}
export default NotFound