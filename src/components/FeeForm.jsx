import React from 'react';

function FeeForm({ formData, onInputChange }) {
  return (
    <div className="card">
      <h2>Enter Fee Details</h2>
      
      <div className="form-group">
        <label>
          Tuition Fee:
          <input
            type="number"
            name="tuitionFee"
            value={formData.tuitionFee}
            onChange={(e) => onInputChange(e.target)}
            placeholder="Enter tuition fee"
          />
        </label>
      </div>

      <div className="form-group">
        <label>
          Standard of Study:
          <input
            type="number"
            name="standard"
            value={formData.standard}
            onChange={(e) => onInputChange(e.target)}
            placeholder="Enter standard (1-12)"
            min="1"
            max="12"
          />
        </label>
      </div>

      <div className="form-group">
        <label>
          Date of Payment:
          <input
            type="date"
            name="dateOfPayment"
            value={formData.dateOfPayment}
            onChange={(e) => onInputChange(e.target)}
          />
        </label>
      </div>

      <div className="form-group">
        <label>
          Last Date of Payment:
          <input
            type="date"
            name="lastDateOfPayment"
            value={formData.lastDateOfPayment}
            onChange={(e) => onInputChange(e.target)}
          />
        </label>
      </div>
    </div>
  );
}

export default FeeForm;
