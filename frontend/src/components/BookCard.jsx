import { Link } from 'react-router-dom'
import { FaEye } from 'react-icons/fa'
import { MdEditDocument, MdDelete } from 'react-icons/md'

const BookCard = ({ id, title, cover }) => {
  return (
    <article className="max-w-[250px]">
      <img
        src={cover}
        alt={title}
        className="w-[100%] h-[350px] object-cover rounded-xl"
      />
      <div className="mt-2 flex justify-evenly">
        <Link to={`/books/${id}`}>
          <button className="bg-sky-600 rounded-xl text-white py-1 px-2 hover:bg-sky-900 transition-all">
            <FaEye className="size-6" />
          </button>
        </Link>
        <Link to={`/books/edit/${id}`}>
          <button className="bg-yellow-600 rounded-xl text-white py-1 px-2 hover:bg-yellow-900 transition-all">
            <MdEditDocument className="size-6" />
          </button>
        </Link>
        <Link to={`/books/delete/${id}`}>
          <button className="bg-red-600 rounded-xl text-white py-1 px-2 hover:bg-red-900 transition-all">
            <MdDelete className="size-6" />
          </button>
        </Link>
      </div>
    </article>
  )
}
export default BookCard
