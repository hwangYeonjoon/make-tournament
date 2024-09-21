import React, { useState } from 'react';

const LoginPage = ({ onLogin }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(name);
  };

  return (
      <form onSubmit={handleSubmit}>
        <label>이름: </label>
        <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
        />
        <button type="submit">로그인</button>
      </form>
  );
};

export default LoginPage;
