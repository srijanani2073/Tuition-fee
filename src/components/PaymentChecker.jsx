import React from 'react';

function PaymentChecker({ onCheckPayment, payment }) {
  return (
    <div className="card">
      <h2>Payment Check</h2>
      <button onClick={onCheckPayment}>Check Payment</button>

      {payment && (
        <div className="result-box">
          <p><strong>Days Late:</strong> {payment.daysDifference} days</p>
          <p><strong>Fine Percentage:</strong> {payment.finePercentage}%</p>
          <p><strong>Fine Amount:</strong> ₹ {payment.fineAmount.toFixed(2)}</p>
          <p><strong>Total Bill:</strong> ₹ {payment.totalBill.toFixed(2)}</p>
          <p><strong>Total Amount to be Paid:</strong> ₹ {payment.totalToBePaid.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}

export default PaymentChecker;
