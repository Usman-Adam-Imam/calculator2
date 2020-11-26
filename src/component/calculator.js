import React from 'react';
import Button from './button';
import ButtonRow from './buttonRow';
import CalculatorTitle from './calculatorTitle';
import OutputScreen from './outputScreen';

class Calculator extends React.Component {
    constructor() {
        super();
        this.state = {
            question:"",
            answer:"",
            expression:""
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        const value = e.target.value;
        let evaluate = value;
        
        switch(value) {
            case "=": {
                if(this.state.question !== "") {
                    var ans = "";

                    try {
                        ans = eval(this.state.expression);
                    } catch(err) {
                        this.setState({answer: "Math Error"});
                    } if(ans === undefined) this.setState({answer: "Math Error"});
                    else this.setState({question:"", answer:ans, expression:""});
                }
            } break;

            case "Clear": {
                this.setState({question:"", answer:"", expression:""});
            } break;

            case "Delete": {
                let str = this.state.question;
                let evalStr = this.state.expression;
                str = str.substring(0, str.length - 1);
                evalStr = evalStr.substring(0, evalStr.length - 1);
                this.setState({question: str, expression:evalStr});
            } break;

            default: {
                if(value === "×") evaluate = "*";
                if(value === "÷") evaluate = "/";
                this.setState({question: this.state.question += value, expression:this.state.expression += evaluate});
            } break;
        }
    }

    render() {
        return (
            <div className="frame">
                <CalculatorTitle value="UAI Calcutor" />

                <div className="mainCalc">
                    <OutputScreen question={this.state.question} answer={this.state.answer} />

                    <ButtonRow labels={["Clear", "Delete", ".", "÷"]} click={this.handleClick} />
                    <ButtonRow labels={["7", "8", "9", "×"] } click={this.handleClick} />
                    <ButtonRow labels={["4", "5", "6", "-"] } click={this.handleClick} />
                    <ButtonRow labels={["1", "2", "3", "+"] } click={this.handleClick} />
                    <ButtonRow labels={["0", "="]} click={this.handleClick} />

                </div>
            </div>
        );
    }
}

export default Calculator;