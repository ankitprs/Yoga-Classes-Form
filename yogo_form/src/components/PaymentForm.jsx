import React, { useState } from 'react';
import apiService from '../api/apiService';
import { useSearchParams } from "react-router-dom";


const PaymentForm = () => {
  const [upiId, setUpiId] = useState('');
  const [popup, setPopup] = useState(false);
  const [paymentTitle, setPaymentTitle] = useState("Processing Payment")
  const [paymentDesctiption, setPaymentDesctiption] = useState("Please wait while we process your payment...")
  const [searchParams, setSearchParams] = useSearchParams();

  console.log(`parameter-> ${searchParams.get('email_id')}`);

  const handlePayment = async () => {
    setPopup(true);
    const email_id = searchParams.get('email_id'), batch = searchParams.get('batch')
    const reponse = await apiService.verify_payments(
      upiId,
      email_id,
      batch
    )
    if (reponse == null) {
      setPaymentTitle("Payment Failed!")
      setPaymentDesctiption("🔴 🔴 🔴 Payment has been failed please try again...")
    } else {
      setPaymentTitle("Payment Successfull!")
      setPaymentDesctiption("Congratulations 🥂... you are enrolled to our batch")
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 rounded-lg p-8  max-w-md w-full items-center">
        <h2 className="text-2xl font-bold mb-6 text-white">Payment Form</h2>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2 text-white" htmlFor="upiId">
            UPI ID*
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline bg-gray-700"
            id="upiId"
            placeholder="Enter UPI ID"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
            required
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handlePayment}
        >
          Pay Now
        </button>

        {/* Processing Popup */}
        {popup && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg max-w-md">
              <h2 className="text-black text-2xl font-bold mb-4">{paymentTitle}</h2>
              <p className="text-gray-700">{paymentDesctiption}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentForm;
