import { createBrowserRouter } from "react-router-dom";
import { APP_ROUTES } from "../constants";
import Home from "../Pages/home";
import Wrapper from "../Pages/wrapper";
import State from "../Pages/State";


export const route = createBrowserRouter([
  {
    path: APP_ROUTES.home,
    element: <Home />,
  },
  {
    path: APP_ROUTES.wrapper,
    element: <Wrapper />,
  },
  {
    path: APP_ROUTES.states,
    element: <State />
  }
]);
