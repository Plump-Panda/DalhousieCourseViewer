import React, {Component} from 'react';
import { Card } from 'react-bootstrap';

function getCard(code,name){
    return(
        <Card style={{marginBottom: '2.5%'}}>
            <Card.Header>{code}</Card.Header>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
            </Card.Body>
        </Card>
    );
}

export const makeCard = (json, courseLevel) => {
    return json.course.map((course) =>{
        const {code,name} = course;
        let check = code.toString().charAt(5);

        //This looks hella dumb, probs a better way to do it
        switch(courseLevel){
            //Will get all the courses
            case 0:
                return(
                    getCard(code,name)
                )
            case 1:
                if(check === '1'){
                    return(
                        getCard(code,name)
                    )
                 }
                 break;
            case 2:
                if(check === '2'){
                    return(
                        getCard(code,name)
                    )
                 }
                 break;
            case 3:
                if(check === '3'){
                    return(
                        getCard(code,name)
                    )
                 }
                 break;
            case 4:
                if(check === '4'){
                    return(
                        getCard(code,name)
                    )
                 }
                 break;
            case 6:
                if(check === '6'){
                    return(
                        getCard(code,name)
                    )
                 }   
                 break;  
            case 7:
                if(check === '7'){
                    return(
                        getCard(code,name)
                    )
                 }
                 break;
            case 8:
                if(check === '8'){
                    return(
                        getCard(code,name)
                    )
                 }
                 break;
            case 9:
                if(check === '9'){
                    return(
                        getCard(code,name)
                    )
                 }
                 break;
        }
    });
}
