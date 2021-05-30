import StenoRulesTable from "./lession-materials/StenoRulesTable";
import FingerPlaceGuide from "./lession-materials/FingerPlaceGuide";
import { useState, useRef } from "react";
import LessionPracticeContent from "./LessionPracticeContent";
import { MdClose, MdArrowForward } from "react-icons/md";

function LessionContent(props) {
    const lessionContentWrapperRef = useRef();
    // const { hideLessionContent } = props;
    const [lessionPracticeContent, setLessionPracticeContent] = useState(null);

    const showLessionPracticeContent = () => {
        setLessionPracticeContent({});
        lessionContentWrapperRef.current.style.overflow = "hidden";
    };

    const hidePracticeContent = () => {
        document.querySelector(".lession-practice-wrapper").style.transform =
            "translateY(100%)";
        const timer = setTimeout(() => {
            setLessionPracticeContent(null);
            lessionContentWrapperRef.current.style.overflow = "auto";
            clearTimeout(timer);
        }, 300);
    };

    return (
        <div className="">
            {/* {lessionPracticeContent == null && (
                <div className="close-icon" onClick={hideLessionContent}>
                    <a href="/baihoc"><MdClose /></a>
                </div>
            )} */}
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

            <div
                className="m-3"
            >
                <section className="lession-header">
                    <h3 className="topic-header">Học gõ âm đầu</h3>
                    <h5 className="lession-title">
                        Những âm có cùng cách phát âm với phím tốc ký
                    </h5>
                </section>
                <div>
                    <StenoRulesTable />
                </div>
                <FingerPlaceGuide />

                <div className="text-center mt-5">
                    <a href='/learn'>
                        <button
                            className="btn btn-primary"
                        >
                            Luyện tập
                            <MdArrowForward size="1.5em" />
                        </button>
                    </a>
                </div>
            </div>

            {lessionPracticeContent !== null && (
                <LessionPracticeContent
                    hidePracticeContent={hidePracticeContent}
                />
            )}
        </div>

    );
}

export default LessionContent;
