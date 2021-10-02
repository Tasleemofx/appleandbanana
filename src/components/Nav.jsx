import React from "react"
import { Link } from "react-router-dom";
const Nav = ({links}) => {
    return (<ul>
        {links.map(({name, link, id})=>{
           return(
           <li key={id}>
        <Link to={link} >{name}</Link>
                </li>
                )
        })}
    </ul> );
}
 
export default Nav;