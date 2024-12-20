import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import MainLayout from "../layouts/MainLayout";
import { createBrowserRouter } from "react-router-dom";
import AddBookForm from "../pages/AddBookForm";
import UpdateBookForm from "../pages/UpdateBookForm";
import MyBooks from "../pages/MyBooks";
import MyProfile from "../pages/MyProfile";
import BookPage from "../pages/BookPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "add-book",
        element: <AddBookForm />,
      },
      {
        path: "my-books",
        element: <MyBooks />,
        loader: () => fetch("http://localhost:5000/my-books"),
      },
      {
        path: "/book-details/:id",
        element: <BookPage />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/my-books/${params.id}`),
      },
      {
        path: "/update-book/:id",
        element: <UpdateBookForm />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/my-books/${params.id}`),
      },
      {
        path: "profile",
        element: <MyProfile />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default routes;
