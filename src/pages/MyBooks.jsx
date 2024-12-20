import PageHead from "../components/PageHead"; // Adjust the path as necessary
import BookCard from "../components/BookCard"; // Adjust the path as necessary
import { useLoaderData } from "react-router-dom";

const MyBooks = () => {
  const allBooks = useLoaderData();

  return (
    <>
      {/* Page Head Component */}
      <PageHead
        pageName="My Books"
        heading="Your Book Collection"
        subHeading="Browse through your collection and manage your books."
      />

      {/* Books Grid */}
      <div className="my-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 px-6">
          {allBooks.map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MyBooks;
