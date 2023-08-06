import { useEffect, useState } from 'react';
import Section01 from '../components/solution/Section01';
import Section02 from '../components/solution/Section02';
import Section03 from '../components/solution/Section03';
import Section04 from '../components/solution/Section04';
import Section05 from '../components/solution/Section05';
import Section06 from '../components/solution/Section06';

const Cosmetics = () => {
  const [visible, setVisible] = useState(false); 
  const scroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setVisible(false);
  };

  useEffect(() => {
    const wheel = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener('wheel', wheel);

    return () => {
      window.removeEventListener('wheel', wheel);
    }
  }, []);
  return (
    <div className="solution">
      <h1 className="sub-title">솔루션소개</h1>
      {
        visible && (
          <div onClick={scroll} className="top" />
        )
      }
      <Section01 />
      <Section02 />
      <Section03 />
      <Section04 />
      <Section05 />
      <Section06 />
    </div>
  )
};

export default Cosmetics;
