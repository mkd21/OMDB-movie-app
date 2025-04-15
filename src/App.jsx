
import {createBrowserRouter , Router, RouterProvider} from "react-router-dom";



// import Home from "./normal-data/Home.jsx";
// import About from "./normal-data/About.jsx";
// import Contact from "./normal-data/Contact.jsx";

// using createBrowserRouter normal way 

// const routes = createBrowserRouter([
//   {
//     path : "/",
//     element : <Home />
//   },
//   {
//     path : "/about",
//     element : <About />
//   },
//   {
//     path : "/contact",
//     element : <Contact />
//   }
// ]);



// using App layout 

// app layout is used to prevent writing the same piece of code angain and again like headers and footers 

import {Applayout} from "./using-app-layout/Applayout.jsx";


import { HomeComp } from "./using-app-layout/Components/HomeComp.jsx";
import { AboutComp } from "./using-app-layout/Components/AboutComp.jsx";
import { MoviesComp } from "./using-app-layout/Components/MoviesComp.jsx";
import {ContactComp} from "./using-app-layout/Components/ContactComp.jsx";
import { MovieDetails } from "./using-app-layout/Components/MovieDetails.jsx";

import { ErrorComp } from "./using-app-layout/Components/ErrorComp.jsx";


const routes = createBrowserRouter([
  {
    path : "/",
    element : <Applayout />,
    errorElement : <ErrorComp />,

    children : [
      {
        path : "/",
        element : <HomeComp />
      },
      {
        path : "/about",
        element : <AboutComp />
      },
      {
        path: "/movies",
        element : <MoviesComp />
      },
      {
        path : "/movies/:movieId",
        element : <MovieDetails />
      },
      {
        path : "/contact",
        element : <ContactComp />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router = {routes} />
}

export default App