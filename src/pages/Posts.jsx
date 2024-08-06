import { Icon } from "@iconify/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPosts } from "../redux/actions/getPosts";
import TextPrimary from "../components/atomic/text/textPrimary/TextPrimary";

const Posts = () => {
  const posts = useSelector((state) => state?.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <div className="rounded-lg bg-gray-50 p-7 text-gray-900 shadow-lg">
      <h1 className="mb-7 text-4xl font-bold">Posts</h1>
      <Link to="/" className="mb-4 flex items-center text-blue-600 hover:underline">
        <Icon icon="mdi:arrow-left" className="mr-2" />
        Back to Home
      </Link>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts?.loading ? (
          <TextPrimary level="h1">Loading...</TextPrimary>
        ) : (
          posts?.posts?.length > 0 &&
          posts?.posts?.map((post) => (
            <div
              key={post.id}
              className="max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800"
            >
              <a href="#">
                <img className="rounded-t-lg" src={post?.image} alt="" />
              </a>
              <div className="p-5">
                <div className="flex gap-2">
                  <img className="h-14 w-14 rounded-full" src={post?.avatar} alt="" />
                  <div>
                    <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {post?.firstName} {post?.lastName}
                    </h5>
                    <p className="mb-2 text-xs tracking-tight text-gray-900 ">{post?.id}</p>
                  </div>
                </div>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{post?.writeup}</p>
                <a
                  href="#"
                  className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Posts;
