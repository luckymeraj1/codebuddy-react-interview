import { Icon } from "@iconify/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPosts } from "../redux/actions/getPosts";
import TextPrimary from "../components/atomic/text/textPrimary/TextPrimary";
import PostCard from "../components/molecular/postCard/PostCard";

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
          posts?.posts?.map((post) => <PostCard key={post?.id} post={post} />)
        )}
      </div>
    </div>
  );
};

export default Posts;
