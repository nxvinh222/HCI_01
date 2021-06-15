import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "./App.css";
import { MdHome, MdSearch } from "react-icons/md";
import logo from "./static/images/typing-fr.png";
import avatar from "./static/images/logo-soict.png"


export default class Nav extends Component {
    constructor(props){
        super(props);

        var name = localStorage.getItem('username');
        if (name != null && name != undefined) {
            this.state= {
                logined:true
            }
        } else {
            this.state= {
                logined:false
            }
        } 
        this.state.username = name; 

    }

    
    logout() {
        localStorage.removeItem('username');
        window.location.reload();

    }
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-sm bg-light shadow">
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <Link to={"/"} className="navbar-brand logo">
                            <img
                            src={logo}
                            alt="logo"
                            width="90"
                        />
                        <h5 style={{ color: 'blue' }}>Gõ Tốc Ký</h5>
                        </Link>

                        <ul className="navbar-nav  ml-auto">
                            {
                                this.state.logined ?
                                <>
                                <li className="nav-link">
                                    <NavLink to="/baihoc" activeClassName="active">
                                        Bài học
                                    </NavLink>
                                </li>
                                <li className="nav-link">
                                    <NavLink to="/luyengo" activeClassName="active">
                                        Luyện gõ
                                    </NavLink>
                                </li>
                                <li className="nav-link">
                                    <NavLink to="/tiendo" activeClassName="active">
                                        Tiến độ
                                    </NavLink>
                                </li>
                                <li className="nav-link">
                                    <NavLink to="/thidau" activeClassName="active">
                                        Thi đấu
                                    </NavLink>
                                </li>
                                <li className="nav-link">
                                    <NavLink
                                        to="/soanthao"
                                        activeClassName="active"
                                    >
                                        Soạn thảo
                                    </NavLink>
                                </li>

                                <li className="nav-link">
                                    <NavLink
                                        to="/tudien"
                                        activeClassName="active"
                                    >
                                        Từ điển
                                    </NavLink>
                                </li>

                                <li className="nav-link">
                                    <NavLink
                                        to="#"
                                        activeClassName="active"
                                    >
                                    <h4 style={{ color: 'blue' }}>{localStorage.getItem('username')}</h4>
                                    
                                    </NavLink>
                                </li>

                                <li className="nav-link">
                                    <NavLink
                                        onClick={this.logout}
                                        to="/"
                                        activeClassName="active"
                                    >
                                        Đăng xuất
                                    </NavLink>
                                </li>
                                </>
                            :
                                <>
                                 <li class="nav-item">
                                    <a class="nav-link page-scroll" href="/#header">Giới thiệu<span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link page-scroll" href="/#home2">Nội dung khóa học</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link page-scroll" href="/#home3">Liên hệ</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link page-scroll" href="/login">Đăng nhập</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link page-scroll" href="/register">Đăng ký</a>
                               
                                </li>
                            </>
    }
                           
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}
