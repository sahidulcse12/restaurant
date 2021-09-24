import React from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from 'reactstrap';
import { baseUrl } from '../../redux/baseUrl';

const MenuItem = props => {
    return (
        <div className="col-md-4">
            <Card style={{ margin: "10px", fontSize: "20px", fontWeight: "bold" }}>
                <CardBody>
                    <CardImg
                        width="100%"
                        alt={props.dish.name}
                        src={baseUrl + props.dish.image}
                        style={{ opacity: "0.7" }} />
                    <CardImgOverlay>
                        <CardTitle
                            style={{ cursor: "pointer" }}
                            onClick={props.DishSelect}
                        >
                            {props.dish.name}
                        </CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    );
}

export default MenuItem;