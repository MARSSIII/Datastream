import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const login = async (username: string, password: string) => {
    setIsLoading(true);
    setError('');

    try {
      console.log('Logging in with:', { username, password });
      navigate('/');
    } catch (err) {
      setError('Invalid username or password');
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (username: string, password: string) => {
    setIsLoading(true);
    setError('');

    try {
      console.log('Registering user:', { username, password });
      navigate('/');
    } catch (err) {
      setError('Registration failed. Username might be taken.');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    login,
    register,
    isLoading,
    error
  };
};