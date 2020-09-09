import React, {Component} from 'react';
import json from '../../data/data.json';
import {makeCard} from '../../cardRenderer';

export default class LevelNine extends Component{

    constructor(props){
        super(props)
        this.state = json;
    }

    render(){
        return(
            <div>
                <h1 id='title'>9000 Level Courses</h1>
                {makeCard(this.state,9)}
            </div>       
        );
    }
}