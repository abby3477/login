import React , { Component } from 'react';
class ClickCounter extends Component {
    constructor(props) {
        super(props);
        this.onClickButton = this.onClickButton.bind(this);
        this.state = {
            count: 0
        };
    }
    onClickButton() {
        this.setState({
            count: this.state.count + 1
        });
        /*let {a} = {
    a: 1,
    b: 2
}
console.log(a);*/
    }
    render() {
        return (
            <div>
                <button onClick = {this.onClickButton}>Click me</button>
                <div>Click count:{this.state.count}</div>
            </div>
        );
    }
}
export default ClickCounter;