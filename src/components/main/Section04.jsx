const Section04 = () => {
  const list1 = [
    { span: '높아지는 고객 니즈를 만족하는', strong: 'MKM의 속도', img: 'mainicon09.png' },
    { span: '오배송 0%에 수렴하는', strong: 'MKM의 정확성', img: 'mainicon10.png' },
  ];

  const list2 = [
    { span: '클라이언트의 불편을 해소하는', strong: 'MKM의 피드백', img: 'mainicon11.png' },
    { span: '상품 특징에 맞는 맞춤 물류', strong: 'MKM의 전문성', img: 'mainicon12.png' },
  ]

  return (
    <section className="section04">
      <div className="center">
        <div className="main-title">
          <h2>
            <strong>
              <span>
                빠르고 정확한 
              </span>
              MKM
            </strong>
          </h2>
        </div>
        <ul className="list">
          {
            list1.map((value, index) => (
              <li key={index}>
                <img src={`/images/main/${value.img}`} alt="이미지" />
                <div>
                  <span>{value.span}</span>
                  <strong>{value.strong}</strong>
                </div>
              </li>
            ))
          }
        </ul>

        <div className="main-title">
          <h2>
            <strong>
              <span>
                꼼꼼하고 확실한 
              </span>
              MKM
            </strong>
          </h2>
        </div>
        <ul className="list">
          {
            list2.map((value, index) => (
              <li key={index}>
                <img src={`/images/main/${value.img}`} alt="이미지" />
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

export default Section04;