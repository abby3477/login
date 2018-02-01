import React, { Component, PropTypes } from 'react';
import LoginCounter from './LoginCounter';

const style = {
    margin: '20px'
};
class LoginCrolpanel extends Component {
    constructor(props) {
        super(props);
        this.onCounterUpdate = this.onCounterUpdate.bind(this);
        this.initValues = [0, 10, 20];
        const initSum = this.initValues.reduce((a, b) => a + b, 0);
        this.state = {
            sum: initSum
        }
    }
    onCounterUpdate(newValue, previousValue) {
        const isIncreaseCount = newValue - previousValue;
        this.setState({
            sum: this.state.sum + isIncreaseCount
        })
    }
    render() {
        return (
            <div>
				<LoginCounter style={style} onUpdate={this.onCounterUpdate} caption="First" initValue={0}/>
				<LoginCounter style={style} onUpdate={this.onCounterUpdate} caption="Second" initValue={this.initValues[1]}/>
				<LoginCounter style={style} onUpdate={this.onCounterUpdate} caption="Third" initValue={this.initValues[2]}/>
				<hr/>
        		<div>Total Count: {this.state.sum}</div>
			</div>
        );
    }
}
export default LoginCrolpanel;
