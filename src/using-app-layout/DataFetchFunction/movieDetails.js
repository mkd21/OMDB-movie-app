

export const movieDetailsFetch = async(params) =>{


    try 
    {
        const resp = await fetch(`http://www.omdbapi.com/?i=${params}&apikey=${import.meta.env.VITE_API_KEY}`);

        return await resp.json(); // no need to use await here because the useLoaderData() will manage it automatically. it will wait till the promise is resolved and data is available
    }
    catch(err)
    {
        console.log("error is",err.message);
    }
}