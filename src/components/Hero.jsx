import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex items-center justify-between bg-[#F8F0DE] h-screen px-6">
      {/* Left Side */}
      <div className="max-w-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Discover Your Next Great Read
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Explore a world of books. Add your favorite books and view your
          reading history.
        </p>
        <div className="space-x-4">
          <Link
            to="/add-book"
            className="bg-accent border border-gray-800 py-3 px-8 rounded-sm hover:bg-accent/80 transition group"
          >
            Add Book
          </Link>
          <Link
            to="/my-Books"
            className="border border-gray-800 py-3 px-8 rounded-sm hover:bg-accent/80 transition group"
          >
            My Books
          </Link>
        </div>
      </div>

      {/* Right Side (Image Section) */}
      <div className="max-w-md">
        <img
          src="https://i.ibb.co.com/bLvYzPz/Pngtree-watercolor-library-book-clip-art-13391689.png"
          alt="Book"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
