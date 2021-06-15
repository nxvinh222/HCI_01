import React, {Component} from 'react';
import axios from 'axios';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            password: '',
            age:''
        }
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onChangeAge(e) {
        this.setState({
            age: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const obj = {
            email: this.state.email,
            password: this.state.password,
            age: this.state.age
        };
        axios.post('http://localhost:4000/users/add', obj)
            .then(res => console.log(res.data));

        this.setState({
            email: '',
            password: '',
            age: ''
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Add New User</h3>
                <form onSubmit={this.onSubmit} method="POST">
                    <div className="form-group">
                        <label>Email: </label>
                        <input type="text" className="form-control"
                               value={this.state.email}
                               onChange={this.onChangeEmail}
                        />
                    </div>
                    <div className="form-group">
                        <label>Mật khẩu : </label>
                        <input type="password" className="form-control" value={this.state.password}
                               onChange={this.onChangePassword}/>
                    </div>
                    <div className="form-group">
                        <label>Tuổi: </label>
                        <input type="text" className="form-control" value={this.state.age}
                               onChange={this.onChangeAge}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Đăng ký" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}