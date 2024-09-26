import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import BookDetails from './pages/BookDetails'
import AddNewBook from './pages/AddNewBook'
import EditBook from './pages/EditBook'
import DeleteBook from './pages/DeleteBook'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/books/add" element={<AddNewBook />} />
        <Route path="/books/edit/:id" element={<EditBook />} />
        <Route path="/books/delete/:id" element={<DeleteBook />} />
      </Routes>
    </>
  )
}

export default App
