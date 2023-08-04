import { useEffect } from 'react';
import WOW from 'wow.js';
import ModalBox from '../common/CustomModal';

const InitComponent = () => {
  useEffect(() => {
    new WOW().init();
  }, []);

  return (
    <ModalBox />
  );
};

export default InitComponent;