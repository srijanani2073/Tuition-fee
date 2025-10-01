import React, { useState } from 'react';
import FeeForm from './components/FeeForm';
import FeeDisplay from './components/FeeDisplay';
import DiscountCalculator from './components/DiscountCalculator';
import PaymentChecker from './components/PaymentChecker';
import './App.css';

export default function App() {
  const [formData, setFormData] = useState({
    tuitionFee: '',
    standard: '',
    dateOfPayment: '',
    lastDateOfPayment: ''
  });

  const [fees, setFees] = useState({
    tuitionFee: 0,
    hostelFee: 0,
    dressFee: 0,
    activityFee: 0,
    totalFee: 0
  });

  const [discount, setDiscount] = useState(null);
  const [payment, setPayment] = useState(null);
  const [errors, setErrors] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);

    setDiscount(null);
    setPayment(null);
    setErrors('');

    calculateFees(newFormData);
  };

  const calculateFees = (data) => {
    const tuition = parseFloat(data.tuitionFee) || 0;
    const std = parseInt(data.standard) || 0;
    let hostel = 0, dress = 0;

    if (std >= 1 && std <= 3) {
      dress = 3000; hostel = 5000;
    } else if (std >= 4 && std <= 6) {
      dress = 5000; hostel = 8000;
    } else if (std > 6) {
      dress = 10000; hostel = 10000;
    }

    const activity = tuition * 0.10;
    const total = tuition + hostel + dress + activity;

    setFees({ tuitionFee: tuition, hostelFee: hostel, dressFee: dress, activityFee: activity, totalFee: total });
  };

  const handleCheckDiscount = () => {
    const total = fees.totalFee;
    let percentage = 0;

    if (total >= 1000 && total <= 4000) percentage = 5;
    else if (total >= 4001 && total <= 6000) percentage = 12;
    else if (total >= 6001 && total <= 8000) percentage = 17;
    else if (total >= 8001 && total <= 40000) percentage = 21;

    const discountAmount = (total * percentage) / 100;
    setDiscount({ percentage, discountAmount, totalAfterDiscount: total - discountAmount });
  };

  const handleCheckPayment = () => {
    if (!formData.dateOfPayment || !formData.lastDateOfPayment) {
      setErrors('Please enter both payment dates');
      return;
    }

    const paymentDate = new Date(formData.dateOfPayment);
    const lastDate = new Date(formData.lastDateOfPayment);

    if (paymentDate <= lastDate) {
      setErrors('Date of payment should be greater than last date of payment for fine calculation');
      return;
    }

    const diffDays = Math.ceil((paymentDate - lastDate) / (1000 * 60 * 60 * 24));
    let finePercentage = diffDays < 30 ? 6 : diffDays <= 60 ? 12 : 21;
    const totalBill = discount ? discount.totalAfterDiscount : fees.totalFee;
    const fineAmount = (totalBill * finePercentage) / 100;

    setPayment({ daysDifference: diffDays, finePercentage, fineAmount, totalBill, totalToBePaid: totalBill + fineAmount });
    setErrors('');
  };

  return (
    <div className="container">
      <h1>Fees Bill Calculator</h1>

      <FeeForm formData={formData} onInputChange={handleInputChange} />
      <FeeDisplay fees={fees} />

      {errors && <div className="error">{errors}</div>}

      <DiscountCalculator onCheckDiscount={handleCheckDiscount} discount={discount} />
      <PaymentChecker onCheckPayment={handleCheckPayment} payment={payment} />
    </div>
  );
}
