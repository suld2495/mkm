import { useEffect } from 'react';
import WOW from 'wow.js';

const InitComponent = () => {
  useEffect(() => {
    new WOW().init();
  }, []);

  return null;
};

export default InitComponent;