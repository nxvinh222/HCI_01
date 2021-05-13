import React, { useState } from "react";
import "./luyengo.css";
import QwertyStenoKeyboard from "../keyboard/qwerty-steno-keyboard/QwertyStenoKeyboard";
import StenoKeyboard from "../keyboard/steno-keyboard/StenoKeyboard";
import StenoInput from "../keyboard/StenoInput";
import { Tabs, Tab } from "react-bootstrap";
import LuyenGoDoan from "./LuyengGoDoan/LuyenGoDoan";
import LuyenGoAm from "./LuyengGoDoan/LuyenGoAm";
import Huongdan from "./LuyengGoDoan/Huongdan";

const LuyenGo = () => {

    return (
        <>
            <Tabs defaultActiveKey="luyen-go-am">

                <Tab eventKey="Huong dan" title="Hướng dẫn luyện gõ">
                    <Huongdan/>
                </Tab>
                {/* <Tab eventKey="luyen-go-phim" title="Luyện gõ phím">
                        <div className="tab-item-wrapper">
                            <h5>Luyện gõ phím</h5>
                        </div>
                    </Tab> */}

                <Tab eventKey="luyen-go-am" title="Luyện gõ âm">
                    <div className="tab-item-wrapper">
                        {/* <div className="center">
                                <div className="leftLG">
                                    <div class="btn-group">
                                        <div className="tabbar2 activeLG">
                                            Gõ âm đầu
                                        </div>
                                        <div className="tabbar2">
                                            Gõ âm chính
                                        </div>
                                        <div className="tabbar2">
                                            Gõ âm cuối
                                        </div>
                                    </div>
                                    <div className="box">
                                        <h4>
                                            C &ensp; CH &ensp; S &ensp; T &ensp;
                                            TH &ensp; K &ensp; L &ensp; M &ensp;
                                            Q
                                        </h4>
                                        <StenoInput
                                            onKeyDownHook={this.onKeyDown}
                                            onChangeHook={this.onchangeText}
                                        />
                                    </div>
                                </div>
                                <div className="rightLG">
                                    <div>
                                        <div className="time">
                                            {this.state.time.m} :{" "}
                                            {this.state.time.s}
                                            <div style={{ fontSize: 20 }}>
                                                <span>
                                                    Số từ đã gõ:
                                                    {" " + this.state.typedWord}
                                                </span>
                                                <br />
                                                <span>
                                                    Số từ đúng:
                                                    {" " + this.state.typedWord}
                                                </span>
                                                <br />
                                                <span>
                                                    Tốc độ:{" "}
                                                    {" " +
                                                        this.state.speed +
                                                        " "}{" "}
                                                    VPM
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        <LuyenGoAm />
                    </div>
                </Tab>

                {/* <Tab eventKey="luyen-go-tu" title="Luyện gõ từ">
                        <div className="tab-item-wrapper">
                            <h5>Luyện gõ từ</h5>
                        </div>
                    </Tab> */}

                <Tab eventKey="luyen-go-cau" title="Luyện gõ đoạn">
                    <LuyenGoDoan />
                </Tab>

                {/* <Tab eventKey="luyen-go-doan" title="Luyện gõ đoạn"> */}
                {/*     <div className="tab-item-wrapper"> */}
                {/*         <h5>Luyện gõ đoạn</h5> */}
                {/*     </div> */}
                {/* </Tab> */}
            </Tabs>
            <div className="keyboards">
                <QwertyStenoKeyboard style={{ fontSize: 14 }} />
                <StenoKeyboard style={{ fontSize: 20 }} />
            </div>
        </>
    );
}
export default LuyenGo;
