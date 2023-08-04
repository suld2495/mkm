import { useState } from "react";

const Section02 = () => {
  const [active, setActive] = useState(1);

  return (
    <section className="section02 bigger-slide">
      <div className="center">
        <div className="main-title">
          <h2>
            <strong>
              계약이 쉽지 않은 단기 물류<br/>
              <span className="color">
                엠케이엠 풀필먼트가 해결해드립니다.
              </span>
            </strong>
          </h2>
        </div>
  
        <div className="content">
          <ul>
            <li onMouseEnter={() => setActive(1)} className={`${active === 1 ? 'on' : ''}`}>
              <div>
                <h3>쇼핑몰 오픈</h3>
              </div>
            </li>
            <li onMouseEnter={() => setActive(2)} className={`${active === 2 ? 'on' : ''}`}>
              <div>
                <h3>크라우드 펀딩</h3>
              </div>
            </li>
            <li onMouseEnter={() => setActive(3)} className={`${active === 3 ? 'on' : ''}`}>
              <div>
                <h3>비정기 배송<span>공동구매or사은품</span></h3>
              </div>
            </li>
          </ul>
  
          <p>
            일회성 비정기적 물류로 고민하고 계신다면<br />
            대표님의 시작을
            <strong>엠케이엠이 도와드리겠습니다.</strong>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Section02;
