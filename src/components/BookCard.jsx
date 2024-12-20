import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt, FaEye } from "react-icons/fa";

const BookCard = ({ book }) => {
  const { _id, bookName, author, photoUrl, category, totalPages } = book;

  // Delete Button
  const handleDeleteBook = (id) => {
    fetch(`http://localhost:5000/my-books/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="relative flex flex-col bg-white border border-slate-200 rounded-md">
      {/* Book Image */}
      <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
        <img
          src={
            photoUrl
              ? photoUrl
              : "https://i.ibb.co/bLvYzPz/Pngtree-watercolor-library-book-clip-art-13391689.png"
          }
          alt="Book Cover"
          className="w-full h-full object-contain" // Updated here
        />
      </div>

      {/* Book Details */}
      <div className="p-4">
        <h6 className="mb-2 text-slate-800 text-xl font-semibold">
          {bookName}
        </h6>
        <p className="text-slate-600 font-light mb-4">by {author}</p>
        <p className="text-slate-600 text-sm mb-2">Category: {category}</p>
        <p className="text-slate-600 text-sm">Total Pages: {totalPages}</p>
      </div>

      {/* Action Buttons */}
      <div className="px-4 pb-4 mt-2 gap-4 flex justify-between items-center">
        <Link
          to={`/update-book/${_id}`}
          title="update"
          className="bg-accent border border-gray-800 w-full py-3 flex justify-center rounded-sm hover:bg-accent/80 transition group"
        >
          <FaEdit className="w-5 h-5" />
        </Link>
        <button
          title="delete"
          onClick={() => handleDeleteBook(_id)}
          className="bg-accent border border-gray-800 w-full py-3 flex justify-center rounded-sm hover:bg-accent/80 transition group"
        >
          <FaTrashAlt className="w-5 h-5" />
        </button>
        <Link
          title="view"
          to={`/book-details/${_id}`}
          className="bg-accent border border-gray-800 w-full py-3 flex justify-center rounded-sm hover:bg-accent/80 transition group"
        >
          <FaEye className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
