import goPhim from "../../static/images/go-phim.svg";
import goAm from "../../static/images/go-am.svg";
import goTu from "../../static/images/go-tu.svg";
import goCau from "../../static/images/go-cau.svg";
import Gophim from "./digram/Gophim"
import GoDoan from "./digram/GoDoan";

function PracticeStatistic() {
    return (
        <div className="practice-statistic">
            <h3>Thống kê luyện gõ</h3>
            <div className="graph-caption">
                <span>Chú thích: &nbsp;</span>
                <span id="speed-caption">Tốc độ</span>
            </div>
            <ul className="graphs-list">
                <li id="go-phim">
                    <Gophim/>
                    <div className="evaluation">
                        <div className="speed-evaluation">
                            Tốc độ: <span className="week-evaluation">Yếu</span>
                        </div>
                    </div>
                </li>
                <li id="go-am">
                    <GoDoan/>
                    <div className="evaluation">
                        <div className="speed-evaluation">
                            Tốc độ: <span className="week-evaluation">Yếu</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default PracticeStatistic;
