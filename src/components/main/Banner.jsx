import { useEffect, useRef } from "react";
import Typed from "typed.js";

const Banner = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(textRef.current, {
      strings: ['성장하는 기업의 성공적인 물류'],
      typeSpeed: 60,
      startDelay: 100,
      backDelay: 2000,
      backSpeed: 80,
      loop: true,
      showCursor: true
    });


    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="banner">
      <div className="video">
        <video className="pc" src="/videos/img_main.mp4" autoPlay loop muted playsInline />
      </div>
      <div className="banner-text">
        <h1>
          <div>
            <strong ref={textRef}>성장하는 기업의 성공적인 물류</strong>
          </div>
          엠케이엠 풀필먼트
        </h1>
        <p>
          고객사와 동반성장할수있도록<br/>
          엠케이엠풀필먼드는 &apos;같이&apos;의 &apos;가치&apos;에 집중합니다.
        </p>
        <div className="scrollDown">
          <p className="down">Scroll Down</p>
          <p className="up">Scroll Up</p>
          <i><span className="blind">스크롤아이콘</span></i>
        </div>
      </div>
    </div>
  )
};

export default Banner;