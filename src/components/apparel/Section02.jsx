import { useState } from "react";

const Section02 = () => {
  const [active, setActive] = useState(1);

  return (
    <section className="section02 bigger-slide">
      <div className="center">
        <div className="main-title">
          <h2>
            <strong>
              고객요구와 상품변동을 즉각 반영해야 하는 의류<br/>
              <span className="color">
                엠케이엠은 의류배송의 모든 것을 정확하게 해결합니다.
              </span>
            </strong>
          </h2>
        </div>
  
        <div className="content">
          <ul>
            <li onMouseEnter={() => setActive(1)} className={`${active === 1 ? 'on' : ''}`}>
              <div>
                <h3>의류 행거</h3>
              </div>
            </li>
            <li onMouseEnter={() => setActive(2)} className={`${active === 2 ? 'on' : ''}`}>
              <div>
                <h3>암막 시스템</h3>
              </div>
            </li>
            <li onMouseEnter={() => setActive(3)} className={`${active === 3 ? 'on' : ''}`}>
              <div>
                <h3>적재 로케이션 </h3>
              </div>
            </li>
          </ul>
  
          <p>
            의류관리만을 위해 설계된 <strong>WAREHOUSE SYSTEM<br />
            안전한 상품 보관과 정확한 배송을 약속
            드립니다.</strong>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Section02;
