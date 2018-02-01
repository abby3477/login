/*import React from 'react';
import ReactDOM from 'react-dom';
var LoginForm = React.createClass({
getInitialState: function() {
    return {
        username: "",
        password: "",
    };
},
handleChange: function(e) {
    var newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
},
handleClick: function() {
    var data = {
        username : this.state.username,
        password : this.state.password,
    };
    //$.ajax({...});
},
render() {
  return (
    <div className="loginForm">
            <div className="eleItem">
              <label>登录名：</label>
              <input type="text" value={this.state.username} placeholder="不能包含特殊字符" onChange={this.handleChange} />
            </div>
            <div className="eleItem">
              <label>密&nbsp;码：</label>
              <input type="text" value={this.state.password} placeholder="六位数字密码" onChange={this.handleChange} />;
            </div>
            <div className="btnItem">
                <input type="submit" value="提交" onClick={this.handleClick} />
            </div>
    </div>
  );
}
});

module.exports = LoginForm;
*/



