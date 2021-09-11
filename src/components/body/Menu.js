import React, { useState } from 'react';
import DISHES from '../../data/dishes';
import MenuItem from './MenuItem';
import DishDetails from './DishDetails';

const Menu = () => {

    const [dishes, setDishes] = useState(DISHES);
    const [selectedDish, setSelectedDish] = useState(null);

    const onDishSelect = (dish) => {
        setSelectedDish(dish)
        //console.log(dish);
    }

    let dishDetails = null;
    if (selectedDish != null) {
        dishDetails = <DishDetails dish={selectedDish} />
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    {
                        dishes.map(item => <MenuItem dish={item} key={item.id} DishSelect={() => onDishSelect(item)}></MenuItem>)
                    }
                </div>
                <div className="col-md-6">
                    {dishDetails}
                </div>
            </div>
        </div>
    );
};

export default Menu;