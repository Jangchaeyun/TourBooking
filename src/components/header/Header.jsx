import { faBed, faCar, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Header = () => {
  return (
    <div className="header">
      <div className="headerList">
        <div className="headerListItem">
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
          <FontAwesomeIcon icon={faBed} />
          <span>어트랙션</span>
        </div>
        <div className="headerListItem">
          <FontAwesomeIcon icon={faTaxi} />
          <span>공항 택시</span>
        </div>
      </div>
    </div>
  )
}

export default Header