import {Link} from "react-router-dom";

export const Header=()=>{
    return  <div>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/profile'>Profile</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
        </ul>
    </div>
}