import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const User = () => {
  const loadedUser = useLoaderData();
  const [users, setUsers] = useState(loadedUser);
  // console.log(loadedUser)

  const handleDelete = (id) => {
    // console.log("Delete: ", id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5001/user/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
        const newUsers = users.filter((user) => user._id !== id);
        setUsers(newUsers);

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="container mx-auto mt-8">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-gray-700 text-white">User ID</th>
            <th className="py-2 px-4 bg-gray-700 text-white">Email</th>
            <th className="py-2 px-4 bg-gray-700 text-white">Last Login</th>
            <th className="py-2 px-4 bg-gray-700 text-white">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="py-2 px-4 border-b border-gray-300 text-gray-800">
                {user._id}
              </td>
              <td className="py-2 px-4 border-b border-gray-300 text-gray-900">
                {user.email}
              </td>
              <td className="py-2 px-4 border-b border-gray-300 text-gray-900">
                {/* {user.lastLoggedAt &&
                  (() => {
                    // Inline function to remove last 3 letters
                    let modifiedString = user.lastLoggedAt.slice(0, -3);
                    return modifiedString;
                  })()} */}
                  {
                    user.lastLoggedAt && ( () => user.lastLoggedAt.slice(0, -3) ) ()
                  }
              </td>
              <td className="py-2 px-4 border-b border-gray-300 text-gray-900 text-center">
                {" "}
                <button
                  onClick={() => {
                    handleDelete(user._id);
                  }}
                  className="btn btn-primary "
                >
                  Delete
                </button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
