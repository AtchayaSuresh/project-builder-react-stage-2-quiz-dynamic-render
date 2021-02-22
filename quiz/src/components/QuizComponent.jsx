import React, { Component } from 'react';
import "./components.css";

export default class QuizComponent extends Component {
    render() {
        return (
            <div className='background'>
                <div className='overlay'>
                    <h1 className='title' id='quiz-title'>Question</h1>
                    <h2>Which is the only mammal that can't jump?</h2>

                    <div className='option-div '>
                        <button className="options button-style">Dog</button>
                        <button className="options button-style">Goat</button>
                        <button className="options button-style">Elephant</button>
                        <button className="options button-style">Lion</button>
                    </div>

                    <div className='button-bar'>
                        <input type="button" value="Previous" className="button-style"/>
                        <input type="button" value="Next" className="button-style"/>
                        <input type="button" value="Quit" className="button-style"/>
                    </div>
                </div>
                
            </div>
        )
    }
}
