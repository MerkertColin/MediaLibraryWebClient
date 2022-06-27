import React, { FunctionComponent } from "react";
import '../styles/Navbar.css';

interface NavbarProps {
    
}
 
const Navbar: FunctionComponent<NavbarProps> = () => { 
    return ( 
        <nav>
            <ul>
                <li><a href='#'>Books</a></li>
                <li><a href='#'>Games</a></li>
                <li><a href='#'>Movies</a></li>
            </ul>
        </nav>
     );
}
 
export default Navbar;