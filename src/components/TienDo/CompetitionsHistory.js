import { Table } from "react-bootstrap";
import { BiCalendar, BiTime } from "react-icons/bi";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import TableScrollbar from 'react-table-scrollbar';

function CompetitionsHistory() {
    return (
        <div>
            <div className="competitions-history">
                <h3>Xếp hạng</h3>
                <Table striped bordered className="history-table">
                    <thead>
                        <tr>
                            <td>Xếp hạng</td>
                            <td>Tăng/Giảm Bậc</td>
                            <td>Tên người dùng</td>
                            <td>Tốc độ</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>3 <AiFillCaretUp style={{ color: 'green' }} /></td>
                            <td>Vinh</td>
                            <td>120 WPM</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>2 <AiFillCaretUp style={{ color: 'green' }} /></td>
                            <td>Phương</td>
                            <td>119 WPM</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>3 <AiFillCaretUp style={{ color: 'green' }} /></td>
                            <td>Long</td>
                            <td>118 WPM</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td> 1 <AiFillCaretDown style={{ color: 'red' }} /></td>
                            <td>Vinh</td>
                            <td>110 WPM</td>
                        </tr>
                        <tr>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                        </tr>
                        <tr style={{ color: '#FFD700' }}>
                            <td>120</td>
                            <td>4 <AiFillCaretUp /></td>
                            <td>Bạn</td>
                            <td>58 WPM</td>
                        </tr>
                        <tr>
                            <td>121</td>
                            <td>5 <AiFillCaretDown style={{ color: 'red' }} /></td>
                            <td>Hello</td>
                            <td>30 WPM</td>
                        </tr>
                        <tr>
                            <td>122</td>
                            <td >9 <AiFillCaretUp style={{ color: 'green' }} /></td>
                            <td>HI</td>
                            <td>29 WPM</td>
                        </tr>
                    </tbody>
                </Table>
            </div>

            <div className="competitions-history">
                <h3>Lịch sử thi đấu</h3>
                <Table striped bordered className="history-table">
                    <thead>
                        <tr>
                            <td>Thời điểm</td>
                            <td>Xếp hạng</td>
                            <td>Tốc độ</td>
                            <td>Độ chính xác</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <BiCalendar />
                            12/12/2020&nbsp;&nbsp;&nbsp;&nbsp;
                            <BiTime />
                            15:31:03
                        </td>
                            <td>3 </td>
                            <td>87 WPM</td>
                            <td>87 %</td>
                        </tr>
                        <tr>
                            <td>
                                <BiCalendar />
                            25/4/2021&nbsp;&nbsp;&nbsp;&nbsp;
                            <BiTime />
                            19:31:13
                        </td>
                            <td>1</td>
                            <td>137 WPM</td>
                            <td>81 %</td>
                        </tr>
                        <tr>
                            <td>
                                <BiCalendar />
                            30/4/2021&nbsp;&nbsp;&nbsp;&nbsp;
                            <BiTime />
                            19:21:07
                        </td>
                            <td>4</td>
                            <td>87 WPM</td>
                            <td>87 %</td>
                        </tr>
                        <tr>
                            <td>
                                <BiCalendar />
                            4/5/2021&nbsp;&nbsp;&nbsp;&nbsp;
                            <BiTime />
                            20:31:03
                        </td>
                            <td>5</td>
                            <td>87 WPM</td>
                            <td>92 %</td>
                        </tr>
                        <tr>
                            <td>
                                <BiCalendar />
                            9/5/2021&nbsp;&nbsp;&nbsp;&nbsp;
                            <BiTime />
                            20:25:29
                        </td>
                            <td>3</td>
                            <td>97 WPM</td>
                            <td>83 %</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>

    );
}

export default CompetitionsHistory;
