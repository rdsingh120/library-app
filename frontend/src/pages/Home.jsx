import axios from 'axios'
import { useEffect, useState } from 'react'
import Loader from '../components/Loader'
import Books from '../components/Books'

const Home = () => {
  const [loading, setLoading] = useState(false)
  const [books, setBooks] = useState([])
  const [tableView, setTableView] = useState(false)

  const getAllBooks = async () => {
    try {
      setLoading(true)
      const books = await axios.get('api/books')
      const { data } = books.data
      setBooks(data)
      setLoading(false)
    } catch (error) {
      console.log('Error int getAllBooks: ' + error.message)
      setLoading(false)
    }
  }

  useEffect(() => {
    getAllBooks()
  }, [])

  return (
    <div className="py-5 flex flex-col gap-5 items-end">
      <button
        className="w-[200px] text-xl rounded-full bg-sky-950 px-4 py-2 text-white hover:bg-sky-700 transition-all mr-5"
        onClick={() => {
          setTableView(!tableView)
        }}
      >
        {tableView ? 'Card View' : 'Table View'}
      </button>
      <div className="p-5 max-w-[1200px] mx-auto flex flex-wrap justify-center gap-10">
        {loading ? <Loader /> : <Books books={books} tableView={tableView} />}
      </div>
    </div>
  )
}
export default Home
