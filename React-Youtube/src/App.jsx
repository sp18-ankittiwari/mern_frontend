import './App.css';
import Header from './component/Header';
import Home from './pages/Home';
import {createBrowserRouter , RouterProvider} from 'react-router-dom';
import Watch from './pages/Watch';



const router = createBrowserRouter([{
  path : '/',
  element: <Home/>
},
{
  path : '/watch',
  element: <Watch/>
}


])

function App() {

  return (
    <>
        <Header/>
        <RouterProvider router={router}/>

    </>
  )
}

export default App;
