import React from 'react';

function FeeDisplay({ fees }) {
  return (
    <div className="card bg-light">
      <h2>Fee Breakdown</h2>
      <table>
        <tbody>
          <tr>
            <td><strong>Tuition Fee:</strong></td>
            <td>₹ {fees.tuitionFee.toFixed(2)}</td>
          </tr>
          <tr>
            <td><strong>Hostel Fee:</strong></td>
            <td>₹ {fees.hostelFee.toFixed(2)}</td>
          </tr>
          <tr>
            <td><strong>Dress Fee:</strong></td>
            <td>₹ {fees.dressFee.toFixed(2)}</td>
          </tr>
          <tr>
            <td><strong>Activity Fee (10%):</strong></td>
            <td>₹ {fees.activityFee.toFixed(2)}</td>
          </tr>
          <tr className="total-row">
            <td><strong>Total Fee:</strong></td>
            <td><strong>₹ {fees.totalFee.toFixed(2)}</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default FeeDisplay;
