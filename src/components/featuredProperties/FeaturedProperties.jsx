import './featuredProperties.css'

const FeaturedProperties = () => {
    return (
        <div className="fp">
            <div className='fpItem'>
                <img
                    src="https://phuquoc.intercontinental.com/uploads/phuquoc/homepage/Sunset%20View%20from%20Resort%20%26%20Ombra%20-%2016x9.jpg"
                    alt=""
                    className="fpImg"/>
                <span className="fpName">인터컨티넨탈 롱비치 리조트</span>
                <span className="fpCity">푸꾸옥</span>
                <span className="fpPrice">201,720원 부터</span>
                <div className="fpRating">
                    <button>10.0</button>
                    <span>최고</span>
                </div>
            </div>
            <div className='fpItem'>
                <img
                    src="https://media-cdn.tripadvisor.com/media/photo-s/1d/92/b4/aa/mandala-penthouse.jpg"
                    alt=""
                    className="fpImg"/>
                <span className="fpName">더 만다라 호텔</span>
                <span className="fpCity">메를린</span>
                <span className="fpPrice">241,226원 부터</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>좋음</span>
                </div>
            </div>
            <div className='fpItem'>
                <img
                    src="https://pix8.agoda.net/hotelImages/9790614/-1/0316da367c89f00231450b8fc34d190d.jpg?ca=13&ce=1&s=1024x768"
                    alt=""
                    className="fpImg"/>
                <span className="fpName">Hotel Royal Classic Osaka</span>
                <span className="fpCity">오사카</span>
                <span className="fpPrice">312,370원 부터</span>
                <div className="fpRating">
                    <button>9.1</button>
                    <span>베스트</span>
                </div>
            </div>
        </div>
    );
}

export default FeaturedProperties;
