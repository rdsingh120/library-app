import BookCard from './BookCard'
import BooksTable from './BooksTable'
const Books = ({ books, tableView }) => {
  const cardView = () =>
    books.map(({ _id, cover, title }) => (
      <BookCard key={_id} id={_id} title={title} cover={cover} />
    ))

return <>{tableView ? <BooksTable books={books} /> : cardView()}</>
}
export default Books
