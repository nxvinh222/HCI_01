import Gophim from "./digram/Gophim"
import GoDoan from "./digram/GoDoan";

function PracticeStatistic() {
    return (
        <div className="practice-statistic">
            <h3>Thống kê luyện gõ</h3>
            <div className="graph-caption">
                <span>Chú thích: &nbsp;</span>
                <span id="accuracy-caption">Độ chính xác &nbsp;</span>
                <span id="speed-caption">Tốc độ</span>
                
            </div>

            <ul className="graphs-list">
                <li id="go-phim">
                    <Gophim/>
                    <div className="evaluation">
                        <div className="accuracy-evaluation">
                            Độ chính xác: <span className="normal-evaluation">Trung Bình</span>
                        </div>
                    </div>
                    <div className="evaluation">
                        <div className="speed-evaluation">
                            Tốc độ: <span className="normal-evaluation">Trung Bình</span>
                        </div>
                    </div>
                </li>
                <li id="go-am">
                    <GoDoan/>
                    <div className="evaluation">
                        <div className="accuracy-evaluation">
                            Độ chính xác: <span className="normal-evaluation">Trung Bình</span>
                        </div>
                    </div>
                    <div className="evaluation">
                        <div className="speed-evaluation">
                            Tốc độ: <span className="normal-evaluation">Trung Bình</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default PracticeStatistic;
