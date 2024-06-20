import Swal from "sweetalert2/src/sweetalert2.js";

import { MdOutlineRemoveRedEye, MdEdit, MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee }) => {
  const { _id, name, quantity, suppiler, taste, category, details, photo } =
    coffee;

  const handleDelete = (id) => {
    console.log(id);
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
        //   Swal.fire({
        //     title: "Deleted!",
        //     text: "Your file has been deleted.",
        //     icon: "success",
        //   });

        fetch(`http://localhost:5001/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden w-96 flex items-center mx-auto p-2 text-left">
      <img
        src={photo}
        alt="Coffee Cup"
        className="w-24 h-24 object-cover m-4"
      />
      <div className="flex-1 p-4">
        <h3 className="text-lg font-semibold">
          Name: <span className="font-normal">{name}</span>
        </h3>
        <p className="mt-2">
          Quatity: <span className="font-normal">{quantity}</span>
        </p>
        <p className="mt-2">
          Supplier: <span className="font-normal">{suppiler}</span>
        </p>
      </div>
      <div className="flex flex-col justify-around p-4  border-l">
        <button className="bg-white btn btn-sm text-green-700 hover:text-green-500 mb-4">
          <MdOutlineRemoveRedEye />
        </button>
        <Link to={`updateCoffee/${_id}`}>
          {" "}
          <button className=" bg-white btn btn-sm text-blue-600 hover:text-blue-500 mb-4">
            <MdEdit />
          </button>
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="bg-white btn btn-sm text-red-600 hover:text-red-500"
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
