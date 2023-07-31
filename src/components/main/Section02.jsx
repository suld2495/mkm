const Section02 = () => {
  const list = ['주문 자동화', '데이터 연동', '스마트 물류', '맞춤 서비스', '전담 매니저 제도', '실시간 커뮤니티', '물류 품질관리', '꼼꼼한 통계리포트']

  return (
    <section className="section02">
      <div className="center">
        <div className="main-title">
          <h2>
            <strong>
              매출 상승으로 연결되는<br/>
              확실한 풀필먼트
            </strong>
          </h2>
          <p>엠키에임은 풀필먼트는 <strong>눈에 보이는 변화를 약속</strong>합니다!</p>
        </div>
        <ul className="list">
          {
            list.map((value, index) => (
              <li key={index}>
                <span className="number">{`0${index + 1}`}</span>
                <span className="title">{value}</span>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}

export default Section02;