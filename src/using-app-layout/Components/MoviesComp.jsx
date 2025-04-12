

import { Cards } from "./Cards.jsx";


// importing css files 

import ParentContaineStyle from "../../ModuleCss/CardStyles/ParentContainer.module.css";
import { useEffect, useState } from "react";

import { dataFetch } from "../DataFetchFunction/dataFetch.js";

export function MoviesComp()
{
    const [receivedData , updateData] = useState([]);

    useEffect(() => {
        async function dataFetcher(){
            const resp = await dataFetch();
            updateData(resp);
        }
        dataFetcher();
    } , []);

    if(receivedData.length == 0) return <h1>Loading Movies..</h1>
    return (
        <>
            <section className={ParentContaineStyle["parent-container"]} >
                {
                    receivedData.Search.map( (iter) => <Cards key={iter.imdbID} MovieTitle = {iter.Title} MovieImage = {iter.Poster} MovieReleaseDate = {iter.Year} /> )
                }
            </section>
        </>
    );
}