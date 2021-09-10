import React from 'react';
import DISHES from '../../data/dishes';

const Menu = () => {

    const [dishes, setDishes] = useState(DISHES);

    return (
        <div>
            <h2>this is a menu</h2>
        </div>
    );
};

export default Menu;