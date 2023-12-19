import React, { useState } from 'react';
import apiService from '../api/apiService'
import { useNavigate } from 'react-router-dom';

const EnrollmentForm = () => {
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedBatch, setSelectedBatch] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [entrollStatus, setEntrollStatus] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate()


  const batches = ['6-7AM', '7-8AM', '8-9AM', '5-6PM'];

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!(Number(age) >= 18 && Number(age) <= 65)) return setErrorMessage('Sorry... Only people within the age limit of 18-65 can enroll');

    try {
      const response = await apiService.submit_user_form(email, age, name, phone, selectedBatch)
      console.log(response.data);
      if (response.data.enrolled) {
        setEntrollStatus(false);
      } else {
        console.log(response.data.paymentUrl);
        navigate(response.data.paymentUrl)
        setShowPopup(false);
      }

    } catch (error) {
      console.error('Payment failed:', error);
      setEntrollStatus(true);
      setShowPopup(false);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6">Enrollment Form</h2>
        {/* Error Message */}
        {errorMessage && (
          <div className="bg-red-500 text-white p-2 mb-4 rounded">
            {errorMessage}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="name">
              Name*
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">
              Email*
            </label>
            <input
              type="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="age">
              Age*
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="phone">
              Phone Number (Optional)
            </label>
            <input
              type="tel"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="batch">
              Select Batch*
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={selectedBatch}
              onChange={(e) => setSelectedBatch(e.target.value)}
              required
            >
              <option value="" disabled>
                Select Batch
              </option>
              {batches.map((batch) => (
                <option key={batch} value={batch}>
                  {batch}
                </option>
              ))}
            </select>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"

          >
            Enroll Now
          </button>
        </form>
        {/* Popup for Payment Result */}
        {showPopup && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center text-black">
            <div className="bg-white p-8 rounded-lg max-w-md">
              <h2 className="text-2xl font-bold mb-4">
                {entrollStatus ? 'Entrollment Processing...' : 'Entrolled!'}
              </h2>
              <p className="text-gray-700">
                {entrollStatus
                  ? 'Processing your request and validating'
                  : 'Chill... You are already Entrolled'}
              </p>
              {entrollStatus ? (<></>) : (<button
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleClosePopup}
              >
                Close
              </button>)}

            </div>
          </div>
        )}
      </div>
    </div >
  );
};

export default EnrollmentForm;
