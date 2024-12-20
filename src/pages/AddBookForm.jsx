import PageHead from "../components/PageHead";

const AddBookForm = () => {
  // Add book to data base
  const handleAddBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const bookName = form.bookName.value;
    const author = form.author.value;
    const photoUrl = form.photoUrl.value;
    const category = form.category.value;
    const pageRead = form.pageRead.value;
    const totalPages = form.totalPages.value;
    const review = form.review.value;
    const book = {
      bookName,
      author,
      photoUrl,
      category,
      pageRead,
      totalPages,
      review,
    };

    fetch("http://localhost:5000/my-books", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(book),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <>
      <PageHead
        pageName={"Add Book"}
        heading={"Add a New Book"}
        subHeading={"List your favorite book and share with friends."}
      ></PageHead>
      <div className="max-w-3xl mx-auto p-6 bg-[#f3f3f3] rounded-md border border-gray-800/40 my-10">
        <form onSubmit={handleAddBook} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Book Name */}
            <div className="flex flex-col">
              <label
                htmlFor="bookName"
                className="text-sm font-medium text-gray-700"
              >
                Book Name
              </label>
              <input
                id="bookName"
                type="text"
                name="bookName"
                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Enter book name"
              />
            </div>

            {/* Author */}
            <div className="flex flex-col">
              <label
                htmlFor="author"
                className="text-sm font-medium text-gray-700"
              >
                Author
              </label>
              <input
                id="author"
                type="text"
                name="author"
                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Enter author name"
              />
            </div>

            {/* Edition */}
            <div className="flex flex-col">
              <label
                htmlFor="photoUrl"
                className="text-sm font-medium text-gray-700"
              >
                Photo URL
              </label>
              <input
                id="photoUrl"
                type="text"
                name="photoUrl"
                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Enter Photo URL"
              />
            </div>

            {/* Category */}
            <div className="flex flex-col">
              <label
                htmlFor="category"
                className="text-sm font-medium text-gray-700"
              >
                Category
              </label>
              <input
                id="category"
                type="text"
                name="category"
                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Enter category"
              />
            </div>

            {/* Number of Pages */}
            <div className="flex flex-col">
              <label
                htmlFor="totalPages"
                className="text-sm font-medium text-gray-700"
              >
                Total Pages
              </label>
              <input
                id="totalPages"
                type="number"
                name="totalPages"
                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Enter Total Pages"
              />
            </div>

            {/* Pages Read */}
            <div className="flex flex-col">
              <label
                htmlFor="pageRead"
                className="text-sm font-medium text-gray-700"
              >
                Pages Read
              </label>
              <input
                id="pageRead"
                type="number"
                name="pageRead"
                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Enter pages read"
              />
            </div>
          </div>
          {/* Review */}
          <div className="flex flex-col">
            <label
              htmlFor="review"
              className="text-sm font-medium text-gray-700"
            >
              Short Review
            </label>
            <textarea
              id="review"
              type="textarea"
              name="review"
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Write a short Review"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center ">
            <button className="bg-accent border border-gray-800 w-full py-3 rounded-sm hover:bg-accent/80 transition group mt-4">
              Add Book
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddBookForm;
