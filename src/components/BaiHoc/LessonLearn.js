import React, { useState } from "react";
import "./luyengo.css";
import LuyenGoAm from "./LuyengGoDoan/LuyenGoAm";
import VirtualKeyboard from "../keyboard/virtualKeyboard/VirtualKeyboard";
import { MdClose } from "react-icons/md";

const LessonLearn = () => {

    return (
        <>
            <div className="close-icon">
                <a href="/baihoc"><MdClose /></a>
            </div>
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
