'use client'
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Checkout = () => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    address: '',
  });
  const router = useRouter()
  

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === 'expiryDate' && value.length === 2 && formData.expiryDate.length === 1) {
      value += '/';
    }

    if (name === 'cardNumber' && value.length === 5 && formData.cardNumber.length === 4) {
      value += ' ';
    }

    if (name === 'cardNumber' && value.length === 10 && formData.cardNumber.length === 9) {
      value += ' ';
    }

    if (name === 'cardNumber' && value.length === 15 && formData.cardNumber.length === 14) {
      value += ' ';
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    alert('Payment processed successfully!');
    router.push('/dashboard')
  };

  return (
    <div className="min-h-[92vh] text-gray-800 flex items-center justify-center bg-white">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl mb-4 font-bold text-center">Payment Checkout</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-600">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="1234 5678 9101 1121"
              maxLength="19"
              required
            />
          </div>
          <div className="mb-4 flex justify-between">
            <div className="w-1/2 mr-2">
              <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-600">
                Expiry Date
              </label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="MM/YY"
                maxLength="5"
                required
              />
            </div>
            <div className="w-1/2 ml-2">
              <label htmlFor="cvv" className="block text-sm font-medium text-gray-600">
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="CVV"
                maxLength="3"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-600">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows="4"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter your address"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="amount" className="block text-sm font-medium text-gray-600">
              Amount (INR)
            </label>
            <input
              type="text"
              id="amount"
              name="amount"
              value="2000"
              readOnly
              className="mt-1 p-2 w-full border rounded-md bg-gray-100"
            />
          </div>
          <Button
          variant="premium"
            type="submit"
            className="w-full py-2 px-4"
          >
            Pay
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;