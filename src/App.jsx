import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"
import 'bootstrap/dist/css/bootstrap.min.css';
import RootLayout from "./Layout/RootLayout";
const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route index element={<Home />} />
    <Route path="/products" element={<Products />} />
  </Route>
))
const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App