import { Link } from 'react-router-dom'
import { IoChevronBack } from 'react-icons/io5'

const BackButton = ({ destination = '/' }) => {
  return (
    <Link to={destination}>
      <button className="flex gap-1 justify-center items-center text-xl rounded-full bg-sky-950 px-4 py-2 text-white hover:bg-sky-700 transition-all">
        <IoChevronBack className="size-6" />
        Back
      </button>
    </Link>
  )
}
export default BackButton
