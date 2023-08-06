import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="center">
        <div>
          <div className="logo">
            <img src="/images/main/logo_footer.png" />
          </div>
          <div className="info">
            <div>
              <span className="title">회사명.</span><span>(주)엠케이엠코퍼레이션</span>
            </div>
            <div>
              <div>
                <span className="title">대표자.</span><span>최주용</span>
              </div>
              <div>
                <span className="title">사업자등록번호.</span><span>668-88-02765</span>
              </div>
            </div>
            <div>
              <div>
                <span className="title">TEL.</span><span>070-4571-6540</span>
              </div>
              <div>
                <span className="title">FAX.</span><span>0504-480-7982</span>
              </div>
              <div>
                <span className="title">E-Mail.</span><span>mkmcorp@naver.com</span>
              </div>
            </div>
            <div>
              <span className="title">주소.</span><span>경기도 남양주시 화도읍 폭포로 257</span>
            </div>
          </div>
          <div className="customer">
            <div>고객센터</div>
            <div>
              <span>상담번호</span>
              <span>070-4571-6540</span>
            </div>
            <div>
              <span>운영시간</span>
              <span>09:30~18:00(토,일 및 공휴일 휴무)</span>
            </div>
          </div>
        </div>

        <div>
          <span>COPYRIGHT © 2023 (주)엠케이엠코퍼레이션 ALL RIGHTS RESERVED.</span>
          <div>
            <Link to="/company">회사소개</Link>
            <Link to="/customer">고객센터</Link>
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
