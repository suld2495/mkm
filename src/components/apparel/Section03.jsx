import { Link } from "react-router-dom";

const Section03 = () => (
  <section className="section03 bottom-banner">
    <div className="main-title">
      <span className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="">간편 견적 서비스</span>
      <h2 className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.3s">
        <strong>
          효과적인 의류 물류를 고민하시나요?<br />
          지금 전문가의 상담을 받아보세요.
        </strong>
      </h2>
      <Link to="/customer" className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.6s">Click</Link>
      <p className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.9s">
        엠케이엠 풀필먼트 서비스에 관한 문의는<br/>
        고객센터 070-4571-6540 또는 견적안내 1:1 문의를 이용해 주세요.
      </p>
    </div>
  </section>
);

export default Section03;