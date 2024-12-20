import { useLoaderData } from "react-router-dom";
import PageHead from "../components/PageHead";

const UpdateBookForm = () => {
  const updateBook = useLoaderData();
  const { _id, bookName, author, price, pageRead, review } = updateBook;
  const handleUpdateBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const photoUrl = form.photoUrl.value;
    const category = form.category.value;
    const price = form.price.value;
    const pageRead = form.pageRead.value;
    const review = form.review.value;

    const updatedUser = { photoUrl, category, price, pageRead, review };
    
    fetch(`http://localhost:5000/my-books/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <>
      <PageHead
        pageName={"Update Book"}
        heading={bookName}
        subHeading={`Update ${bookName} by ${author} here.`}
      ></PageHead>
      <div className="max-w-3xl mx-auto p-6 bg-[#f3f3f3] rounded-md border border-gray-800/40 my-10">
        <form onSubmit={handleUpdateBook} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Edition */}
            <div className="flex flex-col">
              <label
                htmlFor="edition"
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

            {/* Price */}
            <div className="flex flex-col">
              <label
                htmlFor="price"
                className="text-sm font-medium text-gray-700"
              >
                Price
              </label>
              <input
                defaultValue={price}
                id="price"
                type="number"
                name="price"
                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Enter price"
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
                defaultValue={pageRead}
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
              defaultValue={review}
              name="review"
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Write a short Review"
            ></textarea>
          </div>
          {/* Submit Button */}
          <div className="flex justify-center ">
            <button className="bg-accent border border-gray-800 w-full py-3 rounded-sm hover:bg-accent/80 transition group mt-4">
              Update Book
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateBookForm;
