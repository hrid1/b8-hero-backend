import  { useContext } from "react";
import signup from "../../../src/assets/images/login/login.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .then((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex flex-col md:flex-row items-center  p-6">
      {/* img */}
      <div className="w-1/2  rounded ">
        <img className="" src={signup} alt="" />
      </div>

      {/* signup */}

      <div className="w-full mr-10 max-w-md p-8 space-y-8 bg-white shadow-md rounded-lg">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign Up
        </h2>
        <form
          onSubmit={handleSignup}
          className="mt-8 space-y-6"
          action="#"
          method="POST"
        >
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Your email"
              />
            </div>
            <div className="pt-4">
              <label htmlFor="password" className="sr-only">
                Confirm Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Your password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Register
            </button>
          </div>
        </form>
        <div className="flex items-center justify-between">
          <span className="text-sm">Or Sign In with</span>
        </div>
        <div className="flex justify-center space-x-4 mt-4">
          <button className="bg-blue-600 text-white rounded-full p-3">
            <i className="fab fa-facebook-f"></i>
          </button>
          <button className="bg-blue-400 text-white rounded-full p-3">
            <i className="fab fa-linkedin-in"></i>
          </button>
          <button className="bg-red-600 text-white rounded-full p-3">
            <i className="fab fa-google"></i>
          </button>
        </div>
        <div className="flex items-center justify-center">
          <p className="text-sm">
            Have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-red-600 hover:text-red-500"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
