import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import json from '../../data/data.json';

export default class LevelNine extends Component{

    constructor(props){
        super(props)
        this.state = json;
    }

    renderTableData(){
        return this.state.course.map((course) => {
            const {code,name} = course;
            let check = code.toString().charAt(5);
            
            if(check === '9'){
                return(
                    <tr>
                        <td>{code}</td>
                        <td>{name}</td>
                    </tr>
                )
            }
        });
    }
    
    render(){
        return(
            <div>
                <h1 id='title'>9000 Level Courses</h1>
                <table id='courses'>
                    <tbody>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>       
        );
    }
}