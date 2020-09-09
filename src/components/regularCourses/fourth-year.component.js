import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import json from '../../data/data.json';
import {makeCard} from '../../cardRenderer';

export default class FourthYear extends Component{

    constructor(props){
        super(props)
        this.state = json;
    }

    render(){
        return(
            <div>
                <h1 id='title'>4th Year Courses</h1>
                {makeCard(this.state,4)}
            </div>       
        );
    }
}