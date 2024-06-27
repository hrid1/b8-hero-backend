import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Login = () => {
  const { signIn } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .then((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex items-center justify-center flex-col md:flex-row  px-8">
      {/* img */}
      <div className="w-1/2  bg-gray-100 ml-12">
        <img src={img} alt="" />
      </div>

      {/* login */}

      <div className="min-h-screen  w-1/2 flex items-center justify-center bg-gray-100 mr-8">
        <div className="w-full max-w-md p-8 space-y-8 bg-white shadow rounded-lg mr-12">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Login
          </h2>
          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-6"
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
                Sign In
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
              Don&apos;t have an account?{" "}
              <Link
                to="/signup"
                className="font-medium text-red-600 hover:text-red-500"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
