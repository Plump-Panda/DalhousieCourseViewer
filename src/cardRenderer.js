import React, {Component} from 'react';
import { Card } from 'react-bootstrap';

function getCard(code,name,description,creditHours,borderColour){
    if(description == ""){
        description = "No description available";
    }
    return(
        <Card style={{marginBottom: '2.5%'}} border={borderColour}>
            <Card.Header>{code}</Card.Header>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{creditHours}</Card.Text>
                 <Card.Text>{description}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export const makeCard = (json, courseLevel) => {
    return json.course.map((course) =>{
        const {code,name,description,creditHours} = course;
        let check = code.toString().charAt(5);

        //This looks hella dumb, probs a better way to do it
        switch(courseLevel){
            case 1:
                if(check === '1'){
                    return(
                        getCard(code,name,description,creditHours,'primary')
                    )
                 }
                 break;
            case 2:
                if(check === '2'){
                    return(
                        getCard(code,name,description,creditHours,'success')
                    )
                 }
                 break;
            case 3:
                if(check === '3'){
                    return(
                        getCard(code,name,description,creditHours,'danger')
                    )
                 }
                 break;
            case 4:
                if(check === '4'){
                    return(
                        getCard(code,name,description,creditHours,'warning')
                    )
                 }
                 break;
            case 6:
                if(check === '6'){
                    return(
                        getCard(code,name,description,creditHours,'secondary')
                    )
                 }   
                 break;  
            case 7:
                if(check === '7'){
                    return(
                        getCard(code,name,description,creditHours,'light')
                    )
                 }
                 break;
            case 8:
                if(check === '8'){
                    return(
                        getCard(code,name,description,creditHours,'info')
                    )
                 }
                 break;
            case 9:
                if(check === '9'){
                    return(
                        getCard(code,name,description,creditHours,'dark')
                    )
                 }
                 break;
        }
    });
}
