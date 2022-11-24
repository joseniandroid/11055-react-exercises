import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      // Redirect to the home page after 3 seconds
      navigate('/');
    }, 3000);
  }, []);

  return <h2>Not Found Page</h2>;
};
