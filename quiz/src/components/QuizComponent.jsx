import React, { Component } from 'react';
import "./components.css";
import questions from "../resources/questions.json"

export default class QuizComponent extends Component {
    constructor(){
        super();
        this.state=({
            'questionNumber':1
        })
    }

    //previous button
    previousQuestionHandler = ()=>{
        this.setState({
            'questionNumber':this.state.questionNumber-1
        });
    }

    //next button
    nextQuestionHandler = ()=>{
        this.setState({
            'questionNumber':this.state.questionNumber+1
        });
    }
    render() {
        return (
            <div className='background'>
                <div className='overlay'>
                    <h1 className='title' id='quiz-title'>Question</h1>
                    <h2>{questions[this.state.questionNumber].id}. {questions[this.state.questionNumber].question}</h2>
                    
                    <div className='grid-div '>
                        <button className="options button-style">{questions[this.state.questionNumber].options[0]}</button>
                        <button className="options button-style">{questions[this.state.questionNumber].options[1]}</button>
                        <button className="options button-style">{questions[this.state.questionNumber].options[2]}</button>
                        <button className="options button-style">{questions[this.state.questionNumber].options[3]}</button>
                    </div>

                    <div className='button-bar'>
                        <input type="button" value="Previous" onClick={this.previousQuestionHandler} className="button-style"/>
                        <input type="button" value="Next" onClick={this.nextQuestionHandler} className="button-style"/>
                        <input type="button" value="Quit" className="button-style"/>
                    </div>
                </div>
                
            </div>
        )
    }
}
