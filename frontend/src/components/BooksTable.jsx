import { Link } from 'react-router-dom'
import { FaEye } from 'react-icons/fa'
import { MdEditDocument, MdDelete } from 'react-icons/md'

const BooksTable = ({ books }) => {
  let i = 1
  return (
    <table className="w-full border-separate border-spacing-2">
      <thead>
        <tr className="border-[4px] border-black">
          <th className="text-2xl border-[4px] border-slate-600 rounded-xl p-5 max-md:hidden">
            No.
          </th>
          <th className="text-2xl border-[4px] border-slate-600 rounded-xl">
            Title
          </th>
          <th className="text-2xl border-[4px] border-slate-600 rounded-xl max-md:hidden">
            Author
          </th>
          <th className="text-2xl border-[4px] border-slate-600 rounded-xl">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {books.map(({ _id, title, author }) => {
          return (
            <tr key={_id} className="text-2xl border-[4px] border-black">
              <td className="border-[4px] border-slate-700 rounded-xl text-center p-5 max-md:hidden">
                {i++}
              </td>
              <td className="border-[4px] border-slate-700 rounded-xl text-center p-5">
                <h1 className="text-2xl">{title}</h1>
              </td>
              <td className="border-[4px] border-slate-700 rounded-xl text-center p-5 max-md:hidden">
                <h1 className="text-2xl">{author}</h1>
              </td>
              <td className="border-[4px] border-slate-700 rounded-xl text-center p-5">
                <div className="mt-2 flex justify-evenly gap-5">
                  <Link to={`/books/${_id}`}>
                    <button className="bg-sky-600 rounded-xl text-white py-1 px-2 hover:bg-sky-900 transition-all">
                      <FaEye className="size-6" />
                    </button>
                  </Link>
                  <Link to={`/books/edit/${_id}`}>
                    <button className="bg-yellow-600 rounded-xl text-white py-1 px-2 hover:bg-yellow-900 transition-all">
                      <MdEditDocument className="size-6" />
                    </button>
                  </Link>
                  <Link to={`/books/delete/${_id}`}>
                    <button className="bg-red-600 rounded-xl text-white py-1 px-2 hover:bg-red-900 transition-all">
                      <MdDelete className="size-6" />
                    </button>
                  </Link>
                </div>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
export default BooksTable
