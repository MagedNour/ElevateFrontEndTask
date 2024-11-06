
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import Home from './Pages/Home/Home'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './Components/Layout/Layout';

function App() {

  const router = createBrowserRouter([
    {
      path: "/ElevateFrontEndTask", element: <Layout />, children: [
        { path: "", element: <Home /> },
        { path: "product/:id", element: <ProductDetails /> }
      ]
    }

  ])

  return (
    <>
      <ToastContainer />
      <RouterProvider router={router}></RouterProvider>


    </>
  )
}

export default App
