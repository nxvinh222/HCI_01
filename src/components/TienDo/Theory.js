import Phan2 from "./digram/Phan2";
import Radar from "./digram/Radar";
import 'bootstrap/dist/css/bootstrap.min.css';


function Theory() {
    return (
        <div>

            <div className="practice-statistic">
                <h3>Lý thuyết</h3>
                <div class="row">
                    <div class="col-sm-8">
                        <div class="card">
                            <Radar />
                            <div class="card-body shadow">
                                <h5 class="card-title">Chú thích</h5>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <p class="card-text">Phần 1: Giới thiệu bàn phím </p>
                                        <p class="card-text">tốc ký</p>
                                        <p class="card-text">Phần 2: Quy tắc gõ âm đầu</p>
                                        <p class="card-text">Phần 3: Quy tắc gõ âm chính không </p>
                                        <p class="card-text">có âm chính </p>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="card-text">Phần 4: Quy tắc gõ âm chính có âm đệm</p>
                                        <p class="card-text">Phần 5: Quy tắc gõ dấu thanh</p>
                                        <p class="card-text">Phần 6: Quy tắc gõ âm cuôi</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card">
                            <div class="card-header"><h5>Đề xuất cải thiện</h5></div>
                            <div class="card-body">
                                <p class="card-text">Gõ câu</p>
                                <p class="card-text">Gõ từ</p>
                                <p class="card-text">Gõ âm</p>
                                <p class="card-text">Gõ phím</p>
                            </div>
                        </div>
                    </div>
                </div>
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
                                Đánh giá:{" "}
                                <span className="normal-evaluation">Trung bình</span>
                            </div>
                        </div>
                    </li>
                    <li id="go-am1">
                        <h2>Gõ âm chính không âm đệm</h2>
                        <Phan2 />
                        <div className="evaluation">
                            <div className="accuracy-evaluation">
                                Đánh giá:{" "}
                                <span className="normal-evaluation">Trung bình</span>
                            </div>
                        </div>
                    </li>
                    <li id="go-am2">
                        <h2>Gõ âm chính có âm đệm</h2>
                        <Phan2 />
                        <div className="evaluation">
                            <div className="accuracy-evaluation">
                                Đánh giá:{" "}
                                <span className="normal-evaluation">Trung bình</span>
                            </div>
                        </div>
                    </li>
                    <li id="go-am3">
                        <h2>Gõ dấu thanh</h2>
                        <Phan2 />
                        <div className="evaluation">
                            <div className="accuracy-evaluation">
                                Đánh giá:{" "}
                                <span className="normal-evaluation">Trung bình</span>
                            </div>
                        </div>
                    </li>
                    <li id="go-am4">
                        <h2>Gõ âm cuối</h2>
                        <Phan2 />
                        <div className="evaluation">
                            <div className="accuracy-evaluation">
                                Đánh giá:{" "}
                                <span className="normal-evaluation">Tốt</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

    );
}

export default Theory;
