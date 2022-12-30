import "./mailList.css"

const MailList = () => {
  return (
     <div className="mail">
        <h1 className="mailTitle">시간 절약, 돈 절약!</h1>
        <span className="mailDesc">가입하시면 최고의 거래를 보내드립니다!</span>
        <div className="mailInputContainer">
           <input type="text" placeholder="너의 이메일" />
           <button>구독</button>
        </div>
    </div>
  )
}

export default MailList