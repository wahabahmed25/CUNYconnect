import NavBarOne from "../components/nav bars/NavBarOne";
import InputOne from "../components/Input Fields/InputOne";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { database, auth } from "../firebase-config";
import { set, ref } from "firebase/database";
import { Link } from "react-router-dom";
import {
  validateForm,
  validateField,
} from "../components/Input Validations/SignupValidation";

// Form and field types
interface SignUpForm {
  name: string;
  email: string;
  password: string;
}
type FieldName = keyof SignUpForm; // 'name' | 'email' | 'password'

const SignupPage = () => {
  const [formValue, setFormValue] = useState<SignUpForm>({
    name: "",
    email: "",
    password: "",
  });
  const [fieldErrors, setFieldErrors] = useState<
    Partial<Record<FieldName, string>>
  >({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  // Input field change handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const fieldName = name as FieldName;
    setFormValue((prev) => ({ ...prev, [fieldName]: value }));
    if (submitted) {
      const fieldError = validateField(fieldName, value);
      setFieldErrors((prev) => ({ ...prev, [fieldName]: fieldError }));
      setSubmitted(false)
    }
  };

  // Form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formError = validateForm(formValue);
    setFieldErrors(formError);
    setSubmitError(null);
    setSubmitted(true)

    if (Object.keys(formError).length > 0) {
      console.error("Validation errors:", formError);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formValue.email,
        formValue.password
      );
      const user = userCredential.user;

      await set(ref(database, "users/" + user.uid), {
        name: formValue.name,
        email: formValue.email,
      });

      console.log(
        `Successfully signed up: ${formValue.email}, ${formValue.name}`
      );
      navigate("/login");
    } catch (err) {
      console.log("Error signing up", err);
      setSubmitError("Error signing up. Please check your inputs.");
      setSubmitted(false)
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <NavBarOne />
      <main className="flex-grow mt-5 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-md xl:max-w-md px-6 py-8 sm:px-8"
          aria-label="Sign up form"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#181A4D] mb-8 text-center">
            Create Your Account
          </h2>

          {/* Full Name */}
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium text-sm mb-2"
          >
            Full Name
          </label>
          <InputOne
            name="name"
            placeholder="Enter your full name"
            type="text"
            value={formValue.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-900 placeholder-gray-400 placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-[#181A4D] focus:border-[#181A4D] mb-2"
            required
          />
          {fieldErrors.name && (
            <p className="text-red-500 text-sm mb-2">{fieldErrors.name}</p>
          )}

          {/* Email */}
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-medium mb-2"
          >
            Email Address
          </label>
          <InputOne
            name="email"
            placeholder="Enter your email"
            type="email"
            value={formValue.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 placeholder:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#181A4D] focus:border-[#181A4D] mb-2"
            required
          />
          {fieldErrors.email && (
            <p className="text-red-500 text-sm mb-2">{fieldErrors.email}</p>
          )}

          {/* Password */}
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-medium mb-2"
          >
            Password
          </label>
          <InputOne
            name="password"
            placeholder="Enter your password"
            type="password"
            value={formValue.password}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 placeholder:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#181A4D] focus:border-[#181A4D] mb-2"
            required
          />
          {fieldErrors.password && (
            <p className="text-red-500 text-sm mb-4">{fieldErrors.password}</p>
          )}

          {/* Submit error message */}
          {submitError && (
            <p className="text-red-600 text-sm mb-4 text-center">
              {submitError}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-[#181A4D] hover:bg-[#23255e] text-white cursor-pointer font-semibold py-3 rounded-md transition-colors duration-300 shadow-md"
          >
            Create Account
          </button>

          <p className="mt-6 text-center text-gray-600 text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#181A4D] hover:text-[#23255e] font-semibold"
            >
              Log in
            </Link>
          </p>
        </form>
      </main>
    </div>
  );
};

export default SignupPage;
