import React from "react";


class TestComponent extends React.Component{
    constructor(props){
        super()
        this.state ={
            Word: "Hello"
         }
         this.handleword = this.handleword.bind(this);
    }

    handleword(){
        this.setState({Word: "Thankyou for Clicking, by Vincent N"})
    }
    
    
    render(){
        return(
            <div>
                <h1>Tombol untuk Test</h1>
                <button onClick={this.handleword}>Klek Meh</button>
                <span>{'  '}{this.state.Word}</span>


            </div>
            )
        }


}


export default TestComponent;
