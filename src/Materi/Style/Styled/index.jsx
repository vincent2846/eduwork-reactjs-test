import React from "react";

import styled from 'styled-components';


const Button = styled.button `

    border: 2px solid black;
    background-color:  white;
    color: black;
    padding: 14px 28px;
    font-size:  16px;
    cursor: pointer;

    &:hover{
        background: #2196F3;
        color: white;
    }

`

export default class Styled extends React.Component{
    render(){
        return(
            <div>
                <Button >
                    Go Eduwork
                </Button>
                {/* <button className={`${style.btn} ${style.btninfo}`}> Go Eduwork </button> */}
            </div>
        )
    }
}