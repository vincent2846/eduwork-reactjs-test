import React from "react";
import ClassComponent from "./pembahasan/ClassComponent";
import FunctionalComponent from "./pembahasan/FunctionalComponent";
import TestComponent from "./pembahasan/TestComponent";

export default class Komponen extends React.Component{
    render(){
        return (
            <div>
                <ClassComponent nama="Vincent N"/>
                {/* <FunctionalComponent nama="Vincent N"/> */}
                <FunctionalComponent/>
                <TestComponent />
            </div>
        )
    }
}