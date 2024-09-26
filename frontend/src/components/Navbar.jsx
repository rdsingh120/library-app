import { Link } from 'react-router-dom'
import { RiAddBoxFill } from 'react-icons/ri'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-3 px-10 bg-sky-950">
      <Link to="/">
        <img src={logo} alt="library app logo" width="100px" />
      </Link>
      <Link to={'/books/add'}>
        <button className=" text-white hover:rotate-90 transition-all duration-500">
          <RiAddBoxFill className="size-10" />
        </button>
      </Link>
    </div>
  )
}
export default Navbar
