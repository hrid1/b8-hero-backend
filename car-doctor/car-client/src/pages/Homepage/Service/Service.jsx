import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";


const Service = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="text-center mb-4 space-y-4">
        <h3 className="text-3xl font-bold text-orange-600">Services</h3>
        <h1 className="text-5xl font-bold">Our Service Area</h1>
        <p className="text-gray-500">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don&apos; t look even
          slightly believable.{" "}
        </p>
      </div>
      {/* services card */}
      <h1>Total: {services.length}</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 m-4 gap-4">
        {
            services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
        }
      </div>
    </div>
  );
};

export default Service;
