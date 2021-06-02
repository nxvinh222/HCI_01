import Phan2 from "./digram/Phan2";
import Phan3 from "./digram/Phan3";
import Phan4 from "./digram/Phan4";
import Phan5 from "./digram/Phan5";
import Phan6 from "./digram/Phan6";
import Radar from "./digram/Radar";

function Theory() {
    return (
        <div>
            <div className="practice-statistic">
                <h3>Lý thuyết</h3>
                <ul className="graphs-list">
                    <li id="go-phim">
                        <Radar />
                    </li>
                    <li>
                        <div className="suggestions">
                            <h4>Đề xuất cải thiện (theo thứ tự ưu tiên):</h4>
                            <ol>
                                <li>Gõ câu</li>
                                <li>Gõ từ</li>
                                <li>Gõ âm</li>
                                <li>Gõ phím</li>
                            </ol>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="practice-statistic">
                <div className="graph-caption">
                    <span>Chú thích: &nbsp;</span>
                    <span id="speed-caption">Tốc độ</span>
                </div>
                <ul className="graphs-list">
                    <li id="go-phim">
                        <h2>Gõ âm đầu</h2>
                        <Phan2 />
                        <div className="evaluation">
                            <div className="accuracy-evaluation">
                                Độ chính xác:{" "}
                                <span className="good-evaluation">Tốt</span>
                            </div>
                        </div>
                    </li>
                    <li id="go-am1">
                        <h2>Gõ âm chính không âm đệm</h2>
                        <Phan2 />
                        <div className="evaluation">
                            <div className="accuracy-evaluation">
                                Độ chính xác:{" "}
                                <span className="good-evaluation">Tốt</span>
                            </div>
                        </div>
                    </li>
                    <li id="go-am2">
                        <h2>Gõ âm chính có âm đệm</h2>
                        <Phan2 />
                        <div className="evaluation">
                            <div className="accuracy-evaluation">
                                Độ chính xác:{" "}
                                <span className="good-evaluation">Tốt</span>
                            </div>
                        </div>
                    </li>
                    <li id="go-am3">
                        <h2>Gõ dấu thanh</h2>
                        <Phan2 />
                        <div className="evaluation">
                            <div className="accuracy-evaluation">
                                Độ chính xác:{" "}
                                <span className="good-evaluation">Tốt</span>
                            </div>
                        </div>
                    </li>
                    <li id="go-am4">
                        <h2>Gõ âm cuối</h2>
                        <Phan2 />
                        <div className="evaluation">
                            <div className="accuracy-evaluation">
                                Độ chính xác:{" "}
                                <span className="good-evaluation">Tốt</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

    );
}

export default Theory;
