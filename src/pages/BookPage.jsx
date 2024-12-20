import { FaEdit, FaTrashAlt } from "react-icons/fa";
import PageHead from "../components/PageHead"; // Adjust the path as necessary
import { Link, useLoaderData, useNavigate } from "react-router-dom";

const BookPage = () => {
  const book = useLoaderData();
  const navigate = useNavigate();
  const {
    _id,
    bookName,
    author,
    photoUrl,
    category,
    pageRead,
    totalPages,
    review,
  } = book;

  // Delete Button
  const handleDeleteBook = (id) => {
    fetch(`http://localhost:5000/my-books/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => console.log(data));
    navigate("/my-books");
  };

  return (
    <>
      {/* Page Head */}
      <PageHead
        pageName="Book Details"
        heading={bookName}
        subHeading={`Written by ${author}`}
      />

      {/* Book Details */}
      <div className="max-w-4xl mx-auto my-10 bg-white overflow-hidden">
        <div className="flex flex-col md:flex-row  items-center md:items-start p-6 md:p-0">
          {/* Book Image */}
          <div className="flex items-center w-full md:w-1/3 border border-red-500 justify-center bg-gray-100 mb-5 md:mb-0">
            <img
              src={
                photoUrl
                  ? photoUrl
                  : "https://i.ibb.co.com/bLvYzPz/Pngtree-watercolor-library-book-clip-art-13391689.png"
              }
              alt={bookName}
              className="rounded-lg"
            />
          </div>

          {/* Book Information */}
          <div className="p-6 w-full md:w-2/3 flex flex-col space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">{bookName}</h2>
            <p className="text-gray-600">
              <span className="font-semibold">Author:</span> {author}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Category:</span> {category}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Pages Read:</span> {pageRead} /{" "}
              {totalPages}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Review:</span> {review}
            </p>

            <br />
            <div className="px-4 pb-4 mt-2 gap-4 flex justify-between items-center w-full">
              <Link
                title="update"
                to={`/update-book/${_id}`}
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookPage;
