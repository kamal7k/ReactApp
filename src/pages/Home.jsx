// import React from 'react'
import Heder from "../components/Heder"
const Home = () => {
  return (
    <div>
      <h1>This is home page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dicta quo rerum corrupti adipisci reprehenderit repellat esse maxime hic quam. Rem commodi neque possimus! Quidem delectus numquam minima laboriosam officia!</p>
      <p>----------------------------------------------------------------------------------------</p>
      <div className="navs divide-x-4 divide-slate-900">
        <NavLink>Page1</NavLink>
        <NavLink>Page2</NavLink>


      </div>
    </div>
  )
}

export default Home