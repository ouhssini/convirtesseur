import React, { useState } from "react";

const Convertisseur = () => {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(((celsius * 9) / 5 + 32).toFixed(2));
  const CelsiusChange = (e) => {
    setCelsius(e.target.value);
    setFahrenheit(((e.target.value * 9) / 5 + 32).toFixed(2));
  };
  const FahrenheitChange = (e) => {
    setFahrenheit(e.target.value);
    setCelsius((((e.target.value - 32) * 5) / 9).toFixed(2));
  };
  return (
    <>
      <div className="w-full max-w-sm mx-auto">
        <div className="text-4xl font-bold text-center mt-5 text-teal-600 leading-normal">
          Convertisseur de Température
        </div>
        <div className="space-y-4 border-2 rounded-md shadow-lg bg-gray-50 border-gray-400 px-10 py-12 my-10 flex  flex-col items-between justify-between">
          <div className="space-y-2">
            <label htmlFor="celsius">Celsius</label>
            <input 
              className="ms-4 border-2 border-gray-400 p-2  w-full rounded-md"
              id="celsius"
              type="number"
              placeholder="Entrez la température en Celsius"
              value={celsius}
              onChange={CelsiusChange}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="fahrenheit">Fahrenheit</label>
            <input
             className="ms-4 border-2 border-gray-400 p-2  w-full rounded-md"
              id="fahrenheit"
              type="number"
              placeholder="Entrez la température en Fahrenheit"
              value={fahrenheit}
              onChange={FahrenheitChange}
            />
          </div>
          <div className="info !mt-5">
            <p className="text-center text-lg font-bold">
              Formule de conversion
            </p>
            <p className=" text-sm">
              Celsius en Fahrenheit : (Celsius * 9/5) + 32
            </p>
            <p className=" text-sm">
              Fahrenheit en Celsius : (Fahrenheit - 32) * 5/9
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Convertisseur;
