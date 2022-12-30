import "./list.css"
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import {useLocation} from "react-router-dom"
import {useState} from "react"
import {format} from "date-fns"
import { DateRange } from "react-date-range"
import SearchItem from "../../components/searchItem/SearchItem"

const List = () => {

    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination);
    const [date, setDate] = useState(location.state.date);
    const [openDate, setOpenDate] = useState(false)
    const [options, setOptions] = useState(location.state.options);

    console.log(location)
    return (
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="lsTitle">검색</h1>
                        <div className="lsItem">
                            <label>설명</label>
                            <input type="text" placeholder={destination}/>
                        </div>
                        <div className="lsItem">
                            <label>체크인 날짜</label>
                            <span onClick={() => setOpenDate(!openDate)}>
                                {
                                    `${format(date[0].startDate, "yyyy/MM/dd")} to ${format(
                                        date[0].endDate,
                                        "yyyy/MM/dd"
                                    )}`
                                }</span>
                            {openDate && (
                                <DateRange
                                    onChange={item => setDate([item.selection])}
                                    minDate={new Date()}
                                    ranges={date}
                                />
                            )}
                        </div>
                        <div className="lsItem">
                            <label>옵션</label>
                            <div className="lsOptions">
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">최소 가격 <small>1박</small></span>
                                    <input type="number" className="lsOptionInput" />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">최대 가격 <small>1박</small></span>
                                    <input type="number" className="lsOptionInput" />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">성인</span>
                                    <input type="number" min={1} className="lsOptionInput" placeholder={options.adult} />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">아이</span>
                                    <input type="number" min={0} className="lsOptionInput" placeholder={options.children} />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">방</span>
                                    <input type="number" min={1} className="lsOptionInput" placeholder={options.room} />
                                </div>
                            </div>
                        </div>
                        <button>검색</button>
                    </div>
                    <div className="listResult">
                        <SearchItem />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List