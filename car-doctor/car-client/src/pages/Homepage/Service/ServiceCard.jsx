
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  const { img, title, price } = service;
  // console.log(service);
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
      <figure>
        <img className="p-4" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="flex justify-between items-center ">
          <h2 className="text-2xl font-bold text-orange-600">
            Price: ${price}
          </h2>
          <div className="card-actions justify-end">
            <button className="btn  rounded-2xl">
            <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
