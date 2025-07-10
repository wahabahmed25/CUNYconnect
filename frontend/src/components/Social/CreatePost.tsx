//on click of submit:
//with the user id, put post into their database table "post"

import { useUserData } from "../user context/useUserData";
import { useState } from "react";
import InputTwo from "../Input Fields/InputTwo";
import { push, ref } from "firebase/database";
import { database } from "../../firebase-config";
import { UseAuthUser } from "../UseAuthUser";

interface postInput {
  post: string;
}

const PostField = () => {
  const { user, loading } = UseAuthUser();
  const { userData } = useUserData();

  const [inputValue, setInputValue] = useState<postInput>({ post: "" });
  const [error, setError] = useState<string>("");

  if (loading) return <p>Loading...</p>;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await push(ref(database, "posts/"), {
        post: inputValue.post,
        likes: 0,
        comments: 0,
        createdAt: Date.now(),
        uid: user?.uid,
        author: userData?.name || "Anonymous",
        school: "nothing"
      });
      setInputValue({ post: "" });
    } catch (err) {
      setError("Error publishing");
      console.error("Error posting", err);
    }
  };

   return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Share a Post</h2>

      {error && <p className="text-red-600 mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <InputTwo
          value={inputValue.post}
          name="post"
          type="text"
          placeholder="What's on your mind?"
          onChange={handleChange}
          
        />

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-all duration-200"
          >
            Publish
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostField;
