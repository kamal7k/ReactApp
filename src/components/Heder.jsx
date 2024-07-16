import { NavLink } from 'react-router-dom'
const Heder = () => {
  return (
    <header className="bg-black text-white flex px-4 py-2 justify-between">
    <h1 className="text-3xl">Tail web</h1>
    {/* <nav className="space-x-2"> */}
    <nav className=''>
        <NavLink to='/about-page' className={(e) => {

          return e.isActive ? 'hover:bg-white hover:text-black px-2 py-2 text-pink-900' : 'hover:bg-white hover:text-black px-2 py-2';
        }}>About</NavLink>

        <NavLink to='/contact-page' className='hover:bg-white hover:text-black px-2 py-2'>Contact</NavLink>
    </nav>
    </header>
  )
};

export default Heder