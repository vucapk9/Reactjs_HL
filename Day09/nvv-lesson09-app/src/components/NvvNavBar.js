//menu điều hướng site
import React from 'react'
import { NavLink} from 'react-router-dom'

export default function NvvNavBar(){
    return(
        <nav style={{ padding:"1rem", background :' #eee'}}>
           <NavLink to={'/'} style={{ padding: ".5rem 1rem"}}>Home</NavLink>
           <NavLink to='/about'style={{ padding: ".5rem 1rem"}} >About</NavLink>
           <NavLink to='/contact' style={{ padding: ".5rem 1rem"}}>Contact</NavLink>
           <NavLink to='/product'style={{ padding: ".5rem 1rem"}}>Product</NavLink>
          
        </nav>
    )
}