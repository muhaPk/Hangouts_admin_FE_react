import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const useAuth = () => {

    const location = useLocation();
    const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    
    console.log('location.pathname ' + location.pathname)
    
    if (!token && location.pathname !== '/auth/signin') {
      navigate('/auth/signin');
    }
  }, [location, navigate]);

};
