import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:8000/api/datos'); // Reemplaza la URL con la ruta adecuada de tu backend Django
      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Proyecto React + Django</h1>
      {data.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
