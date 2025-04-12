
import { Header } from "./Components/CommonComponents/Header.jsx";
import {Footer} from "./Components/CommonComponents/Footer.jsx";

import { Outlet , useNavigation } from "react-router-dom";


export function Applayout()
{
    const currentState = useNavigation();

    if(currentState.state == "loading")
    {
        return <h1>Loading Data....</h1>
    }
    return(
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}