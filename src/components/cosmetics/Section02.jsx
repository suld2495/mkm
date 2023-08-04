import { useState } from "react";

const Section02 = () => {
  const [active, setActive] = useState(1);

  return (
    <section className="section02 bigger-slide">
      <div className="center">
        <div className="main-title">
          <h2>
            <strong>
              꼼꼼한 관리가 필요한 코스메틱 물류<br/>
              <span className="color">
                체계적인 엠케이엠으로 고객만족을 더하세요!
              </span>
            </strong>
          </h2>
        </div>
  
        <div className="content">
          <ul>
            <li onMouseEnter={() => setActive(1)} className={`${active === 1 ? 'on' : ''}`}>
              <div>
                <h3>선입선출 시스템</h3>
              </div>
            </li>
            <li onMouseEnter={() => setActive(2)} className={`${active === 2 ? 'on' : ''}`}>
              <div>
                <h3>로케이션 분류 시스템</h3>
              </div>
            </li>
            <li onMouseEnter={() => setActive(3)} className={`${active === 3 ? 'on' : ''}`}>
              <div>
                <h3>모니터링 시스템</h3>
              </div>
            </li>
          </ul>
  
          <p>
            고객의 안전으로 연결되는 코스메틱 상품<br />
            <strong>엠케이엠의 세심한 품질관리 시스템을 경험</strong>하세요.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Section02;
