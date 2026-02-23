import React, { useEffect, useState } from "react";
import axios from "axios";
import RainChart from "./components/RainChart";

function App() {
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [rainData, setRainData] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/states")
      .then(res => setStates(res.data));
  }, []);

  const fetchRainfall = (state) => {
    axios.get(`http://127.0.0.1:5000/average/${state}`)
      .then(res => setRainData(res.data));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Rainfall Analysis for Agriculture</h1>

      <select 
        onChange={(e) => {
          setSelectedState(e.target.value);
          fetchRainfall(e.target.value);
        }}
      >
        <option>Select State</option>
        {states.map((state, index) => (
          <option key={index} value={state}>{state}</option>
        ))}
      </select>

      {rainData && Object.keys(rainData).length > 0 && (
        <RainChart data={rainData} state={selectedState} />
      )}
    </div>
  );
}

export default App;
