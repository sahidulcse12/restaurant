import React from 'react';
import { Card, CardBody, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const MenuItem = (props) => {
    const { name, image } = props.dish;
    //console.log(props)
    return (
        <div>
            <Card style={{ margin: "10px" }}>
                <CardBody>
                    <CardImg width="100%" alt={name} src={image} style={{ opacity: ".5" }}></CardImg>
                    <CardImgOverlay>
                        <CardTitle style={{ cursor: "pointer", fontSize: "20px" }} onClick={props.DishSelect}>{name}</CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    );
};

export default MenuItem;