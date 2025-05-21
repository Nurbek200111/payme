import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const AppWrapper = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Sahifa faqat yangilanganda redirect qilish
    if (performance.navigation.type === 1 && location.pathname !== '/') {
      navigate('/', { replace: true });
    }
  }, []);

  return children;
};

export default AppWrapper;
