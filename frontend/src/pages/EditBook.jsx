import { useEffect, useState } from 'react'
import BackButton from '../components/BackButton'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import EditBookForm from '../components/EditBookForm'
import Loading from '../components/Loader'

const EditBook = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const [bookUpdate, setBookUpdate] = useState({
    title: '',
    author: '',
    year: '',
  })
  const handleInputState = (e) => {
    setBookUpdate({ ...bookUpdate, [e.target.name]: e.target.value })
  }
  const getBookToUpdate = async () => {
    try {
      setLoading(true)
      const book = await axios.get(`/api/books/${id}`)
      const { data } = book.data
      setBookUpdate(data)
      setLoading(false)
    } catch (error) {
      console.log('Error in getBookToUpdate: ' + error.message)
      setLoading(false)
    }
  }
  const handelEditBook = async () => {
    try {
      setLoading(true)
      await axios.put(`/api/books/${id}`, bookUpdate)
      setLoading(false)
      navigate(`/books/${id}`)
    } catch (error) {
      console.log('Error in getBookToUpdate: ' + error.message)
      setLoading(false)
    }
  }
  useEffect(() => {
    getBookToUpdate()
  }, [])
  return (
    <div className="p-5 ">
      {loading ? (
        <Loading />
      ) : (
        <div>
          <BackButton />
          <EditBookForm
            bookUpdate={bookUpdate}
            handleInputState={handleInputState}
            handelEditBook={handelEditBook}
          />
        </div>
      )}
    </div>
  )
}
export default EditBook
