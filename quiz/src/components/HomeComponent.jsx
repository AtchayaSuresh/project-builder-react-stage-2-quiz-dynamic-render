import React, { Component } from 'react';
import "./components.css";

export default class HomeComponent extends Component {
    render() {
        return (
            <div className='background'>
                <h1 className="title">Quiz App</h1>
                <input type="button" className='button-style' value="Play Now"/>
            </div>
        )
    }
}
