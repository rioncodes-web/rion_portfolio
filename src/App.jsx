
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import './App.css'
import Home from './pages/Home'
import About from './components/About'


function App() {
  const myRoute = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element = {<Home/>}/>
      <Route path='/about' element = {<About/>}/>

    </Route>
  ))

  return (
    <>
    <RouterProvider router={myRoute}/>


    </>
  )
}

export default App
