import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import PcNav from './PcNav';
import { throttle } from '../../utils/time';
import InitComponent from './InitComponent';
import { useRecoilState } from 'recoil';
import { navState } from '../../store/nav';

const Header = () => {
  const [nav, setNav] = useRecoilState(navState);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const wheelHandler = throttle(() => {
      setIsScroll(!!window.scrollY);
    }, 100);

    window.addEventListener('scroll', wheelHandler);

    return () => {
      window.removeEventListener('wheel', wheelHandler);
    };
  }, []);

  const close = () => {
    setNav(false);
  }

  return (
    <header className={`header ${isScroll ? 'on' : ''} ${nav ? 'on' : ''}`}>
      <InitComponent />
      <div className="logo">
        <Link to="/">
          <img src="/images/main/logo_header.png" />
          <img src="/images/main/logo_header_over.png" />
        </Link>
      </div>
      <Nav />
      <div className="line-btn" onClick={() => setNav((prev) => !prev)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {
        nav && <PcNav close={close} />
      }
    </header>
  )
};

export default Header;