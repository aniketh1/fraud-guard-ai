import React, { useState } from 'react';

const Detect = () => {
  const [time, setTime] = useState('');
  const [amount, setAmount] = useState('');
  const [features, setFeatures] = useState(Array(28).fill(''));  // Assuming there are 28 features (V1 to V28)
  const [prediction, setPrediction] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      Time: parseFloat(time),
      Amount: parseFloat(amount),
      V: features.map((f) => parseFloat(f)),  // Convert features to numbers
    };

    try {
      // Using CORS proxy to bypass CORS error
      const response = await fetch('https://cors-anywhere.herokuapp.com/https://fraud-gaurd-api.onrender.com/api/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        setPrediction(result.message);  // Set the prediction result in state
      } else {
        const error = await response.json();
        setPrediction(error.error || "An error occurred");
      }
    } catch (error) {
      setPrediction("An error occurred while making the prediction.");
    }
  };

  return (
    <section id='detect'>
      <div className="min-h-screen flex justify-center items-center bg-gray-50 p-4">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
          <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Fraud Detection</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-700">Time:</label>
              <input
                type="number"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
                className="mt-2 w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-700">Amount:</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
                className="mt-2 w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-6">
              <label className="block text-lg font-medium text-gray-700">Features (V1 to V28):</label>
              <div className="grid grid-cols-4 gap-4 mt-2">
                {features.map((feature, index) => (
                  <input
                    key={index}
                    type="number"
                    value={feature}
                    onChange={(e) => {
                      const newFeatures = [...features];
                      newFeatures[index] = e.target.value;
                      setFeatures(newFeatures);
                    }}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                ))}
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
              >
                Submit
              </button>
            </div>
          </form>
        

          {prediction && (
            <div className="mt-6">
              <h3 className="text-xl font-medium text-gray-800">Prediction Result:</h3>
              <p className="text-lg text-gray-700">{prediction}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Detect;
