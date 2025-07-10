//retrieves posts data, such as the message, comment, like, user, school etc
//used in mainpage.tsx
//   user,
//   message,
//   date,
//   school,
//   likes,
//   comments,
import PostCard from "../cards/PostCard";
import { useEffect, useState } from "react";
import { ref, get, child } from "firebase/database";
import { database } from "../../firebase-config";

interface postProp {
  id: string;
  uid: string;
  author: string;
  post: string;
  createdAt: string;
  school: string;
  likes: number;
  comments: number;
}

const DisplayPost = () => {
  const [postData, setPostData] = useState<postProp[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchPostData = async () => {
    const dbRef = ref(database);
    try {
      const snapshot = await get(child(dbRef, "posts"));
      if (snapshot.exists()) {
        const data = snapshot.val();
        const formatted = Object.entries(data).map(([key, value]) => ({
          id: key, // key is the Firebase postId
          ...(value as Omit<postProp, "id">),
        }));
        console.log("Formatted data:", formatted);
        setPostData(formatted);
      }
    } catch (err) {
      console.error("error fetching posts data: ", err);
      if (err instanceof Error)
        setError(`error fetching posts: ${err.message}`);
    }
  };

  useEffect(() => {
    fetchPostData();
  }, []);

  return (
    <div>
      {error && <p className="text-red-600">{error}</p>}
      {postData.map((post) => (
        <PostCard
          key={post.id}
          author={post.author}
          post={post.post}
          createdAt={post.createdAt}
          school={post.school}
          likes={post.likes}
          comments={post.comments}
          uid = {post.uid}
        />
      ))}
    </div>
  );
};

export default DisplayPost;
