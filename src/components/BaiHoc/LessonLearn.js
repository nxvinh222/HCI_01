import React, { useState } from "react";
import "./luyengo.css";
import { Tabs, Tab } from "react-bootstrap";
import LuyenGoDoan from "./LuyengGoDoan/LuyenGoDoan";
import LuyenGoAm from "./LuyengGoDoan/LuyenGoAm";
import Huongdan from "./LuyengGoDoan/Huongdan";
import VirtualKeyboard from "../keyboard/virtualKeyboard/VirtualKeyboard";

const LessonLearn = () => {

    return (
        <>
            <div className="row my-3">
                <span className="previous-lesson col text-left">
                    <a href='/baihoc/1'>
                        <button className="btn btn-primary">
                            <i class="fas fa-arrow-left"></i> Bài học trước
                        </button>
                    </a>
                </span>
                <span className="previous-lesson col text-right">
                    <a href='/baihoc/1'>
                        <button className="btn btn-primary">
                            Bài học tiếp theo <i class="fas fa-arrow-right"></i>
                        </button>
                    </a>
                </span>
            </div>
            <div className="tab-item-wrapper">
                <LuyenGoAm />
            </div>
            <VirtualKeyboard
                    disableHand={true}
                    hintKey=" "
                />
        </>
    );
}
export default LessonLearn;
