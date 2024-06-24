import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const SignIn = () => {

  const {signInUser} = useContext(AuthContext)

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        signInUser(email, password)
       .then(result => {
        console.log(result.user);
        const user = {
          email,
          lastLoggedAt: result.user?.metadata?.lastSignInTime,
        }
        // update last logged at in the db
        fetch('http://localhost:5001/user', {
          method: 'PATCH',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => console.log(data)) 

       })
       .catch(err => {
        console.error(err)
       })
        
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <form onSubmit={handleSignIn} className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-white text-center">
          Sign In Your Account
        </h2>


        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-300">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-3 py-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-300">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="w-full px-3 py-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-500"
        >
          Sign Up
        </button>
      </form>
    </div>
    );
};

export default SignIn;