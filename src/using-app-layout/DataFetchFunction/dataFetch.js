
export const dataFetch = async() =>{
    try 
    {
        const resp = await fetch(" http://www.omdbapi.com/?s=Batman&apikey=bccb6097");

        return await resp.json(); // no need to use await here because the useLoaderData() will manage it automatically. it will wait till the promise is resolved and data is available
    }
    catch(err)
    {
        console.log("error is",err.message);
    }
}