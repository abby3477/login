import React , { Component, PropTypes } from 'react';

const buttonStyle = {
    margin: '10px'
};
class LoginCounter extends Component {
    constructor(props) {
        super(props);
        this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
        this.state = {
            count: props.initValue
        }
    }
    onClickIncrementButton() {
        this.updateCount(true);
    }
    onClickDecrementButton() {
        this.updateCount(false);
    }
    updateCount(isIncrement) {
        const previousValue = this.state.count;
        const newValue = isIncrement ? previousValue + 1 : previousValue - 1;
        this.setState({
            count: newValue
        })
        this.props.onUpdate(newValue, previousValue);
    }
    render() {
        const {caption} = this.props;
        return (
            <div>
    			<button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
    			<button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
    			<span>{caption} count:{this.state.count}</span>
    		</div>
        );
    }
}

// <Counter caption="Third" initValue={20} />
LoginCounter.PropTypes = {
    //caption: PropTypes.string.isRequired,
    //initValue: PropTypes.number
    //onUpdate: PropTypes.func
};
LoginCounter.defaultProps = {
    initValue: 0,
    onUpdate: f => f //什么都不做的函数
}
export default LoginCounter;