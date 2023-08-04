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
      backSpeed: 40,
      loop: true,
      showCursor: true
    });


    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="banner">
      <h1>
        <div>
          <strong ref={textRef}>성장하는 기업의 성공적인 물류</strong>
        </div>
        엠케이엠 풀필먼트
      </h1>
      <p>
        이부분은 작은 글자도 넣으면 좋을것 같습니다.<br />
        사이즈 참고 글자수 참고해주세요.
      </p>
      <div className="scrollDown">
        <p className="down">Scroll Down</p>
        <p className="up">Scroll Up</p>
        <i><span className="blind">스크롤아이콘</span></i>
      </div>
    </div>
  )
};

export default Banner;