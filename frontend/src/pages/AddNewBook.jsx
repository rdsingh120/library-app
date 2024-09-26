import { useState } from 'react'
import BackButton from '../components/BackButton'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import AddBookForm from '../components/AddBookForm'
import Loading from '../components/Loader'

const AddNewBook = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const emptyBook = {
    title: '',
    author: '',
    publishYear: '',
    cover: '',
  }

  const [newBook, setNewBook] = useState(emptyBook)
  const handleInputState = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value })
  }
  const handleAddBook = async () => {
    try {
      setLoading(true)
      await axios.post('/api/books', newBook)
      setLoading(false)
      navigate('/')
    } catch (error) {
      console.log('Error int getAllBooks: ' + error.message)
      setLoading(false)
    }
  }
  return (
    <div className="p-5 ">
      {loading ? (
        <Loading />
      ) : (
        <div>
          <BackButton />
          <AddBookForm
            newBook={newBook}
            handleInputState={handleInputState}
            handleAddBook={handleAddBook}
          />
        </div>
      )}
    </div>
  )
}
export default AddNewBook
