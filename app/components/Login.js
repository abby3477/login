import React , { Component, PropTypes } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            userName: "",
            password: ""
        }
    }
    handleChange(e) {
        var newState = {};
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    }
    handleClick() {
        var data = {
            userName: this.state.userName,
            password: this.state.password
        };
    }
    render() {
        return (
            <div>
				<div>
					<label>登录名：</label>
					<input type="text" placeholder="loginName" onChange={this.handleChange}/>
				</div>
				<div>
					<label>密 码：</label>
					<input type="text" placeholder="password" onChange={this.handleChange}/>
				</div>
				<div>
					<button onClick={this.handleClick}>提交</button>
				</div>
			</div>
        );
    }
}
export default Login;