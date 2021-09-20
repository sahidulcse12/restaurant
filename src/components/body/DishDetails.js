import React from 'react';
import { Card, CardBody, CardImg, CardTitle, CardText } from 'reactstrap';
import LoadComments from './LoadComments';

const DishDetails = (props) => {
    //console.log(props)
    return (
        <div>
            <Card style={{ marginTop: '23px' }}>
                <CardImg top src={props.dish.image} alt={props.dish.name} />
                <CardBody style={{ textAlign: 'left' }}>
                    <CardTitle style={{ fontSize: '20px', fontWeight: 'bold' }}>{props.dish.name}</CardTitle>
                    <CardText>
                        {props.dish.description}
                    </CardText>
                    <CardText>
                        Price: {props.dish.price}/-
                    </CardText>
                    <hr />
                    <LoadComments comments={props.dish.comments} key={props.dish.id} />
                </CardBody>
            </Card>
        </div>
    );
};

export default DishDetails;