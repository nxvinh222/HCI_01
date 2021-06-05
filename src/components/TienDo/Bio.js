import rankingHelp from "../../static/images/ranking-help.svg";
import avata from "../../static/images/avata.jpg";
import { MdKeyboard, MdSupervisorAccount } from "react-icons/md";
import { BiUserCheck, BiAward, BiHelpCircle } from "react-icons/bi";
import { useRef } from "react";

function Bio() {
    const rankingHelpRef = useRef();

    const toggleRankingHelp = () => {
        // console.log(rankingHelpRef.current.style);
        rankingHelpRef.current.classList.toggle("hidden");
    };

    return (
        <div className="bio shadow">
            <div className="avatar">
                <img src={avata} alt="user" />
            </div>
            <ul>
                <li id="member-from">
                    <BiUserCheck color="#28A745" size="2.5em" />
                    <span>Thành viên từ: 01/11/2020</span>
                </li>
                <li id="average-speed">
                    <MdKeyboard color="#FFC107" size="2.5em" />
                    <span>Tốc độ gõ trung bình: 31 WPM</span>
                </li>
                <li id="competitions">
                    <MdSupervisorAccount color="#17A2B8" size="2.5em" />
                    <span>Xếp hạng lý thuyết : Trung bình</span>
                </li>
                <hr />
                <li id="ranking">
                    <BiAward color="#FFC107" size="2.5em" />
                    <span>Rank : 120</span>
                    <BiHelpCircle
                        size="1.5rem"
                        style={{ marginLeft: "1rem" }}
                        onClick={toggleRankingHelp}
                        id="help-icon"
                    />
                    <div
                        ref={rankingHelpRef}
                        className="ranking-help shadow hidden"
                    >
                        <img src={rankingHelp} alt="help" />
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Bio;
