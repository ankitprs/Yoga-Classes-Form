// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PaymentForm, EnrollmentForm } from './components'
import IMG from './img/yoga_form.jpg'

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-900 text-white">
      {/* Left Card */}
      <div className="md:w-1/2 p-8 m-10">
        <h1 className="text-4xl font-bold mb-4">Admission Form for Yoga Classes</h1>
        <img
          className="mb-4 rounded-lg"
          src={IMG}
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
