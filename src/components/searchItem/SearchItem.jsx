import "./searchItem.css"

const SearchItem = () => {
  return (
    <div className="searchItem">
          <img
               src="https://live.staticflickr.com/65535/52159646444_5d0f78a130_b.jpg"
               alt="" 
               className="siImg" 
          />
          <div className="siDesc">
               <h1 className="siTitle">인터컨티넨탈 푸 꾸옥 롱 비치 리조트</h1>
               <div className="siDetails">쯔엉동, 푸꾸옥 - 도심까지 9.6km</div>
               <span className="siTaxiOp">무료 공항버스</span>
               <span className="siSubtitle">열대풍의 푸꾸옥섬에 위치한 InterContinental Phu Quoc Long Beach Resort는 롱 비치(Long Beach) 남단의 한적한 곳에 자리 잡고 있습니다.</span>
               <span className="siFeatures">459개의 객실</span>
               <span className="siCancelOp">취소요금 무료</span>
               <span className="siCancelOpSubtitle">나중에 취소할 수 있으므로 오늘 이 좋은 가격으로 예약하세요!</span>
          </div>
          <div className="siDetails">
               <div className="siRating">
                    <span>최고</span>
                    <button>9.0</button>
               </div>
               <div className="siDetailTexts">
                    <span className="siPrice">199,015원</span>
                    <span className="siTaxOp">세금이 포함된 가격</span>
                    <button className="siCheckButton">이용 가능 여부 보기</button>
               </div>
          </div>
    </div>
  )
}

export default SearchItem