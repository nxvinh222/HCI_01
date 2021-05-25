import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "./App.css";
import { MdHome, MdSearch } from "react-icons/md";

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

    }

    
    logout() {
        localStorage.removeItem('username');
        window.location.reload();

    }
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-sm bg-light shadow fixed-top">
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <Link to={"/"} className="navbar-brand logo">
                            Gõ Tốc Ký
                        </Link>
                        <form className="form-inline search-form ml-5">
                            <input
                                className="form-control mr-sm-2"
                                type="text"
                                placeholder="Search"
                            />
                            <button>
                                <MdSearch />
                            </button>
                        </form>

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
                                <li className="nav-link">
                                    <a href='#home1'>Giới thiệu</a>
                                </li>
                                <li className="nav-link">
                                    <a href='#home2'>Nội dung khóa học</a>
                                </li>
                                <li className="nav-link">
                                    <a href='#home3'>Liên hệ</a>
                                </li>
                                <li className="nav-link">
                                    <NavLink
                                        to="/register"
                                        activeClassName="active"
                                    >
                                        Đăng ký
                                    </NavLink>
                                </li>
                                <li className="nav-link">
                                    <NavLink
                                        to="/login"
                                        activeClassName="active"
                                    >
                                        Đăng nhập
                                    </NavLink>
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
