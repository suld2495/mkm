import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import { throttle } from '../../utils/time';
import InitComponent from './InitComponent';

const Header = () => {
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

  return (
    <header className={`header ${isScroll ? 'on' : ''}`}>
      <InitComponent />
      <div className="logo">
        <Link to="/">
          <img src="/images/main/logo_header.png" />
          <img src="/images/main/logo_header_over.png" />
        </Link>
      </div>
      <Nav />
      <div className="line-btn">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  )
};

export default Header;