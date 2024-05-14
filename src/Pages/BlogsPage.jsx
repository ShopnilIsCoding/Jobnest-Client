
import { Link } from "react-router-dom";

const BlogsPage = () => {
  return (
    <div className="bg-base-100 min-h-[80vh] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold ">
            Welcome to Our Blog
          </h2>
          <p className="mt-2 text-xl ">
            Here you'll find informative articles and insights.
          </p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          <Link
            to="/blogs/access-tokens"
            className="bg-white overflow-hidden shadow rounded-lg  hover:scale-105 hover:transition-all ease-in hover:bg-violet-200"
          >
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Understanding Access Tokens and Refresh Tokens
              </h3>
              <p className="text-gray-600">
                Learn about access tokens and refresh tokens, how they work, and
                where to store them on the client side.
              </p>
            </div>
          </Link>
          <Link
            to="/blogs/express-js"
            className="bg-white overflow-hidden shadow rounded-lg  hover:scale-105 hover:transition-all hover:bg-violet-200"
          >
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2 ">
                Introduction to Express.js
              </h3>
              <p className="text-gray-600">
                Discover what Express.js is and how it simplifies building web
                applications with Node.js.
              </p>
            </div>
          </Link>
          <Link
            to="/blogs/nest-js"
            className="bg-white overflow-hidden shadow rounded-lg  hover:scale-105 hover:transition-all hover:bg-violet-200"
          >
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Exploring NestJS
              </h3>
              <p className="text-gray-600">
                NestJS is a progressive Node.js framework that enhances
                developer productivity. Learn more about it here.
              </p>
            </div>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
