import Book from '../models/book.models.js'

export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({})
    response(res, 200, books)
  } catch (error) {
    console.log(`Error in getSingleBook: ${error.message}`)
    serverError(res)
  }
}

export const getSingleBook = async (req, res) => {
  const { id } = req.params
  try {
    const book = await Book.findById(id)
    response(res, 200, book)
  } catch (error) {
    console.log(`Error in getSingleBook: ${error.message}`)
    serverError(res)
  }
}

export const createBook = async (req, res) => {
  const bookData = req.body
  const { title, author, publishYear, cover } = bookData
  if (!title || !author || !publishYear || !cover)
    return res.status(404).json({
      success: false,
      message: 'Please fill all fields',
    })
  try {
    const newBook = new Book(bookData)
    await newBook.save()
    response(res, 201, newBook)
  } catch (error) {
    console.log(`Error in createBook: ${error.message}`)
    serverError(res)
  }
}

export const updateBook = async (req, res) => {
  const { id } = req.params
  const bookUpdate = req.body
  try {
    const updatedBook = await Book.findByIdAndUpdate(id, bookUpdate)
    response(res, 200, updatedBook)
  } catch (error) {
    console.log(`Error in updateBook: ${error.message}`)
    serverError(res)
  }
}

export const deleteBook = async (req, res) => {
  const { id } = req.params
  try {
    await Book.findByIdAndDelete(id)
    res.status(200).json({
      success: true,
      message: 'book deleted',
    })
  } catch (error) {
    console.log(`Error in deleteBook: ${error.message}`)
    serverError(res)
  }
}

const response = (res, code, data) =>
  res.status(code).json({
    success: true,
    data: data,
  })
const serverError = (res) =>
  res.status(500).json({
    success: false,
    message: 'Server Error',
  })
