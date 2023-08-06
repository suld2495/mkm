import { useEffect } from 'react';
import WOW from 'wow.js';
import ModalBox from '../common/CustomModal';
import { useLocation } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { navState } from '../../store/nav';

const InitComponent = () => {
  const setNav = useSetRecoilState(navState);
  const { pathname } = useLocation();
  useEffect(() => {
    new WOW().init();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setNav(false);
  }, [pathname, setNav]);

  return (
    <ModalBox />
  );
};

export default InitComponent;