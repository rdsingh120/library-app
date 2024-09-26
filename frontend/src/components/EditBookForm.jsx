const EditBookForm = ({ bookUpdate, handleInputState, handelEditBook }) => {
  return (
    <>
      <div className="flex flex-col gap-5 max-w-[700px] border mx-auto rounded-lg overflow-hidden bg-slate-50 mt-[3rem] p-10">
        <h1 className="text-5xl text-center mb-5">Edit Book</h1>
        <input
          className="border border-slate-500 h-[3rem] px-2 text-2xl rounded-md"
          type="text"
          placeholder="Title"
          name="title"
          value={bookUpdate.title}
          onChange={handleInputState}
        />
        <input
          className="border border-slate-500 h-[3rem] px-2 text-2xl rounded-md"
          type="text"
          placeholder="Author"
          name="author"
          value={bookUpdate.author}
          onChange={handleInputState}
        />
        <input
          className="border border-slate-500 h-[3rem] px-2 text-2xl rounded-md"
          type="number"
          placeholder="Publish Year"
          name="publishYear"
          value={bookUpdate.publishYear}
          onChange={handleInputState}
        />
        <input
          className="border border-slate-500 h-[3rem] px-2 text-2xl rounded-md"
          type="text"
          placeholder="Cover URL"
          name="cover"
          value={bookUpdate.cover}
          onChange={handleInputState}
        />
        <button
          onClick={handelEditBook}
          className="flex justify-center items-center border border-slate-500 h-[3rem] px-2 text-2xl rounded-md bg-sky-950 py-2 text-white hover:bg-sky-700 transition-all"
        >
          Save Changes
        </button>
      </div>
    </>
  )
}
export default EditBookForm
