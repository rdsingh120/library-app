import { useState } from 'react'
import BackButton from '../components/BackButton'
import { useNavigate, useParams } from 'react-router-dom'
import Loader from '../components/Loader'
import axios from 'axios'

const DeleteBook = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const deleteBook = async () => {
    try {
      setLoading(true)
      await axios.delete(`/api/books/${id}`)
      navigate('/')
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log('Error in deleteBook: ' + error.message)
    }
  }

  return (
    <div className="p-5">
      <BackButton />
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col gap-5 max-w-[700px] mx-auto rounded-lg overflow-hidden bg-slate-50 mt-[5rem] p-8">
          <h1 className="text-4xl">Delete for all eternity?</h1>
          <p className="text-2xl">
            This will be deleted from the database. <br />
            Are you sure you want to permanently delete this book?
          </p>
          <button
            onClick={deleteBook}
            className="flex justify-center items-center border h-[3rem] px-2 text-2xl rounded-md bg-red-700 py-2 text-white hover:bg-red-900 transition-all"
          >
            Yes, delete it
          </button>
        </div>
      )}
    </div>
  )
}
export default DeleteBook
