import { useLoaderData } from "react-router-dom";


const User = () => {

    const loadedUser = useLoaderData();
    console.log(loadedUser)

    return (
        <div className="container mx-auto mt-8">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-700 text-white">User ID</th>
              <th className="py-2 px-4 bg-gray-700 text-white">Email</th>
            </tr>
          </thead>
          <tbody>
            {loadedUser.map(user => (
              <tr key={user.id}>
                <td className="py-2 px-4 border-b border-gray-300 text-gray-800">{user._id}</td>
                <td className="py-2 px-4 border-b border-gray-300 text-gray-900">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default User;