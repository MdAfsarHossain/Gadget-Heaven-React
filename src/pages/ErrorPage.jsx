import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="h-screen flex items-center  p-16  text-gray-100">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-purple-700">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl text-purple-500">
            Sorry, we couldn't find this page.
          </p>
          <p className="mt-4 mb-8 text-purple-500">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <Link
            to="/"
            className="px-8 py-3 font-semibold rounded bg-violet-400 text-gray-900"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
