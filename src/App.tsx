import CriacaoViagem from "./pages/CriacaoViagem/CriacaoViagem";
import Informacao from "./pages/Informacao/Informacao"
import Login from "./pages/Login/Login";
import Registrar from "./pages/Registrar/Registrar";
import Viagens from "./pages/Viagens/Viagens"
import Home  from "./pages/Home/Home"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Informacao />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/registrar",
    element: <Registrar />
  },
  {
    path: "/trips/:id",
    element: <Home />
  },
  {
    path: "/trips",
    element: <Viagens />
  },
  {
    path: "/trip/create",
    element: <CriacaoViagem />
  },

])



export function App() {
  
  return <RouterProvider router={router} />
    
}
