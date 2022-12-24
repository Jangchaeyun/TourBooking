import { faBed, faCar, faParachuteBox, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './header.css'

const Header = () => {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>숙소</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>항공편</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>랜트카</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faParachuteBox} />
            <span>어트랙션</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>공항 택시</span>
          </div>
        </div>
        <h1 className="headerTitle">평생 할인 혜택을 받으세요!</h1>
        <p className="headerDesc">
          무료 realtour 계정으로 10% 이상의 즉시 할인을 받으세요.
        </p>
        <button className="headerBtn">로그인 / 회원가입</button>
      </div>
    </div>
  )
}

export default Header