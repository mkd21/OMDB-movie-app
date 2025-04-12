
import {NavLink, useNavigate, useRouteError} from "react-router-dom";


// useRouteError is a hook in react router which returns the error object 

// lets say if we want to navigate programatically in the browser in the response to the user interactions or effects  

// or 

// lets say user is on about page and click on some link that is not available so user will be directed to the error page , and now user 
// wants to go back to the previous page rather than the home page then in that case we can use useNavigate() hook 



export const ErrorComp = () =>{

    const val = useRouteError();
    const path = useNavigate();
    console.log(val);

    const handleNavigation = (e) =>{
        if(e.target.innerText == "Go Back to Previous Page")
            return path(-1);

        return path("/");
        // path(-1);   /// or we can do something like path("/") or any page path that we want user should redirect
    }

    return(
        <>
            <h1>Error! no page found</h1>
            {/* <NavLink to="/"> <button>Back to Home Page</button> </NavLink> */}

            <button onClick={handleNavigation} >Go Back to Previous Page</button>
            <button onClick={handleNavigation} >Go to Home Page</button>
        </>
    );
}