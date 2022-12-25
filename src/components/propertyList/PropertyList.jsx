import './propertyList.css'

const PropertyList = () => {
  return (
    <div className="plist">
      <div className="plistItem">
        <img src="https://cache.marriott.com/marriottassets/marriott/SELJW/seljw-exterior-5640-hor-wide.jpg?interpolation=progressive-bilinear&downsize=1440px:*" alt="" className="plistImg" />
        <div className="plistTitles">
          <h1>호텔</h1>
          <h2>233 개</h2>
        </div>
      </div>
      <div className="plistItem">
        <img src="https://i0.wp.com/blog.allstay.com/wp-content/uploads/2021/10/1-13-1024x610.jpg?resize=740%2C441&ssl=1" alt="" className="plistImg" />
        <div className="plistTitles">
          <h1>리조트</h1>
          <h2>2331 개</h2>
        </div>
      </div>
      <div className="plistItem">
        <img src="http://img.einet.kr/P201907010/responsive//main/cp1/1.jpg" alt="" className="plistImg" />
        <div className="plistTitles">
          <h1>팬션</h1>
          <h2>2331 개</h2>
        </div>
      </div>
      <div className="plistItem">
        <img src="https://tour.gb.go.kr/file/thumbnail2.do?file_physical=2020101111156143_3275.jpg" alt="" className="plistImg" />
        <div className="plistTitles">
          <h1>게스트 하우스</h1>
          <h2>2331 개</h2>
        </div>
      </div>
      <div className="plistItem">
        <img src="http://gonylab4.speedgabia.com/bside/m/main/3.jpg" alt="" className="plistImg" />
        <div className="plistTitles">
          <h1>풀빌라</h1>
          <h2>2331개</h2>
        </div>
      </div>
    </div>
  );
}

export default PropertyList;
