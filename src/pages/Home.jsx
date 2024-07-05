// import React from 'react'
import Heder from "../components/Heder"
import { NavLink, Outlet } from "react-router-dom"
const Home = () => {
  return (
    <div>
      <Heder/>
      <h1>This is home page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dicta quo rerum corrupti adipisci reprehenderit repellat esse maxime hic quam. Rem commodi neque possimus! Quidem delectus numquam minima laboriosam officia!</p>
      <p>----------------------------------------------------------------------------------------</p>
      <div className="navs divide-x-4 divide-slate-900">
        <NavLink to='/'>Page1</NavLink>
        <NavLink to='/page2'>Page2</NavLink>


      </div>
      <Outlet />
    </div>
  )
}

export default Home;