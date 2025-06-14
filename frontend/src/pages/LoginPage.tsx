//where users input email and password to log into their account form
import NavBarOne from "../components/nav bars/NavBarOne";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import InputOne from "../components/Input Fields/InputOne";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";
import { getDatabase, ref, get } from "firebase/database";

interface LoginForm {
  email: string;
  password: string;
}

const LoginPage = () => {
  //form values for login page
  const [formValue, setFormValue] = useState<LoginForm>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  //input field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValue((prev) => ({ ...prev, [name]: value }));
  };


  //logs in user by retrieving data
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      //signin using correct auth, email and pass
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formValue.email,
        formValue.password
      );

      const user = userCredential.user;
      //user id
      const uid = user.uid;

      // Realtime DB
      const db = getDatabase(); //initiallex and gets reference to RTDB
      const userRef = ref(db, `users/${uid}`); //creates reference to specific user data path
      const snapshot = await get(userRef); //fetches data from that path

      if (snapshot.exists()) {
        const userData = snapshot.val();

        localStorage.setItem(
          "user",
          JSON.stringify({
            uid,
            name: userData.name,
            email: user.email,
          })
        );
        navigate("/dashboard");
      } else {
        setError("User data not found in database");
      }
      const getUser = localStorage.getItem('user')
      console.log("logged in user: ", getUser);
    } catch (err) {
      console.error("Error logging in:", err);
      setError("Error logging in. Please check your credentials.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <NavBarOne />
      <main className="flex-grow mt-5 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-md xl:max-w-md px-6 py-8 sm:px-8"
          aria-label="Login form"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#181A4D] mb-8 text-center">
            Welcome Back
          </h2>

          {/* Email */}
          
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium text-sm mb-2"
          >
            Email Address
          </label>
          <InputOne
            name="email"
            placeholder="Enter your email"
            type="email"
            value={formValue.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-900 placeholder-gray-400 placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-[#181A4D] focus:border-[#181A4D] mb-4"
            required
          />

          {/* Password */}
          <label
            htmlFor="password"
            className="block text-gray-700 font-medium text-sm mb-2"
          >
            Password
          </label>
          <InputOne
            name="password"
            placeholder="Enter your password"
            type="password"
            value={formValue.password}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-900 placeholder-gray-400 placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-[#181A4D] focus:border-[#181A4D] mb-8"
            required
          />

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <button
            type="submit"
            className="w-full bg-[#181A4D] hover:bg-[#23255e] text-white cursor-pointer font-semibold py-3 rounded-md transition-colors duration-300 shadow-md"
          >
            Login
          </button>

          <p className="mt-6 text-center text-gray-600 text-sm">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-[#181A4D] hover:text-[#23255e] font-semibold"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </main>
    </div>
  );
};

export default LoginPage;
