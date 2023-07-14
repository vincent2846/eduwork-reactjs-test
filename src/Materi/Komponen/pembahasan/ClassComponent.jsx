import React from "react";
import PropTypes from 'prop-types';

class ClassComponent extends React.Component{
constructor(props){
    super()
    this.state ={
        value: 0
    }
    this.handlePlus = this.handlePlus.bind(this);
    this.handleMin = this.handleMin.bind(this);

}

handlePlus(){
    this.setState({value: this.state.value + 1})
}

handleMin(){
    this.setState({value: this.state.value - 1})
}

render(){
    return(
        <div>
            <h1>Hello World</h1>
            <h2>Hello {this.props.nama}</h2>
            <button onClick={this.handleMin}>-</button>
            <span>{' '}{this.state.value}{' '}</span>
            <button onClick={this.handlePlus}>+</button>

        </div>
        )
    }
}

ClassComponent.propTypes = {
    nama: PropTypes.string.isRequired
}

export default ClassComponent;