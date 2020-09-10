import React, {Component} from 'react';
import json from '../data/data.json';
import {makeCard} from '../cardRenderer';

export default class ThirdYear extends Component{

    constructor(props){
        super(props)
        this.state = json;
    }

    render(){
        return(
            <div>
                <h1 id='title'>All Courses</h1>
                {makeCard(this.state,1)}
                {makeCard(this.state,2)}
                {makeCard(this.state,3)}
                {makeCard(this.state,4)}
                {makeCard(this.state,6)}
                {makeCard(this.state,7)}
                {makeCard(this.state,8)}
                {makeCard(this.state,9)}
            </div>       
        );
    }
}