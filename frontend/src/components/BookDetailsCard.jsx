const BookDetailsCard = ({ book }) => {
  return (
    <>
      <div className="flex gap-5 max-w-[700px] mx-auto rounded-lg overflow-hidden bg-slate-50 mt-[5rem]">
        <img
          src={book.cover}
          alt={book.title}
          className="w-[300px] h-[450px] object-cover"
        />
        <div className="flex p-6">
          <div className="flex flex-col gap-[2rem]">
            <h1 className="text-4xl text-center ">
              <b>Book Details</b>
            </h1>
            <h1 className="text-xl">
              <b>Id: </b>
              {book._id}
            </h1>
            <h1 className="text-xl">
              <b>Title: </b>
              {book.title}
            </h1>
            <h1 className="text-xl">
              <b>Author: </b>
              {book.author}
            </h1>
            <h1 className="text-xl">
              <b>Year Published: </b>
              {book.publishYear}
            </h1>
          </div>
        </div>
      </div>
    </>
  )
}
export default BookDetailsCard
