import "./footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="fLists">
                <ul className="fList">
                    <li className="fListItem">도시</li>
                    <li className="fListItem">지역</li>
                    <li className="fListItem">도시</li>
                    <li className="fListItem">지역</li>
                    <li className="fListItem">항공권</li>
                    <li className="fListItem">호텔</li>
                    <li className="fListItem">관광 명소</li>
                </ul>
                <ul className="fList">
                    <li className="fListItem">홈</li>
                    <li className="fListItem">아파트</li>
                    <li className="fListItem">리조트</li>
                    <li className="fListItem">빌라</li>
                    <li className="fListItem">호스텔</li>
                    <li className="fListItem">게스트하우스</li>
                </ul>
                <ul className="fList">
                    <li className="fListItem">개성이 넘치는 숙소</li>
                    <li className="fListItem">모든 여행지</li>
                    <li className="fListItem">여행지 탐색</li>
                    <li className="fListItem">이용 후기</li>
                    <li className="fListItem">읽을 거리</li>
                    <li className="fListItem">시즌</li>
                </ul>
                <ul className="fList">
                    <li className="fListItem">렌터카 서비스</li>
                    <li className="fListItem">항공편 검색</li>
                    <li className="fListItem">레스토랑 예약</li>
                    <li className="fListItem">realtour.com 여행사</li>
                </ul>
          </div>
          <div className="fText">Copyright © 2022 realtour.com</div>
        </div>
    )
}

export default Footer