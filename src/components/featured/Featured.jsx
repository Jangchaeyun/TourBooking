import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src="https://static.hubzum.zumst.com/hubzum/2019/12/26/10/18939252be5241a0890b8466bfb8f971_780x520.jpg" alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>푸꾸옥</h1>
          <h2>858개 숙소</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://www.kaplaninternational.com/kr/blog/files/styles/device_phone/public/wp/files/2015/09/NY_ESB1.jpg?itok=jDsBZwMY" alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>미국</h1>
          <h2>857개 숙소</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://a.cdn-hotels.com/gdcs/production191/d1264/4a610d50-f585-11e8-b8fa-0242ac11000d.jpg" alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>독일</h1>
          <h2>978개 숙소</h2>
        </div>
      </div>
    </div>
  )
}

export default Featured