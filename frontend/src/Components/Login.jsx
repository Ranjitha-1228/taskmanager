import { useState } from 'react';
import { userLogin } from "../Api/api";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { username, password };
    //console.log('User:', user);
    try {
      const response = await userLogin(user);
    
      const { token } = response;
      //console.log(response);

      // Store the token in localStorage
      localStorage.setItem('token', token);

      // Redirect to the task list page
      navigate('/taskList',{state:user});

    } catch (err) {
      if (err.response && err.response.status === 401) {
        setError('Invalid credentials. Please check your username and password.');
      } else {
        setError('An error occurred. Please try again later.');
      }
    }
  };
  

  return (
         <div>
          <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded"/>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded"  />
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600" >
            Login
          </button>
        </form>
        </div>
   
  );
};

export default Login;
