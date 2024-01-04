import { Link } from "react-router-dom";

const NavBar = () => {

    return (
 <>
    <header>  
    <br/>  
    <h1 className='text-start fs-1 purple'>Elizabeth Kruger</h1>
    <div>
        <div className='row'>
           <div className="w-25 p-2">
            <button type="button" className="list-group-item d-inline-flex p-2 fs-5"><Link className="link-opacity-50-hover link-offset-2 link-underline link-underline-opacity-0" to='/'>Home</Link ></button>
            <button type="button" className="list-group-item d-inline-flex p-2 fs-5"><Link className="link-opacity-50-hover link-offset-2 link-underline link-underline-opacity-0" to='/Projects'>Projects</Link></button>
           </div>
        </div>
    </div>
    </header>
     </>
    )
} 

export default NavBar;
