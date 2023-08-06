import { useEffect } from 'react';
import WOW from 'wow.js';
import ModalBox from '../common/CustomModal';
import { useLocation } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { navState } from '../../store/nav';
import { loadingState } from '../../store/loading';
import Loading from '../common/Loading';

const InitComponent = () => {
  const loading = useRecoilValue(loadingState);
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
    <>
      <ModalBox />
      {
        loading && <Loading />
      }
    </>
    
  );
};

export default InitComponent;