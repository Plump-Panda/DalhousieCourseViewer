import React, {Component} from 'react';
import json from '../../data/data.json';
import {makeCard} from '../../cardRenderer';

export default class SecondYear extends Component{

    constructor(props){
        super(props)
        this.state = json;
    }

    render(){
        return(
            <div>
                <h1 id='title'>2nd Year Courses</h1>
                {makeCard(this.state,2)}
            </div>       
        );
    }
}