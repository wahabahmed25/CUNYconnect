//on click of submit:
//with the user id, put post into their database table "post"

import { useState } from "react";
import InputTwo from "../Input Fields/InputTwo";
import { set, ref } from "firebase/database";
import { database } from "../../firebase-config";
import { UseAuthUser } from "../UseAuthUser";
interface postInput {
  post: string;
}
const PostField = () => {
  // const [post, setPost] = useState()
  const { user, loading } = UseAuthUser();

  console.log("user data: ", user);
  // console.log(user.uid,  "user id")
  const [inputValue, setInputValue] = useState<postInput>({
    post: "",
  });
  const [error, setError] = useState<string>("");
  if (loading) return <p>Loading...</p>;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await set(ref(database, "posts/"), {
        post: inputValue.post,
        likes: 0,
        comments: 0,
      });
    } catch (err) {
      setError("error publishing");
      console.error("error posting", err);
    }
  };

  // await set(ref(database, "users/" + user.uid), {
  //     name: formValue.name,
  //     email: formValue.email,
  //     school: null,
  //     classes: [],
  //     onboarded: false
  //   });

  return (
    <div>
      {error && <p className="text-red-600">{error}</p>}
      <form onSubmit={handleSubmit}>
        <InputTwo
          value={inputValue.post}
          name="post"
          type="text"
          onChange={handleChange}
        />
        <button className="bg-blue-400 p-3 rounded text-white" type="submit">
          Publish
        </button>
      </form>
      <div>
        <h1>Welcome, {user?.displayName || "User"}!</h1>
        <p>Email: {user?.email}</p>
        <p>UID: {user?.uid}</p>
      </div>
    </div>
  );
};

export default PostField;
