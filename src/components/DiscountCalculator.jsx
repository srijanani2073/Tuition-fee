import React from 'react';

function DiscountCalculator({ onCheckDiscount, discount }) {
  return (
    <div className="card">
      <h2>Discount Calculation</h2>
      <button onClick={onCheckDiscount}>Check Discount</button>

      {discount && (
        <div className="result-box">
          <p><strong>Discount Percentage:</strong> {discount.percentage}%</p>
          <p><strong>Discount Amount:</strong> ₹ {discount.discountAmount.toFixed(2)}</p>
          <p><strong>Total Bill After Discount:</strong> ₹ {discount.totalAfterDiscount.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}

export default DiscountCalculator;
