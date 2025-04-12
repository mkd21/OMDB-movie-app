import { NavLink } from "react-router-dom";
import headerStyle from "../../../ModuleCss/HeaderStyle/headerStyle.module.css";
export function Header()
{
   return(
        <>
            <nav className="navbar navbar-expand-md bg-success ">

                <div className="container-fluid">
                    
                    <NavLink to="/" className={`${headerStyle["navbar-Brand"]} navbar-brand`} >Movie-Flix</NavLink>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                        <div className={`collapse navbar-collapse justify-content-around`} id="navbarNav">
                                <ul className={`${headerStyle.navbarItems} navbar-nav justify-content-around `}>

                                    <li className="nav-item">
                                        <NavLink to="/" className={ `${headerStyle.navbarLiColors} `} >Home</NavLink> 
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/movies" className={ `${headerStyle.navbarLiColors} `} >Movies</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/about" className={ `${headerStyle.navbarLiColors} `} >About us</NavLink> 
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/contact" className={ `${headerStyle.navbarLiColors} `} >Contact us</NavLink> 
                                    </li>

                                </ul>
                        </div>
                </div>

            </nav>
        </>
   );
}