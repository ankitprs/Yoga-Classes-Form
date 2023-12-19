// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PaymentForm, EnrollmentForm } from './components'


const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-900 text-white">
      {/* Left Card */}
      <div className="md:w-1/2 p-8 m-10">
        <h1 className="text-4xl font-bold mb-4">Admission Form for Yoga Classes</h1>
        <img
          className="mb-4 rounded-lg"
          src="https://img.freepik.com/free-photo/yoga-group-classes-inside-gym_1303-14788.jpg?w=1800&t=st=1702990486~exp=1702991086~hmac=814f5053fdca6c78c664d43cec15a8cfaaf8cce1d9275a5b262be09adfbd618c" // Replace with your actual image URL
          alt="Yoga Class"
        />
        <p className="text-lg">
          Welcome to our Yoga Classes! Join us to experience the benefits of yoga. Our classes
          cater to all levels, from beginners to advanced practitioners. Connect your mind, body, and
          spirit through the practice of yoga.
        </p>
      </div>

      {/* Right Card with EnrollmentForm */}
      <div className="md:w-1/2 p-8">
        <EnrollmentForm />
      </div>
    </div>
  );
};


const App = () => {
  return (
    <div className='bg-gray-600 w-screen h-screen'>

      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/payment" element={<PaymentForm />} />
        </Routes >
      </BrowserRouter>

    </div>
  );
};

export default App;
