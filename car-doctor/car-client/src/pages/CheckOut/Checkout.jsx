import { confirmPasswordReset } from "firebase/auth";
import { json, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Checkout = () => {
  const service = useLoaderData();
  const { _id, price, img, title } = service;
  console.log(_id);

  const handleService = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const serviceName = form.serviceName.value;
    const date = form.date.value;
    const email = form.email.value;
    const description = form.description.value;
    // console.log(name, serviceName, date, email, description)
    const order = {
      customarName: name,
      email,
      image: img,
      serviceName,
      service: title,
      date,
      service_Id: _id,
      price: price,
    };
    // console.log(order)

    fetch("http://localhost:5000/bookings/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Service successfully added!",
            text: "You clicked the button!",
            icon: "success",
          });
          form.reset();
        }
      });
  };

  return (
    <div>
      <h1>This is check Out page. {_id}</h1>

      <div className="flex justify-center my-12 items-center  bg-gray-100">
        <div className="w-2/3 p-8 bg-white rounded-lg shadow-lg">
          <form onSubmit={handleService}>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Enter name"
                name="name"
                className="input input-bordered w-full"
              />
              <input
                type="text"
                placeholder="Service Name"
                name="serviceName"
                className="input input-bordered w-full"
              />
              <input
                type="date"
                placeholder="Date here"
                name="date"
                className="input input-bordered w-full"
              />
              <input
                type="email"
                placeholder="Enter email"
                name="email"
                className="input input-bordered w-full"
              />
              <textarea
                placeholder="Product Description"
                name="description"
                className="textarea textarea-bordered w-full h-48 col-span-2"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary mt-4 w-full bg-red-500 hover:bg-red-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
