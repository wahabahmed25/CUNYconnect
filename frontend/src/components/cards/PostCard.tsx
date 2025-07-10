//messages table: user, message, date, school, likes, comments
//used for social media feed
import personIcon from "../../icons/personIcon.svg"; // Adjust path if needed

interface PostCardProps {
  author: string;
  post: string;
  createdAt: string;
  school: string;
  likes: number;
  comments: number;
  uid: string;
}

// key={post.id}
//           author={post.author}
//           post={post.post}
//           createdAt={post.createdAt}
//           school={post.school}
//           likes={post.likes}
//           comments={post.comments}
//           uid = {post.uid}

const PostCard = ({
  author,
  post,
  createdAt,
  school,
  likes,
  comments,
}: PostCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 mb-4 max-w-xl w-full transition hover:shadow-lg">
      {/* Header */}
      <div className="flex items-center mb-2">
        <img
          src={personIcon}
          alt="Profile"
          className="h-10 w-10 rounded-full mr-3"
        />
        <div>
          <p className="text-sm font-semibold text-gray-900">{author}</p>
          <p className="text-xs text-gray-500">{school}</p>
        </div>
        <div className="ml-auto text-xs text-gray-400">{createdAt}</div>
      </div>

      {/* Message */}
      <p className="text-sm text-gray-800 mb-3">{post}</p>

      {/* Footer: likes + comments */}
      <div className="flex items-center gap-4 text-xs text-gray-500">
        <span>👍 {likes}</span>
        <span>💬 {comments}</span>
      </div>
    </div>
  );
};

export default PostCard;


