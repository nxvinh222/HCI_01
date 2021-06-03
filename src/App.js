import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./nav";
import Home from "./components/home/home";
import BaiHoc from "./components/BaiHoc/baihoc";
import Login from "./components/Login/login";
import Register from "./components/Login/Register";
import ListUser from "./components/Login/ListUser";
import LuyenGo from "./components/LuyenGo/LuyenGo";
import LessionContent from "./components/BaiHoc/LessionContent";
import LessonContentNew from "./components/BaiHoc/LessonContentNew";
import LessonLearn from "./components/BaiHoc/LessonLearn";
import Thidau from "./components/thidau/Thidau";
import TienDo from "./components/TienDo/tiendo";
import Soanthao from "./components/soanthao/Soanthao";
import TuDien from "./components/TuDien/TuDien";
import Footer from "./footer";

class App extends Component {
    render() {
        return (
            <Router>
                <Nav />
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route
                            path="/baihoc/:topicId"
                            component={LessionContent}
                        />
                        <Route
                            path="/baihocnew/:topicId"
                            component={LessonContentNew}
                        />
                        <Route
                            path="/learn"
                            // component={LessionsList}
                            component={LessonLearn}
                        />
                        <Route path="/baihoc" component={BaiHoc} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/listUser" component={ListUser} />
                        <Route path="/luyengo" component={LuyenGo} />
                        <Route path="/tiendo" component={TienDo} />
                        <Route path="/thidau" component={Thidau} />
                        <Route path="/soanthao" component={Soanthao} />
                        <Route path="/tudien" component={TuDien} />
                    </Switch>
                </div>
                <Footer />
            </Router>
        );
    }
}

export default App;
