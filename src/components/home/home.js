import React, { Component } from "react";
import { Link } from "react-router-dom";
import anh1 from "./anh1.png"
import icon1 from "./icon1.png"
import icon2 from "./icon2.png"
import icon3 from "./icon3.png"
import game1 from "./game1.png"
import game2 from "./game2.jpg"
import "./home.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Home extends Component {

    render() {
        return (            
            <div className="home mt-5 pt-5">
                <div class="header" id="header">
                    <div class="header-content">
                        <div class="">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="text-container">
                                        <h1 data-wow-delay="0.5s" class="wow fadeInDown "><span class="tieude1">Học gõ </span> <br/><span href="" class="typewrite" data-period="2000" data-type='[ "Tốc ký Tiếng Việt"]'>  </span></h1>
                                        <p data-wow-delay="0.8s" class="p-large wow fadeInRight">Học gõ tốc ký sẽ giúp tăng tốc độ soạn thảo của bạn một cách vượt trội, đem lại hiệu quả tuyệt vời trong công việc.</p>
                                        <br/>
                                        <br/>
                                        <Link to="/baihoc" className="start">
                                            Bắt đầu ngay
                                        </Link>
            
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="image-container">
                                        <img src={anh1} alt="anh1" />
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
               </div>


               <div id="home2" class="cards-1">
                <div class="">
                   <div class="row">
                            <div class="col-lg-12 wow zoomIn">
                                <h2 class="tieude1">NỘI DUNG KHÓA HỌC</h2>
                                <p class="p-heading p-large">
                                    <span> Khóa học cung cấp đầy đủ các quy tắc gõ Tốc ký cũng như rèn luyện kỹ năng của bạn</span><br/>
                                    <span> một cách thành thạo</span> 
                                </p>
                            </div>
                        </div>
                    </div>
                     <div class="row">
                            <div data-wow-delay="0.3s" class="card  border-left-primary shadow wow zoomIn">
                                <img src={icon1} alt="icon1" />
                                <div class="card-body">
                                    <h4 class="card-title" className="tieude2">Làm quen bàn phím</h4>
                                    <p class="p-large">Bạn sẽ được làm quen với một bàn phím mới, cách đặt bàn tay và cách thức để tương tác với bàn phím</p>                                </div>
                            </div>
                
                            <div data-wow-delay="0.3s" class="card border-left-success shadow wow zoomIn">
                                <img src={icon2} alt="icon2" />
                                <div class="card-body">
                                    <h4 class="card-title" className="tieude2">Học gõ âm</h4>
                                    <p class="p-large"> Bạn được học gõ tất cả các loại âm để cấu thành nên một từ: âm đầu, âm chính, âm cuối</p>
                                </div>
                            </div>
                
                            <div data-wow-delay="0.3s" class="card border-left-info shadow wow zoomIn">
                                <img src={icon3} alt="icon3" />
                                <div class="card-body">
                                    <h4 class="card-title" className="tieude2">Học gõ số</h4>
                                        <p class="p-large">Bạn được học quy tắc để gõ số âm, số 0 và số dương </p>
                                </div>
                            </div>
                            <div data-wow-delay="0.2s" class="card border-left-warning shadow wow zoomIn">
                            <img src={icon2} alt="icon2" />
                                <div class="card-body">
                                    <h4 class="card-title" className="tieude2">Học quy tắc xóa</h4>
                                    <p class="p-large">Trong tốc ký, có hai quy tắc để xóa ký tự: xóa bằng phím * hoặc xóa bằng tổ hợp phím tắt</p>
                                </div>
                            </div>
    
                            <div data-wow-delay="0.2s" class="card border-left-danger shadow wow zoomIn">
                                <img src={icon1} alt="icon1" />
                                <div class="card-body">
                                    <h4 class="card-title" className="tieude2">Học gõ từ</h4>
                                    <p class="p-large">Bạn sẽ được rèn luyện kỹ năng gõ các từ vựng từ đơn giản đến nâng cao: từ một âm tiết, từ hai âm tiết và cụm từ nhiều âm tiết</p>
                                </div>
                            </div>
                        
                            <div data-wow-delay="0.2s" class="card border-left-secondary shadow wow zoomIn">
                                <img src={icon3} alt="icon3" />
                                <div class="card-body">
                                    <h4 class="card-title" className="tieude2">Học gõ hoàn thiện</h4>
                                    <p class="p-large">Đây là thời điểm mà bạn hoàn thiện toàn bộ kỹ năng gõ của mình</p>
                                </div>
                            </div>  
                    </div>
                    <div class="row">
                            <div class="col-lg-12 wow zoomIn">
                                <h2 className="tieude1">HỌC TỐC KÝ QUA GAME</h2>
                                <p class="p-heading p-large">
                                    <span>
                                        Trải nghiệm học gõ Tốc ký thông qua việc chơi game giúp tạo cho bạn cảm giác
                                    </span>
                                    <br/>
                                    <span>
                                         hứng thú, thoải mái và hiệu quả
                                    </span>
                                </p>
                            </div>
                    </div>   
                    <div class="row">
                            <div class="col-lg-6 " >
                                <img src={game1} alt="game1"  className="game-thumb"/>
                            </div>
                            <div class="col-lg-6 ">
                                <img src={game2} alt="game2" className="game-thumb"/>
                            </div>  
                    </div>   
                </div>
                
                <div id="home3" class="footer">
               </div>
                


            </div>
           
        );
    }

    
}
