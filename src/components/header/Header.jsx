import {faCalendarDays} from '@fortawesome/free-regular-svg-icons'
import {
    faBed,
    faCar,
    faParachuteBox,
    faPerson,
    faPlane,
    faTaxi
} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './header.css'
import {DateRange} from 'react-date-range';
import {useState} from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from "date-fns"
const Header = ({ type }) => {
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({adult: 1, children: 0, room: 1});

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i"
                    ? options[name] + 1
                    : options[name] - 1
            };
        });
    };

    return (
        <div className="header">
            <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed}/>
                        <span>숙소</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane}/>
                        <span>항공편</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar}/>
                        <span>랜트카</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faParachuteBox}/>
                        <span>어트랙션</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi}/>
                        <span>공항 택시</span>
                    </div>
                </div>
                {
                    type !== "list" && <> <h1 className = "headerTitle" > 평생 할인 혜택을 받으세요 !</h1>
                <p className="headerDesc">
                    무료 realtour 계정으로 10 % 이상의 즉시 할인을 받으세요.</p>
                <button className="headerBtn">로그인 / 회원가입</button> < div className = "headerSearch" > <div className="headerSearchItem">
                            <FontAwesomeIcon icon={faBed} className="headerIcon"/>
                            <input type="text" placeholder="어디 가세요?" className="headerSearchInput"/>
                        </div>
                        <div className="headerSearchItem">
                            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
                            <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">
                                {
                                    `${format(date[0].startDate, "yyyy/MM/dd")} to ${format(
                                        date[0].endDate,
                                        "yyyy/MM/dd"
                                    )}`
                                }
                            </span>
                            {
                                openDate && <DateRange
                                        editableDateInputs={true}
                                        onChange={item => setDate([item.selection])}
                                        moveRangeOnFirstSelection={false}
                                        ranges={date}
                                        className="date"/>
                            }
                        </div>
                        <div className="headerSearchItem">
                            <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
                            <span onClick={() => setOpenOptions(!openOptions)} className="headerSearchText">{`성인 ${options.adult} · 아이 ${options.children} · 방 ${options.room}`}</span>
                            {
                                openOptions && <div className="options">
                                        <div className="optionItem">
                                            <span className="optionText">성인</span>
                                            <div className="optionCounter">
                                                <button
                                                    disabled={options.adult <= 1}
                                                    className="optionCounterButton"
                                                    onClick={() => handleOption("adult", "d")}>
                                                    -
                                                </button>
                                                <span className="optionCounterNumber">{options.adult}</span>
                                                <button
                                                    className="optionCounterButton"
                                                    onClick={() => handleOption("adult", "i")}>
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <div className="optionItem">
                                            <span className="optionText">아이</span>
                                            <div className="optionCounter">
                                                <button
                                                    disabled={options.children <= 1}
                                                    className="optionCounterButton"
                                                    onClick={() => handleOption("children", "d")}>
                                                    -
                                                </button>
                                                <span className="optionCounterNumber">{options.children}</span>
                                                <button
                                                    className="optionCounterButton"
                                                    onClick={() => handleOption("children", "i")}>
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <div className="optionItem">
                                            <span className="optionText">방</span>
                                            <div className="optionCounter">
                                                <button
                                                    disabled={options.room <= 1}
                                                    className="optionCounterButton"
                                                    Click={() => handleOption("room", "d")}>-</button>
                                                <span className="optionCounterNumber">{options.room}</span>
                                                <button
                                                    className="optionCounterButton"
                                                    onClick={() => handleOption("room", "i")}>
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                            }
                        </div>
                        <div className="headerSearchItem">
                            <button className="headerBtn">검색</button>
                        </div>
                    </div>
                </>
                }
            </div>
        </div>
    )
}

export default Header