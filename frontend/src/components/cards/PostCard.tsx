//messages table: user, message, date, school, likes, comments

import personIcon from "../../icons/personIcon.svg"; // Adjust path if needed

interface PostCardProps {
  user: string;
  message: string;
  date: string;
  school: string;
  likes: number;
  comments: number;
}

const PostCard = ({
  user,
  message,
  date,
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
          <p className="text-sm font-semibold text-gray-900">{user}</p>
          <p className="text-xs text-gray-500">{school}</p>
        </div>
        <div className="ml-auto text-xs text-gray-400">{date}</div>
      </div>

      {/* Message */}
      <p className="text-sm text-gray-800 mb-3">{message}</p>

      {/* Footer: likes + comments */}
      <div className="flex items-center gap-4 text-xs text-gray-500">
        <span>👍 {likes}</span>
        <span>💬 {comments}</span>
      </div>
    </div>
  );
};

export default PostCard;


