import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/MailList"
import Navbar from "../../components/navbar/Navbar"
import "./hotel.css"

const Hotel = () => {
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/158485055.jpg?k=53cf752193cfe01139e3ae869e3015a3eb6b711f199a54132b63df7cf5b6ba41&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/299503152.jpg?k=1545759643f11c8c2af38f2bb67ea26f05f6caebfc8ff77d3f8c991c538725b5&o=&hp=1",
    },
    {
      src: "https://images.trvl-media.com/lodging/22000000/21480000/21475900/21475850/160796a1.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/164396585.jpg?k=7eeb333a6025d7d6aa4038965a001346845efb79aae47a339877193cb69197c4&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/165157163.jpg?k=3c4f838efd1d154c1d406f2d069630b310e44ebd777c3d552193a8331704a88e&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/299503246.jpg?k=d3b90cc8cf399f0f8a3eef3993fa38a5412ea8d27f30a284fad806acddf80e7c&o=&hp=1",
    },
  ];
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <button className="bookNow">지금 예약!</button>
          <h1 className="hotelTitle">인터컨티넨탈 푸 꾸옥 롱 비치 리조트</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Bai Truong, 즈엉떠, 푸꾸옥, 베트남, 920000</span>
          </div>
          <span className="hotelDistance">
            도심까지 - 9.6km
          </span>
          <span className="hotelPriceHighlight">이 숙소에서 150000원 이상 숙박을 예약하고 무료 공항 택시를 받으세요</span>
          <div className="hotelImages">
            {photos.map(photo => (
              <div className="hotelImgWrapper">
                <img src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">인터컨티넨탈에서 최고의 휴양을 보내세요</h1>
              <p className="hotelDesc">  
                IHG Clean Promise 인증 기준 외에도 모든 투숙객은 모든 객실 내 무료 Wi-Fi 및 차를 운전해서 오실 경우 무료 주차를 이용하실 수 있습니다. 푸꾸옥의 즈엉떠에 위치한 본 숙소는 관광 명소 및 흥미로운 레스토랑과 가깝습니다. 떠나기 전 유명한 Sao Beach을/를 방문해 보세요. 별 5개를 받은 본 고급 숙소는 투숙객에게 숙소 내 레스토랑, 온천탕 및 실내 수영장을/를 제공합니다.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>9박 숙박에 딱!</h1>
              <span>
                푸꾸옥 중심부에 위치한 이 숙소는 위치 점수 9.0점을 받았습니다.
              </span>
              <h2>
                <b>198,277원</b> (1박)
              </h2>
              <button>객실 상품 보기!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Hotel