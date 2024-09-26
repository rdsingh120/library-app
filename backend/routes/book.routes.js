import { Router } from 'express'
import {
  createBook,
  deleteBook,
  getAllBooks,
  getSingleBook,
  updateBook,
} from '../controllers/book.controllers.js'

const router = Router()

router.route('/').get(getAllBooks).post(createBook)
router.route('/:id').get(getSingleBook).put(updateBook).delete(deleteBook)

export default router
