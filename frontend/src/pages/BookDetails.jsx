import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Loader from '../components/Loader'
import BookDetailsCard from '../components/BookDetailsCard'

const BookDetails = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [book, setBook] = useState({})
  const getSingleBook = async () => {
    try {
      setLoading(true)
      const book = await axios.get(`/api/books/${id}`)
      const { data } = book.data
      setBook(data)
      setLoading(false)
    } catch (error) {
      console.log('error in getSingleBook: ' + error.message)
      setLoading(false)
    }
  }

  useEffect(() => {
    getSingleBook()
  }, [])
  return (
    <div className="p-5 ">
      {loading ? (
        <Loader />
      ) : (
        <>
          <BackButton />
          <BookDetailsCard book={book} />
        </>
      )}
    </div>
  )
}
export default BookDetails
