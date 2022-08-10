import PostsList from "./postsList";
import Post from "./post";
import { useParams } from "react-router-dom";
console.log(useParams);
const Posts = ({}) => {
  const params = useParams();
  console.log(params);
  const posts = [
    { id: 1, label: "post1" },
    { id: 2, label: "post2" },
    { id: 3, label: "post3" },
  ];

  const { postId } = params;

  return (
    <>
      {postId ? (
        <Post posts={posts} id={postId} />
      ) : (
        <PostsList posts={posts} />
      )}
    </>
  );
};

export default Posts;
