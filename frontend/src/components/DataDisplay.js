// frontend/src/components/DataDisplay.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const DataDisplay = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/data")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h3>{data.message}</h3>
      <ul style={{ listStyleType: "none" }}>
        {data.items.map((item, index) => (
          <li key={index}>✅ {item}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataDisplay;
