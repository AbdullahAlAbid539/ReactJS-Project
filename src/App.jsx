import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Header></Header>
      <Carousel></Carousel>
      <Home></Home>
      <div>
        <h1 className="text-center text-4xl m-10 text-amber-500 font-bold">Our Products</h1>
        <Products></Products>
      </div>

      <div className="mt-12">
        <input
        onChange={(e)=>handleChangeInput(e)}
          type="text"
          placeholder="Type here"
          className="input input-bordered input-secondary w-full max-w-xs" />
      </div>



      <div className="min-h-screen"></div>
      <Footer></Footer>

    </>
  )
}

export default App
