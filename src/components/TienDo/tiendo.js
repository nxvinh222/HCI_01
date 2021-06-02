import React, { Component } from "react";
import "./tiendo.css";
import Bio from "./Bio";
import LearnedLessionsStatistic from "./LearnedLessionsStatistic";
import PracticeStatistic from "./PracticeStatistic";
import CompetitionsHistory from "./CompetitionsHistory";
import { Tabs, Tab } from "react-bootstrap";
import Theory from "./Theory";

export default class TienDo extends Component {
    render() {
        return (

            <Tabs defaultActiveKey="luyen-go-am">

                <Tab eventKey="luyen-go-am" title="Tổng quan và Lý thuyết">
                    <div className="user-statistic">
                        <Bio />
                        <LearnedLessionsStatistic />
                        <Theory/>
                    </div>
                </Tab>

                <Tab eventKey="Huong dan" title="Thống kê và Xếp hạng">
                    <PracticeStatistic />
                    <CompetitionsHistory />
                </Tab>

            </Tabs>
        );
    }
}
