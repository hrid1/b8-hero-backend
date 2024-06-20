
import "./App.css";
import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./components/CoffeeCard";

function App() {
  const coffees = useLoaderData();
  // console.log(coffees.length);
  return (
    <>
      <h1 className="text-5xl text-purple-600">Hot and Cold Coffee</h1>

      <div className="rounded p-4  bg-gray-500 grid grid-cols-2 gap-4 m-2 text-center mx-auto">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
        ))}
      </div>
    </>
  );
}

export default App;
