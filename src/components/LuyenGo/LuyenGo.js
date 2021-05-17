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

                <Tab eventKey="luyen-go-am" title="Luyện gõ âm">
                    <div className="tab-item-wrapper">
                        <LuyenGoAm />
                    </div>
                </Tab>
                <Tab eventKey="luyen-go-cau" title="Luyện gõ đoạn">
                    <LuyenGoDoan />
                </Tab>
            </Tabs>
            <div className="keyboards">
                <QwertyStenoKeyboard style={{ fontSize: 14 }} />
                <StenoKeyboard style={{ fontSize: 20 }} />
            </div>
        </>
    );
}
export default LuyenGo;
