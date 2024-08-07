import PropTypes from "prop-types";

const PostCard = ({ post }) => {
  return (
    <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
      <a href="#">
        <img className="rounded-t-lg" src={post?.image} alt="" />
      </a>
      <div className="p-5">
        <div className="flex gap-2">
          <img className="h-14 w-14 rounded-full" src={post?.avatar} alt="" />
          <div>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {post?.firstName} {post?.lastName}
            </h5>
            <p className="mb-2 text-xs tracking-tight text-gray-900">{post?.id}</p>
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
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    writeup: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostCard;
