import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { movieDetailsFetch } from "../DataFetchFunction/movieDetails";


import MovideDetailsCardStyle from "../../ModuleCss/CardStyles/movieDetailsCardStyle.module.css";


import {FadeLoader} from "react-spinners";

function DollarToINR(receivedAmount)
{
    if( typeof receivedAmount == "string")
    {
        const cleanedAmount = receivedAmount.replace(/[$,]/g, '');
        const numericAmount = parseFloat(cleanedAmount);

        return numericAmount.toLocaleString("hi-IN" , {style : "currency" , currency : "INR"});
    }
}

export function MovieDetails()
{
    const params = useParams().movieId;
    
    const [movieDetails , updateMovies] = useState(null); 

    useEffect( () =>{
        
        async function getMovieDetails()
        {
            const data = await movieDetailsFetch(params);
            updateMovies(data);
        }

        getMovieDetails();

    } , [] );


    return (

        <div className={MovideDetailsCardStyle["parent-container-card-details"]} >
            { 
                movieDetails ?

                (<div className={MovideDetailsCardStyle.card}>
                    <div className={MovideDetailsCardStyle.posterContainer}>
                        <img src={movieDetails.Poster} alt="movie poster" className={MovideDetailsCardStyle.poster} />
                    </div>
            
                    <div className={MovideDetailsCardStyle.details}>
                        <div className={MovideDetailsCardStyle.header}>
                            <h1 className={MovideDetailsCardStyle.title}>{movieDetails.Title}</h1>
                            
                            <div className={MovideDetailsCardStyle.meta}>
                                <span className={MovideDetailsCardStyle.year}>{movieDetails.Year}</span>
                                <span className={MovideDetailsCardStyle.type}>{movieDetails.Type}</span>
                            </div>
                        </div>
                        
                        <div className={MovideDetailsCardStyle.section}>
                            <h3 className={MovideDetailsCardStyle.sectionTitle}>Plot</h3>
                            <p className={MovideDetailsCardStyle.plot}>{movieDetails.Plot}</p>
                        </div>
                        
                        <div className={MovideDetailsCardStyle.section}>
                            <h3 className={MovideDetailsCardStyle.sectionTitle}>Cast</h3>
                            <p className={MovideDetailsCardStyle.actors}>{movieDetails.Actors}</p>
                        </div>
                        
                        <div className={MovideDetailsCardStyle.infoGrid}>
                        
                            {/* DIRECTOR NAME  */}
                            <div className={MovideDetailsCardStyle.infoItem}>
                                <span className={MovideDetailsCardStyle.infoLabel}>Director</span>
                                <span className={MovideDetailsCardStyle.infoValue}>{movieDetails.Director}</span>
                            </div>
                        
                            {/* GENRE  */}
                            <div className={MovideDetailsCardStyle.infoItem}>
                                <span className={MovideDetailsCardStyle.infoLabel}>Genre</span>
                                <span className={MovideDetailsCardStyle.infoValue}>{movieDetails.Genre}</span>
                            </div>
                        
                            {/* BOX OFFICE  */}
                            <div className={MovideDetailsCardStyle.infoItem}>
                                <span className={MovideDetailsCardStyle.infoLabel}>Box Office</span>
                                <span className={MovideDetailsCardStyle.infoValue}>{ DollarToINR(movieDetails.BoxOffice) }</span>
                            </div>
                        
                            {/* IMDB ID  */}
                            <div className={MovideDetailsCardStyle.infoItem}>
                                <span className={MovideDetailsCardStyle.infoLabel}>IMDb ID</span>
                                <span className={MovideDetailsCardStyle.infoValue}>{movieDetails.imdbID}</span>
                            </div>

                        </div>
                    </div>
                </div>)
                :

                (<FadeLoader height={15} margin={12} radius={22} width={8}/>)
            }
        </div>

    );
}