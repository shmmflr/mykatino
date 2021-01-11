import React from 'react';

const InputForm = ({ setValue }) => {
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <input className="form-control" onChange={handleChange}  />
    </div>
  );
};

export { InputForm };
