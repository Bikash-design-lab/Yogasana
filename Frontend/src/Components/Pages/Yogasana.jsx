import { useEffect, useState } from "react";
import axios from "axios";

const Yogasana = () => {
  const [yogasanas, setYogasanas] = useState([]);

  useEffect(() => {
    const fetchYogasanas = async () => {
      try {
        const response = await axios.get(
          "https://yoga-api-nzy4.onrender.com/v1"
        );
        setYogasanas(response.data);
      } catch (error) {
        console.error("Error fetching yogasanas:", error);
      }
    };

    fetchYogasanas();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Yogasanas List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {yogasanas.map((yoga) => (
          <div key={yoga._id} className="border p-4 rounded shadow">
            <img
              src={yoga.image}
              alt={yoga.name}
              className="w-full h-40 object-cover rounded mb-2"
            />
            <h3 className="text-lg font-semibold">{yoga.name}</h3>
            <p className="text-gray-700">{yoga.description}</p>
            <p className="mt-1 text-sm">Difficulty: {yoga.difficulty}/10</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Yogasana;
