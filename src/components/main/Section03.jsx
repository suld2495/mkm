const Section03 = () => {
  const list = [
    { span: '안전하고 탄탄한', strong: '자동화 시스템' },
    { span: '실속있고 효과적인', strong: '맞춤형 풀필먼트' },
    { span: '안심 할 수 있는', strong: '피킹 & 패킹 시스템' },
    { span: '친절하고 신속한', strong: '전담 매니저 제도' },
  ]

  return (
    <section className="section03">
      <div className="center">
        <div className="main-title">
          <h2 className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="">
            <strong>
              물류 걱정을 지우는<br/>
              <span>MKM SOLUTION</span>
            </strong>
          </h2>
          <p className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.3s">엠케이엠 풀필먼트는 <strong>눈에 보이는 변화를 약속</strong>합니다!</p>
        </div>
        <ul className="list">
          {
            list.map((value, index) => (
              <li key={index} className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay={`${0.3 * (index + 1)}s`}>
                <div>
                  <span>{value.span}</span>
                  <strong>{value.strong}</strong>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}

export default Section03;