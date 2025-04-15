
import {motion} from "framer-motion";


import childcardStyle from "../../ModuleCss/CardStyles/EachCardStyle.module.css";
import { NavLink } from "react-router-dom";

export function Cards({MovieTitle , MovieImage , MovieReleaseDate , MovieID})
{
    
    return(
        <>
            <motion.div className={` ${childcardStyle["Card-inner-Container"]} card shadow-lg`}  initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }}  >
                <img src={MovieImage} alt={MovieTitle} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{MovieTitle}</h5>
                    <p className="card-text text-muted">Release Date: {MovieReleaseDate}</p>
                    <NavLink to={`/movies/${MovieID}`} className="btn btn-primary w-100" >Watch Now</NavLink>
                </div>
            </motion.div>
        </>
    );
}