import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {

    const coffee = useLoaderData();
    const { _id, name, quantity, suppiler, taste, category, details, photo } = coffee;


    const handleUpdateForm = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const suppiler = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updateCoffee = {name, quantity, suppiler, taste, category, details, photo}
        // console.log(newCoffee);

        const options = {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCoffee)
          };
          
          fetch(`http://localhost:5001/coffee/${_id}`, options)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                if(response.modifiedCount > 0){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }

            })
            .catch(err => console.error(err));

    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center  p-4">
        <div className="bg-[#F4F3F0] shadow-md rounded-lg p-6 max-w-2xl w-full">
          <a href="/" className="text-blue-500 hover:underline mb-4 ">
            Back to home
          </a>
          <h2 className="text-2xl text-gray-800 font-semibold text-center mb-6">Update Coffee Details</h2>
          
          <form onSubmit={handleUpdateForm}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block  text-left text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input input-bordered w-full"
                  defaultValue={name}
                />
              </div>
              <div>
                <label className="block  text-left text-gray-700 mb-1">quantity</label>
                <input
                  type="text"
                  name="quantity"
                  className="input input-bordered w-full"
                  defaultValue={quantity}
                />
              </div>
              <div>
                <label className="block  text-left text-gray-700 mb-1">Supplier</label>
                <input
                  type="text"
                  name="supplier"
                  className="input input-bordered w-full"
                  defaultValue={suppiler}
                />
              </div>
              <div>
                <label className="block  text-left text-gray-700 mb-1">Taste</label>
                <input
                  type="text"
                  name="taste"
                  className="input input-bordered w-full"
                  defaultValue={taste}
                />
              </div>
              <div>
                <label className="block  text-left text-gray-700 mb-1">Category</label>
                <input
                  type="text"
                  name="category"
                  className="input input-bordered w-full"
                  defaultValue={category}
                />
              </div>
              <div>
                <label className="block  text-left text-gray-700 mb-1">Details</label>
                <input
                  type="text"
                  name="details"
                  className="input input-bordered w-full"
                  defaultValue={details}
                />
              </div>
              <div className="col-span-1 sm:col-span-2">
                <label className="block  text-left text-gray-700 mb-1">Photo</label>
                <input
                  type="text"
                  name="photo"
                  className="input input-bordered w-full"
                  defaultValue={photo}
                />
              </div>
            </div>
            {/* <button
              type="submit"
              className="btn btn-block w-full"
            >
              Update Coffee Details
            </button> */}
            <input type="submit" value="Update Coffee " className="btn btn-primary w-full" />
          </form>
        </div>
      </div>
    );
};

export default UpdateCoffee;