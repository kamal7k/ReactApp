import { NavLink } from 'react-router-dom'
const Heder = () => {
  return (
    <header className="bg-black text-white flex px-4 py-2 justify-between">
    <h1 className="text-2xl">Tail web</h1>
    <nav className="space-x-2">
      <NavLink to ='/about-page' 
      className="hover:bg-white hover:text-black p-3" href="">about</NavLink>
      <NavLink to='about-page' className="hover:bg-white hover:text-black p-3" href="">Contact</NavLink>
    </nav>
    </header>
  )
};

export default Heder